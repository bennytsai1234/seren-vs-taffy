"use client";

import { useState } from "react";

const questions = [
  {
    q: "直播時你更喜歡看什麼內容？",
    a: [
      { text: "安静唱歌 / 彈鋼琴", score: "seren" },
      { text: "和觀眾對線 / 整活", score: "taffy" },
      { text: "兩種都喜歡", score: "both" },
    ],
  },
  {
    q: "你喜歡什麼風格的打扮？",
    a: [
      { text: "哥德蘿莉 / 吸血鬼系", score: "seren" },
      { text: "科技感 / 發明家風格", score: "taffy" },
      { text: "看心情", score: "both" },
    ],
  },
  {
    q: "遇到血時你會？",
    a: [
      { text: "（暈倒）", score: "seren" },
      { text: "冷靜分析成分", score: "taffy" },
      { text: "轉頭假裝沒看見", score: "both" },
    ],
  },
  {
    q: "你吃壽司時會先吃什麼？",
    a: [
      { text: "三文魚", score: "seren" },
      { text: "隨便，反正都是我的", score: "taffy" },
      { text: "都要", score: "both" },
    ],
  },
  {
    q: "你喜歡的顏色是？",
    a: [
      { text: "藍色或紫色", score: "seren" },
      { text: "橙色或紅色", score: "taffy" },
      { text: "全部顏色都是好顏色", score: "both" },
    ],
  },
  {
    q: "你的社交方式？",
    a: [
      { text: "文靜但偶爾激情對線", score: "seren" },
      { text: "熱情主動，整活達人", score: "taffy" },
      { text: "看場合切換", score: "both" },
    ],
  },
  {
    q: "你喜歡什麼類型的貓？",
    a: [
      { text: "使魔黑貓（諾爾類）", score: "seren" },
      { text: "普通貓就好", score: "taffy" },
      { text: "所有貓", score: "both" },
    ],
  },
  {
    q: "你的口頭禪是？",
    a: [
      { text: "「清楚了」", score: "seren" },
      { text: "「王牌！」", score: "taffy" },
      { text: "「嗯」", score: "both" },
    ],
  },
  {
    q: "你怎麼度過週末？",
    a: [
      { text: "寫歌詞 / 錄歌", score: "seren" },
      { text: "發明奇怪的東西", score: "taffy" },
      { text: "看直播 / 切片", score: "both" },
    ],
  },
  {
    q: "最後一題！你內心的本質是？",
    a: [
      { text: "一只暈血的吸血鬼", score: "seren" },
      { text: "一個王牌發明家", score: "taffy" },
      { text: "兩辺の生き物", score: "both" },
    ],
  },
];

const results = {
  seren: {
    emoji: "🦇",
    title: "你是「雪蓮派」！",
    subtitle: "清楚、乖巧、文靜的本質吸血鬼",
    description: "你骨子裡有著優雅的吸血鬼血統，喜歡藍紫色，愛聽歌，內心柔軟但嘴上不饒人。記住：你只是有點暈血，不代表你很弱！",
    color: "from-[#7c3aed] to-[#3b82f6]",
  },
  taffy: {
    emoji: "🧪",
    title: "你是「塔菲派」！",
    subtitle: "王牌發明家，抽象整活天王",
    description: "你天生就是為了折騰而生的！喜歡橙色，熱愛發明，直播間有你永遠不會無聊。記住：就算轉生八百次，你還是你！",
    color: "from-[#f59e0b] to-[#ef4444]",
  },
  both: {
    emoji: "⚡",
    title: "你是「両辺の生き物」！",
    subtitle: "兩邊都是你的形狀",
    description: "你不被任何一邊定義！雪蓮的歌聲滋養你，塔菲的整活激勵你。你是兩邊粉絲的橋樑，是真正的両辺の生き物！",
    color: "from-[#7c3aed] to-[#f59e0b]",
  },
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ seren: 0, taffy: 0, both: 0 });
  const [finished, setFinished] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  const handleAnswer = (score: string) => {
    const newScores = { ...scores, [score]: scores[score as keyof typeof scores] + 1 };
    setScores(newScores);
    if (step + 1 >= questions.length) {
      setFinished(true);
      // trigger confetti
      const particles = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ["#7c3aed", "#f59e0b", "#3b82f6", "#ef4444", "#fcd34d", "#a78bfa"][Math.floor(Math.random() * 6)],
        delay: Math.random() * 0.8,
      }));
      setConfetti(particles);
      // save to API
      const resultType = Object.entries(newScores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
      fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: resultType }),
      }).catch(() => {});
    } else {
      setStep(step + 1);
    }
  };

  const getResult = () => {
    const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0] as "seren" | "taffy" | "both";
    return { type: resultType, ...results[resultType] };
  };

  const shareUrl = () => {
    const result = getResult();
    const text = `我是「${result.title.replace("你是", "").replace("！", "")}」！\n你在「東雪蓮大戰塔菲」測驗中的結果是...\n🌸 ${result.subtitle}\n快來試試：`;
    return encodeURIComponent(text);
  };

  if (finished) {
    const result = getResult();
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${c.x}%`,
                top: "-10px",
                background: c.color,
                animation: `confetti-fall 2.5s ease-in ${c.delay}s forwards`,
              }}
            />
          ))}
        </div>
        <div className="text-center animate-slide-up relative z-10">
          <div className={`inline-block text-8xl mb-4 p-6 rounded-full bg-gradient-to-br ${result.color}`}>
            {result.emoji}
          </div>
          <h1 className="text-4xl font-black mb-2">{result.title}</h1>
          <p className="text-lg opacity-60 mb-2">{result.subtitle}</p>
          <p className="max-w-md mx-auto opacity-80 mb-8">{result.description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareUrl()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#1da1f2] font-bold hover:opacity-90 transition-opacity"
            >
              分享到 Twitter
            </a>
            <button
              onClick={() => { setStep(0); setScores({ seren: 0, taffy: 0, both: 0 }); setFinished(false); }}
              className="px-6 py-3 rounded-full border border-white/30 font-bold hover:bg-white/10 transition-all"
            >
              重新測驗
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      {/* Progress */}
      <div className="w-full max-w-lg mb-8">
        <div className="flex justify-between text-sm opacity-60 mb-2">
          <span>第 {step + 1} 題</span>
          <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="w-full max-w-lg text-center animate-slide-up" key={step}>
        <h2 className="text-2xl font-bold mb-8">{questions[step].q}</h2>
        <div className="space-y-3">
          {questions[step].a.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.score)}
              className="w-full p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#a78bfa] transition-all text-left font-medium"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
