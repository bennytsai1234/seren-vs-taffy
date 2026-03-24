export default function AboutPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black mb-8 text-center">ℹ️ 關於本站</h1>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">🌸 這是什麼網站？</h2>
          <p className="opacity-80 leading-relaxed">
            「東雪蓮大戰塔菲」是一個粉絲自發製作的互動粉絲站，
            以 東雪蓮 與 永雛塔菲 兩位虛擬主播為主題。
            包含人格測驗、粉絲投票對決、殿堂排行榜、以及好玩的迷你遊戲！
          </p>
          <p className="mt-3 opacity-80 leading-relaxed">
            目標只有一個：<strong>讓兩邊粉絲都能在這裡玩得開心</strong>。
          </p>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">🎮 功能一覽</h2>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>📋 <strong>人格測驗</strong> — 10題測驗，找出你是雪蓮派還是塔菲派</li>
            <li>⚡ <strong>投票對決</strong> — 直播有趣、歌唱、粉絲熱情，三題對決</li>
            <li>🏆 <strong>殿堂排行榜</strong> — 粉絲提名最愛語錄，開放投票排行</li>
            <li>📊 <strong>粉絲統計</strong> — 即時顯示所有粉絲的測驗結果分布</li>
            <li>🩸 <strong>雪蓮反應遊戲</strong> — 30秒點血袋，測試你的反應速度</li>
            <li>🧪 <strong>塔菲對答遊戲</strong> — 8題測驗你對塔菲的了解程度</li>
            <li>🥇 <strong>全球排行榜</strong> — 遊戲分數世界排名</li>
            <li>⚡ <strong>數據對決</strong> — 兩位角色各項數據大比拼</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">⚠️ 重要聲明</h2>
          <ul className="opacity-80 leading-relaxed text-sm space-y-2">
            <li>本網站與 <strong>東雪蓮</strong>（所屬 Blanche Fleur）<strong>沒有任何官方關係</strong>。</li>
            <li>本網站與 <strong>永雛塔菲</strong>（個人勢 VTuber）<strong>沒有任何官方關係</strong>。</li>
            <li>所有內容均由粉絲基於公開資料製作，純屬愛好分享。</li>
            <li>如有侵權請聯繫移除。</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">📚 主要資料來源</h2>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>🦇 <strong>東雪蓮</strong> — YouTube、Twitch、Bilibili 公開直播內容</li>
            <li>🧪 <strong>永雛塔菲</strong> — Bilibili、YouTube、Twitter 公開內容</li>
            <li>📖 <strong>萌娘百科</strong>（mzh.moegirl.org.cn）</li>
            <li>📖 <strong>pixiv 百科事典</strong>（dic.pixiv.net）</li>
            <li>📖 <strong>百度百科</strong>（baike.baidu.com）</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">🛠️ 技術</h2>
          <div className="space-y-2 opacity-80 text-sm">
            <p>使用 <strong>Next.js 16</strong>（App Router）+ <strong>Prisma</strong> + <strong>SQLite</strong> + <strong>Tailwind CSS</strong> 架設。</p>
            <p>部署於 <strong>Vercel</strong>，資料庫使用 SQLite 檔案（本地開發用），正式環境同樣使用 SQLite 檔案模式。</p>
            <p>原始碼開源於 GitHub，可自由 Fork 學習或二次創作。</p>
          </div>
        </section>

        <div className="text-center opacity-50 text-sm space-y-1">
          <p>🌸 東雪蓮 🧪 永雛塔菲</p>
          <p>Made with ❤️ by fans, for fans · 2026</p>
          <a href="https://github.com/bennytsai1234/seren-vs-taffy" target="_blank" rel="noopener noreferrer" className="underline opacity-70 hover:opacity-100 transition-opacity">
            檢視原始碼 →
          </a>
        </div>
      </div>
    </div>
  );
}
