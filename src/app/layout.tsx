import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "東雪蓮大戰塔菲 ⚡ 粉絲互動樂園",
  description: "你是雪蓮派還是塔菲派？測驗、投票、遊戲，這裡是兩邊粉絲的樂園！",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="dark">
      <body className="min-h-screen flex flex-col bg-[#0f0a1a] text-[#f0e8ff]">
        <nav className="flex items-center justify-between px-6 py-4 border-b border-purple-900/50 backdrop-blur-sm bg-[#0f0a1a]/80 sticky top-0 z-50">
          <a href="/" className="text-xl font-black tracking-tight">
            <span className="text-[#a78bfa]">東雪蓮</span>
            <span className="text-yellow-400 mx-1">⚡</span>
            <span className="text-[#f59e0b]">塔菲</span>
          </a>
          <div className="flex gap-4 text-sm font-medium">
            <a href="/quiz" className="hover:text-[#a78bfa] transition-colors">測驗</a>
            <a href="/battle" className="hover:text-[#a78bfa] transition-colors">投票對決</a>
            <a href="/hall-of-fame" className="hover:text-[#a78bfa] transition-colors">殿堂</a>
            <a href="/games/seren" className="hover:text-[#a78bfa] transition-colors">遊戲</a>
            <a href="/versus" className="hover:text-[#a78bfa] transition-colors">對決</a>
            <a href="/leaderboard" className="hover:text-[#a78bfa] transition-colors">🏆</a>
            <a href="/about" className="hover:text-[#a78bfa] transition-colors">ℹ️</a>
            <a href="https://github.com/bennytsai1234/seren-vs-taffy" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] transition-colors">⭐</a>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="text-center py-6 text-sm opacity-50 border-t border-purple-900/30">
          <p>🌸 永雛塔菲 🧪 東雪蓮 — 粉絲非官方製作 · 2026</p>
        </footer>
      </body>
    </html>
  );
}
