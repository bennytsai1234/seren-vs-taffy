"use client";

import { useState, useEffect } from "react";

type Nomination = {
  id: string;
  character: string;
  quote: string;
  source: string;
  submitter: string;
  votes: number;
};

const defaultNominations: Nomination[] = [
  { id: "1", character: "seren", quote: "清楚了！", source: "直播口頭禪", submitter: "匿名棺材鋪", votes: 88 },
  { id: "2", character: "taffy", quote: "王牌！", source: "直播口頭禪", submitter: "匿名塔菲粉", votes: 92 },
  { id: "3", character: "seren", quote: "我只是想安靜地唱歌而已...", source: "被觀眾霸凌時", submitter: "棺人痴A", votes: 76 },
  { id: "4", character: "taffy", quote: "這是我的新發明！...咦怎麼爆炸了", source: "Twitch直播", submitter: "整活愛好者", votes: 85 },
  { id: "5", character: "seren", quote: "（暈倒）", source: "看到血袋時", submitter: "暈血愛好者", votes: 99 },
  { id: "6", character: "taffy", quote: "粉絲數字只是數字，我在意的是大家開心", source: "粉絲數突破100萬時", submitter: "感動的粉絲", votes: 71 },
];

export default function HallOfFamePage() {
  const [tab, setTab] = useState<"seren" | "taffy">("seren");
  const [nominations, setNominations] = useState<Nomination[]>(defaultNominations);
  const [submitForm, setSubmitForm] = useState({ quote: "", source: "", submitter: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = nominations.filter((n) => n.character === tab).sort((a, b) => b.votes - a.votes);

  const handleVote = async (id: string) => {
    setNominations((prev) =>
      prev.map((n) => (n.id === id ? { ...n, votes: n.votes + 1 } : n))
    );
    try {
      await fetch(`/api/nominations/${id}/vote`, { method: "POST" });
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitForm.quote || !submitForm.submitter) return;
    const newNom: Nomination = {
      id: Math.random().toString(36).slice(2),
      character: tab,
      quote: submitForm.quote,
      source: submitForm.source,
      submitter: submitForm.submitter,
      votes: 0,
    };
    setNominations((prev) => [...prev, newNom]);
    setSubmitted(true);
    setSubmitForm({ quote: "", source: "", submitter: "" });
    try {
      await fetch("/api/nominations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNom),
      });
    } catch {}
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-center mb-2">🏆 殿堂排行榜</h1>
      <p className="text-center opacity-60 mb-8">最愛金句 / 名場面，由粉絲投票決定排名</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 justify-center">
        <button
          onClick={() => setTab("seren")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            tab === "seren"
              ? "bg-[#7c3aed] text-white"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🦇 雪蓮殿堂
        </button>
        <button
          onClick={() => setTab("taffy")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            tab === "taffy"
              ? "bg-[#f59e0b] text-white"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🧪 塔菲殿堂
        </button>
      </div>

      {/* Rankings */}
      <div className="space-y-3 mb-10">
        {filtered.map((n, i) => (
          <div
            key={n.id}
            className="p-4 rounded-xl border border-white/10 bg-white/5 relative"
          >
            {/* Rank badge */}
            <div
              className={`absolute -top-3 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${
                i === 0 ? "bg-yellow-500 text-black" : i === 1 ? "bg-gray-400 text-black" : i === 2 ? "bg-amber-700 text-white" : "bg-white/10"
              }`}
            >
              {i + 1}
            </div>
            <p className="font-bold text-lg mb-1 pr-8">「{n.quote}」</p>
            <p className="text-xs opacity-50 mb-2">— {n.source}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-50">by {n.submitter}</span>
              <button
                onClick={() => handleVote(n.id)}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm transition-all"
              >
                ▲ {n.votes}
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center opacity-50 py-8">還沒有提名，成為第一個提名的人！</p>
        )}
      </div>

      {/* Submit */}
      <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
        <h2 className="font-bold text-lg mb-4">✏️ 提名新語錄</h2>
        {submitted && (
          <p className="text-green-400 mb-4 text-sm">✅ 已提交成功！感謝提名！</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="語錄內容（必填）"
            value={submitForm.quote}
            onChange={(e) => setSubmitForm({ ...submitForm, quote: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#a78bfa] outline-none transition-colors"
          />
          <input
            placeholder="出處（哪場直播/哪個片段）"
            value={submitForm.source}
            onChange={(e) => setSubmitForm({ ...submitForm, source: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#a78bfa] outline-none transition-colors"
          />
          <input
            placeholder="你的暱稱（必填）"
            value={submitForm.submitter}
            onChange={(e) => setSubmitForm({ ...submitForm, submitter: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#a78bfa] outline-none transition-colors"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] font-bold hover:opacity-90 transition-opacity"
          >
            提交提名
          </button>
        </form>
      </div>
    </div>
  );
}
