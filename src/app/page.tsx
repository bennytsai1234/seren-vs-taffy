import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* VS 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black opacity-5 select-none">VS</div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center mb-4 tracking-tight relative z-10">
          <span className="text-[#a78bfa]">東雪蓮</span>
          <span className="text-yellow-400 mx-2 animate-pulse">⚡</span>
          <span className="text-[#f59e0b]">塔菲</span>
        </h1>
        <p className="text-center text-lg opacity-60 mb-12">両辺のファン待望の激突！</p>

        {/* 對決卡片 */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10">
          {/* 雪蓮 */}
          <Link href="/quiz" className="group block">
            <div className="relative rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#7c3aed] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(124,58,237,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/80 to-[#3b82f6]/80" />
              <div className="relative p-10 text-center">
                <div className="text-7xl mb-4">🦇</div>
                <h2 className="text-3xl font-black mb-2">東雪蓮</h2>
                <p className="text-sm opacity-80 mb-4">清楚吸血鬼歌姬 · Blanche Fleur</p>
                <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">
                  參加測驗 →
                </div>
              </div>
            </div>
          </Link>

          {/* 塔菲 */}
          <Link href="/battle" className="group block">
            <div className="relative rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#f59e0b] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/80 to-[#ef4444]/80" />
              <div className="relative p-10 text-center">
                <div className="text-7xl mb-4">🧪</div>
                <h2 className="text-3xl font-black mb-2">永雛塔菲</h2>
                <p className="text-sm opacity-80 mb-4">王牌發明家 · 個人勢</p>
                <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm backdrop-blur-sm">
                  投票對決 →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 中間 VS 標誌 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="text-5xl font-black text-yellow-400 animate-vs-shake">⚡</div>
        </div>
      </section>

      {/* 功能入口 */}
      <section className="px-6 py-12 max-w-4xl mx-auto w-full">
        <h2 className="text-xl font-bold mb-6 text-center">更多玩法</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/seren" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">🦇</div>
            <div className="text-sm font-medium">東雪蓮資料</div>
          </Link>
          <Link href="/taffy" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">🧪</div>
            <div className="text-sm font-medium">永雛塔菲資料</div>
          </Link>
          <Link href="/versus" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-sm font-medium">數據對決</div>
          </Link>
          <Link href="/hall-of-fame" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-sm font-medium">殿堂排行榜</div>
          </Link>
          <Link href="/games/seren" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">🩸</div>
            <div className="text-sm font-medium">雪蓮反應遊戲</div>
          </Link>
          <Link href="/games/taffy" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">🔧</div>
            <div className="text-sm font-medium">塔菲對答遊戲</div>
          </Link>
          <Link href="/leaderboard" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-sm font-medium">全球排行榜</div>
          </Link>
          <Link href="/about" className="p-4 rounded-xl border border-purple-900/50 bg-purple-950/30 hover:bg-purple-900/50 transition-all text-center hover:scale-105">
            <div className="text-2xl mb-1">ℹ️</div>
            <div className="text-sm font-medium">關於本站</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
