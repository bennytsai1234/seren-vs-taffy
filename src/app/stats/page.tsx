"use client";

import { useState, useEffect } from "react";

export default function StatsPage() {
  const [data, setData] = useState({ seren: 0, taffy: 0, both: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quiz")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const total = data.seren + data.taffy + data.both;
  const serenPct = total > 0 ? Math.round((data.seren / total) * 100) : 33;
  const taffyPct = total > 0 ? Math.round((data.taffy / total) * 100) : 33;
  const bothPct = total > 0 ? Math.round((data.both / total) * 100) : 34;

  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-center mb-2">📊 粉絲調查結果</h1>
      <p className="text-center opacity-60 mb-12">你是雪蓮派？塔菲派？還是両辺の生き物？</p>

      {loading ? (
        <div className="text-center py-16 opacity-60">載入中...</div>
      ) : (
        <>
          {/* Result bars */}
          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-[#a78bfa]">🦇 雪蓮派</span>
                <span className="font-black text-[#a78bfa]">{serenPct}%</span>
              </div>
              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] transition-all duration-1000"
                  style={{ width: `${serenPct}%` }}
                />
              </div>
              <div className="text-xs opacity-50 mt-1 text-right">{data.seren} 票</div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-[#f59e0b]">🧪 塔菲派</span>
                <span className="font-black text-[#f59e0b]">{taffyPct}%</span>
              </div>
              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ef4444] transition-all duration-1000"
                  style={{ width: `${taffyPct}%` }}
                />
              </div>
              <div className="text-xs opacity-50 mt-1 text-right">{data.taffy} 票</div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-yellow-400">⚡ 両辺の生き物</span>
                <span className="font-black text-yellow-400">{bothPct}%</span>
              </div>
              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] transition-all duration-1000"
                  style={{ width: `${bothPct}%` }}
                />
              </div>
              <div className="text-xs opacity-50 mt-1 text-right">{data.both} 票</div>
            </div>
          </div>

          {/* Summary */}
          <div className="text-center rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="text-5xl mb-4">
              {data.seren >= data.taffy && data.seren >= data.both ? "🦇" :
               data.taffy >= data.seren && data.taffy >= data.both ? "🧪" : "⚡"}
            </div>
            <h2 className="text-xl font-black mb-2">
              {data.seren >= data.taffy && data.seren >= data.both ? "雪蓮派目前領先！" :
               data.taffy >= data.seren && data.taffy >= data.both ? "塔菲派目前領先！" : "両辺の生き物勢力崛起！"}
            </h2>
            <p className="text-sm opacity-60">
              總計 {total} 人參與測驗
              {total === 0 && "（還沒有人測驗，成為第一個！）"}
            </p>
            <a
              href="/quiz"
              className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] font-bold hover:scale-105 transition-transform"
            >
              參加測驗 →
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`兩邊粉絲投票結果出爐了！🦇 ${serenPct}% vs 🧪 ${taffyPct}%！快來看看：${typeof window !== "undefined" ? window.location.href : ""}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 ml-2 px-6 py-3 rounded-full bg-[#1da1f2] font-bold hover:opacity-90 transition-opacity"
            >
              分享結果
            </a>
          </div>
        </>
      )}
    </div>
  );
}
