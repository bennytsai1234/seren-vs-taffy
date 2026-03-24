"use client";

import { useState, useEffect, useCallback } from "react";

type Drop = { id: number; x: number; y: number; type: "blood" | "water" };

export default function SerenGamePage() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [drops, setDrops] = useState<Drop[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [lastClick, setLastClick] = useState<"hit" | "miss" | null>(null);
  const [round, setRound] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const spawnDrop = useCallback(() => {
    const isBlood = Math.random() > 0.3;
    const id = Date.now() + Math.random();
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 60;
    setDrops((prev) => [...prev, { id, x, y, type: isBlood ? "blood" : "water" }]);
  }, []);

  const startGame = () => {
    setPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setDrops([]);
    setGameOver(false);
    setRound(0);
    setSubmitted(false);
  };

  useEffect(() => {
    if (!playing || gameOver) return;
    if (timeLeft <= 0) {
      setPlaying(false);
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [playing, timeLeft, gameOver]);

  useEffect(() => {
    if (!playing || gameOver) return;
    const spawner = setInterval(() => {
      spawnDrop();
      setRound((r) => r + 1);
    }, 800);
    return () => clearInterval(spawner);
  }, [playing, gameOver, spawnDrop]);

  const handleClick = (drop: Drop) => {
    if (drop.type === "blood") {
      setScore((s) => s + 10);
      setLastClick("hit");
    } else {
      setScore((s) => Math.max(0, s - 5));
      setLastClick("miss");
    }
    setDrops((prev) => prev.filter((d) => d.id !== drop.id));
    setTimeout(() => setLastClick(null), 300);
  };

  const handleSubmit = async () => {
    if (!playerName.trim()) return;
    setSubmitted(true);
    try {
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "seren", playerName, score }),
      });
    } catch {}
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🦇</div>
        <h1 className="text-2xl font-black">雪蓮暈血反應遊戲</h1>
        <p className="opacity-60 text-sm">點<strong className="text-red-400">血袋</strong>加分，點<strong className="text-blue-400">水球</strong>扣分！</p>
      </div>

      {!playing && !gameOver && (
        <button
          onClick={startGame}
          className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] font-black text-xl hover:scale-105 transition-transform"
        >
          開始遊戲
        </button>
      )}

      {playing && (
        <>
          <div className="flex gap-8 mb-4 text-xl font-black">
            <span className="text-[#a78bfa]">🩸 {score} 分</span>
            <span className="text-yellow-400">⏱ {timeLeft}秒</span>
          </div>

          <div
            className="relative w-[360px] h-[360px] rounded-2xl border-2 border-white/20 bg-[#1a0f2e] overflow-hidden cursor-crosshair"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              const nearby = drops.find(
                (d) => Math.abs(d.x - x) < 15 && Math.abs(d.y - y) < 15
              );
              if (nearby) handleClick(nearby);
            }}
          >
            {drops.map((drop) => (
              <button
                key={drop.id}
                onClick={(e) => { e.stopPropagation(); handleClick(drop); }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-4xl transition-all hover:scale-125 ${
                  lastClick ? "pointer-events-none" : ""
                }`}
                style={{ left: `${drop.x}%`, top: `${drop.y}%` }}
              >
                {drop.type === "blood" ? "🩸" : "💧"}
              </button>
            ))}
            {lastClick && (
              <div className={`absolute inset-0 flex items-center justify-center text-3xl font-black ${lastClick === "hit" ? "text-green-400" : "text-red-400"}`}>
                {lastClick === "hit" ? "+10" : "-5"}
              </div>
            )}
          </div>
        </>
      )}

      {gameOver && (
        <div className="text-center animate-slide-up">
          <div className="text-6xl mb-4">{score >= 150 ? "🦇" : score >= 80 ? "😵" : "💀"}</div>
          <h2 className="text-3xl font-black mb-2">遊戲結束！</h2>
          <p className="text-2xl font-bold text-[#a78bfa] mb-6">最終得分：{score} 分</p>
          {score >= 150 && <p className="mb-4 text-green-400">🌸 太神了！你是專業暈血者！</p>}
          {score < 80 && <p className="mb-4 text-red-400">暈倒了嗎？多看幾次切片練練手！</p>}
          <div className="space-y-3 mb-6">
            <input
              placeholder="輸入你的名字上榜！"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-64 p-3 rounded-lg bg-white/10 border border-white/20 text-center"
            />
            <button
              onClick={handleSubmit}
              disabled={submitted || !playerName.trim()}
              className="block w-64 mx-auto py-2 rounded-lg bg-[#7c3aed] font-bold disabled:opacity-50"
            >
              {submitted ? "已上榜 ✓" : "提交分數"}
            </button>
          </div>
          <button
            onClick={startGame}
            className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 font-bold hover:bg-white/20"
          >
            再玩一次
          </button>
        </div>
      )}
    </div>
  );
}
