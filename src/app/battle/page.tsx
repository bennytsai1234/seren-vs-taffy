"use client";

import { useState, useEffect } from "react";

const battles = [
  {
    id: "live",
    question: "誰的直播最有趣？",
    serenLabel: "東雪蓮",
    taffyLabel: "永雛塔菲",
  },
  {
    id: "song",
    question: "誰歌唱得最好？",
    serenLabel: "東雪蓮",
    taffyLabel: "永雛塔菲",
  },
  {
    id: "fan",
    question: "誰的粉絲最熱情？",
    serenLabel: "棺人痴",
    taffyLabel: "塔菲粉絲",
  },
];

export default function BattlePage() {
  const [votes, setVotes] = useState<Record<string, { seren: number; taffy: number }>>({});
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vote")
      .then((r) => r.json())
      .then((data) => {
        setVotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleVote = async (battleId: string, choice: "seren" | "taffy") => {
    if (voted[battleId]) return;
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ battleId, choice }),
      });
      const data = await res.json();
      setVotes((prev) => ({
        ...prev,
        [battleId]: data,
      }));
      setVoted((prev) => ({ ...prev, [battleId]: true }));
    } catch {}
  };

  const getPercent = (battleId: string, side: "seren" | "taffy") => {
    const v = votes[battleId];
    if (!v || v.seren + v.taffy === 0) return 50;
    return Math.round((v[side] / (v.seren + v.taffy)) * 100);
  };

  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-center mb-2">⚡ 投票對決 ⚡</h1>
      <p className="text-center opacity-60 mb-12">兩邊粉絲大對決！每人每題只能投一票！</p>

      {battles.map((battle) => {
        const serenPct = getPercent(battle.id, "seren");
        const taffyPct = getPercent(battle.id, "taffy");
        const total = votes[battle.id]?.seren + votes[battle.id]?.taffy || 0;

        return (
          <div key={battle.id} className="mb-12 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-4 text-center font-bold text-lg border-b border-white/10">
              {battle.question}
              {total > 0 && <span className="block text-xs opacity-50 mt-1">共 {total} 票</span>}
            </div>

            <div className="grid grid-cols-2">
              {/* Seren side */}
              <button
                onClick={() => handleVote(battle.id, "seren")}
                disabled={voted[battle.id]}
                className={`relative p-6 text-center transition-all ${
                  voted[battle.id] ? "opacity-80" : "hover:opacity-90"
                }`}
                style={{ background: voted[battle.id] ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.15)" }}
              >
                <div className="text-4xl mb-2">🦇</div>
                <div className="font-black text-lg mb-1">{battle.serenLabel}</div>
                <div className="text-2xl font-black text-[#a78bfa]">{serenPct}%</div>
                {voted[battle.id] && <div className="text-xs mt-1 opacity-60">已投票 ✓</div>}
              </button>

              {/* VS divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" style={{ left: "50%" }} />

              {/* Taffy side */}
              <button
                onClick={() => handleVote(battle.id, "taffy")}
                disabled={voted[battle.id]}
                className={`relative p-6 text-center transition-all ${
                  voted[battle.id] ? "opacity-80" : "hover:opacity-90"
                }`}
                style={{ background: voted[battle.id] ? "rgba(245,158,11,0.3)" : "rgba(245,158,11,0.15)" }}
              >
                <div className="text-4xl mb-2">🧪</div>
                <div className="font-black text-lg mb-1">{battle.taffyLabel}</div>
                <div className="text-2xl font-black text-[#f59e0b]">{taffyPct}%</div>
                {voted[battle.id] && <div className="text-xs mt-1 opacity-60">已投票 ✓</div>}
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-2 flex">
              <div
                className="h-full bg-[#7c3aed] transition-all duration-500"
                style={{ width: `${serenPct}%` }}
              />
              <div
                className="h-full bg-[#f59e0b] transition-all duration-500"
                style={{ width: `${taffyPct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
