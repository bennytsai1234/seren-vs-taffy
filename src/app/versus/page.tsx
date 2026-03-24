"use client";

const stats = [
  {
    label: "出道年份",
    seren: "2021",
    taffy: "2021",
    serenNote: "2月開始活動",
    taffyNote: "6月出道首播",
    winner: "draw",
  },
  {
    label: "主要平台",
    seren: "YouTube / Twitch",
    taffy: "Bilibili / YouTube",
    serenNote: "三語直播",
    taffyNote: "多平台覆蓋",
    winner: "draw",
  },
  {
    label: "內容類型",
    seren: "🎤 歌唱為主",
    taffy: "🎮 整活直播",
    serenNote: "原創歌曲創作",
    taffyNote: "抽象整活風格",
    winner: "seren",
  },
  {
    label: "粉絲群名",
    seren: "棺人痴",
    taffy: "塔菲粉絲",
    serenNote: "棺材舖演變而來",
    taffyNote: "忠誠的粉絲群體",
    winner: "taffy",
  },
  {
    label: "粉絲數（B站）",
    seren: "熱門虛擬歌手",
    taffy: "147.8萬",
    serenNote: "中日皆有高人氣",
    taffyNote: "2026年1月數據",
    winner: "taffy",
  },
  {
    label: "直播風格",
    seren: "文靜・激情對線",
    taffy: "熱情・整活不斷",
    serenNote: "表面文靜實則對線",
    taffyNote: "永遠有新鮮事",
    winner: "draw",
  },
  {
    label: "特殊設定",
    seren: "暈血吸血鬼",
    taffy: "王牌發明家",
    serenNote: "反差萌滿分",
    taffyNote: "多次轉生身份",
    winner: "seren",
  },
  {
    label: "代表色",
    seren: "💜 紫 / 藍",
    taffy: "🧡 橙 / 紅",
    serenNote: "優雅冷色調",
    taffyNote: "熱情暖色調",
    winner: "draw",
  },
];

export default function VersusPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-4xl mx-auto">
      {/* Hero visual */}
      <div className="relative mb-8 rounded-3xl overflow-hidden border border-white/10">
        <img src="/images/hero-vs.svg" alt="東雪蓮 vs 永雛塔菲" className="w-full object-contain" style={{maxHeight: "200px"}} />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-black mb-2">
          <span className="text-[#a78bfa]">東雪蓮</span>
          <span className="text-yellow-400 mx-2">⚡</span>
          <span className="text-[#f59e0b]">永雛塔菲</span>
        </h1>
        <p className="opacity-60">両辺のファン待望の激突！數據對比</p>
        <p className="text-xs opacity-30 mt-2">以下數據來自公開資料統計，非官方數據</p>
      </div>

      {/* VS Header with character images */}
      <div className="grid grid-cols-3 gap-4 mb-8 items-center">
        <div className="text-right">
          <img src="/images/seren-character.svg" alt="東雪蓮" className="w-24 h-24 object-contain mx-auto" />
          <div className="font-black text-[#a78bfa] mt-1">東雪蓮</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-yellow-400 animate-vs-shake">⚡ VS ⚡</div>
        </div>
        <div className="text-left">
          <img src="/images/taffy-character.svg" alt="永雛塔菲" className="w-24 h-24 object-contain mx-auto" />
          <div className="font-black text-[#f59e0b] mt-1">永雛塔菲</div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="text-center py-2 text-sm font-bold border-b border-white/10 opacity-60">
              {stat.label}
            </div>
            <div className="grid grid-cols-3 text-center text-sm">
              <div className="p-3">
                <div className={`font-bold mb-1 ${stat.winner === "seren" ? "text-[#a78bfa]" : ""}`}>
                  {stat.seren}
                </div>
                <div className="text-xs opacity-50">{stat.serenNote}</div>
              </div>
              <div className="p-3 flex items-center justify-center">
                {stat.winner === "draw" ? (
                  <span className="text-yellow-400 text-lg">⚖️</span>
                ) : stat.winner === "seren" ? (
                  <span className="text-[#a78bfa] text-lg">←</span>
                ) : (
                  <span className="text-[#f59e0b] text-lg">→</span>
                )}
              </div>
              <div className="p-3">
                <div className={`font-bold mb-1 ${stat.winner === "taffy" ? "text-[#f59e0b]" : ""}`}>
                  {stat.taffy}
                </div>
                <div className="text-xs opacity-50">{stat.taffyNote}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 rounded-2xl p-6 border border-white/10 bg-gradient-to-r from-[#7c3aed]/10 via-white/5 to-[#f59e0b]/10 text-center">
        <h2 className="text-xl font-black mb-3">結論</h2>
        <p className="text-sm opacity-80 leading-relaxed">
          東雪蓮與永雛塔菲各有各的魅力，無法簡單分出勝負。
          雪蓮的歌聲滋養人心，塔菲的整活帶來歡笑。<br />
          最重要的不是誰比較厲害，而是<strong>兩邊的粉絲都很快樂</strong>。
        </p>
        <p className="mt-4 text-2xl">⚡ 両辺の生き物 ⚡</p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/quiz"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] font-bold hover:scale-105 transition-transform"
        >
          參加測驗，看你是哪邊！
        </a>
      </div>
    </div>
  );
}
