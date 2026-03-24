"use client";

import { useState } from "react";

const questions = [
  { q: "塔菲的粉絲叫什麼？", options: ["棺人痴", "塔菲教徒", "王牌軍團"], answer: 1 },
  { q: "「王牌」的英文是？", options: ["King", "Ace", " Joker"], answer: 1 },
  { q: "塔菲是由哪位繪師設計的？", options: ["神樂七奈", "米哈游", "本人"], answer: 0 },
  { q: "塔菲是哪年出道的？", options: ["2020", "2021", "2022"], answer: 1 },
  { q: "塔菲粉絲數突破100萬時說了什麼？", options: ["王牌！", "謝謝大家", "兩個都要"], answer: 1 },
  { q: "塔菲的直播風格主打？", options: ["安静唱歌", "抽象整活", "讀書會"], answer: 1 },
  { q: "塔菲的��綽號「永雛」取自？", options: ["王牌發明家", "永恆的鳥", "粉絲取的名字"], answer: 0 },
  { q: "塔菲的第一次全息演唱會即將舉辦，她激動地說了什麼？", options: ["王牌！", "終於！", "兩邊粉絲都來！"], answer: 2 },
];

export default function TaffyGamePage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === questions[step].answer) {
      setScore((s) => s + 1);
    }
    setTimeout(() => {
      setSelected(null);
      if (step + 1 >= questions.length) {
        setGameOver(true);
      } else {
        setStep((s) => s + 1);
      }
    }, 1000);
  };

  const handleSubmit = async () => {
    if (!playerName.trim()) return;
    setSubmitted(true);
    try {
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "taffy", playerName, score }),
      });
    } catch {}
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🧪</div>
        <h1 className="text-2xl font-black">塔菲發明對答遊戲</h1>
        <p className="opacity-60 text-sm">測試你對永雛塔菲的了解程度！</p>
      </div>

      {!gameOver && (
        <>
          <div className="flex gap-8 mb-6 text-lg font-bold">
            <span className="text-[#f59e0b]">🏆 {score}/{questions.length}</span>
            <span className="opacity-60">第 {step + 1} 題</span>
          </div>
          <div className="w-full max-w-md">
            <h2 className="text-xl font-bold mb-6 text-center">{questions[step].q}</h2>
            <div className="space-y-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`w-full p-4 rounded-xl border transition-all font-medium text-left ${
                    selected === i
                      ? i === questions[step].answer
                        ? "border-green-500 bg-green-500/20 text-green-400"
                        : "border-red-500 bg-red-500/20 text-red-400"
                      : selected !== null && i === questions[step].answer
                      ? "border-green-500 bg-green-500/20 text-green-400"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {gameOver && (
        <div className="text-center animate-slide-up">
          <div className="text-6xl mb-4">{score >= 7 ? "🧪" : score >= 5 ? "⚗️" : "💀"}</div>
          <h2 className="text-3xl font-black mb-2">遊戲結束！</h2>
          <p className="text-2xl font-bold text-[#f59e0b] mb-2">
            最終得分：{score}/{questions.length}
          </p>
          <p className="opacity-60 mb-6">
            {score === questions.length
              ? "🌟 完美！你是王牌級塔菲粉！"
              : score >= 5
              ? "⚡ 不錯！對塔菲有一定了解！"
              : "😂 還好你不是在塔菲的直播測驗..."}
          </p>
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
              className="block w-64 mx-auto py-2 rounded-lg bg-[#f59e0b] text-black font-bold disabled:opacity-50"
            >
              {submitted ? "已上榜 ✓" : "提交分數"}
            </button>
          </div>
          <button
            onClick={() => { setStep(0); setScore(0); setGameOver(false); setSubmitted(false); }}
            className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 font-bold hover:bg-white/20"
          >
            再玩一次
          </button>
        </div>
      )}
    </div>
  );
}
