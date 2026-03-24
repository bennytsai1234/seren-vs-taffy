"use client";

import { useState, useEffect } from "react";

type Score = { id: string; game: string; playerName: string; score: number; createdAt: string };

export default function LeaderboardPage() {
  const [tab, setTab] = useState<"seren" | "taffy">("seren");
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/scores?game=${tab}`)
      .then((r) => r.json())
      .then((data) => {
        setScores(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [tab]);

  const serenScores = scores.filter((s) => s.game === "seren");
  const taffyScores = scores.filter((s) => s.game === "taffy");

  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-center mb-2">🏆 分數排行榜</h1>
      <p className="text-center opacity-60 mb-8">全球粉絲的最高分紀錄</p>

      <div className="flex gap-2 mb-8 justify-center">
        <button
          onClick={() => setTab("seren")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            tab === "seren" ? "bg-[#7c3aed] text-white" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🩸 雪蓮反應遊戲
        </button>
        <button
          onClick={() => setTab("taffy")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            tab === "taffy" ? "bg-[#f59e0b] text-white" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🧪 塔菲對答遊戲
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 opacity-60">載入中...</div>
      ) : (
        <div className="space-y-2">
          {(tab === "seren" ? serenScores : taffyScores).length === 0 ? (
            <div className="text-center py-12 opacity-50">
              <p>還沒有紀錄</p>
              <p className="text-sm mt-1">成為第一個上榜的人！</p>
              <a
                href={tab === "seren" ? "/games/seren" : "/games/taffy"}
                className="inline-block mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                去挑戰
              </a>
            </div>
          ) : (
            (tab === "seren" ? serenScores : taffyScores).map((s, i) => (
              <div
                key={s.id}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  i === 0
                    ? "border-yellow-500/50 bg-yellow-500/10"
                    : i === 1
                    ? "border-gray-400/50 bg-gray-400/5"
                    : i === 2
                    ? "border-amber-700/50 bg-amber-700/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${
                    i === 0 ? "bg-yellow-500 text-black" : i === 1 ? "bg-gray-400 text-black" : i === 2 ? "bg-amber-700 text-white" : "bg-white/10"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-bold">{s.playerName}</div>
                  <div className="text-xs opacity-50">{new Date(s.createdAt).toLocaleDateString("zh-Hant")}</div>
                </div>
                <div className="text-2xl font-black">
                  {tab === "seren" ? (
                    <span className="text-[#a78bfa]">{s.score} 分</span>
                  ) : (
                    <span className="text-[#f59e0b]">{s.score}/{8} 題</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
