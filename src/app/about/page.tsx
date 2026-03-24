export default function AboutPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-black mb-8 text-center">ℹ️ 關於本站</h1>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">🌸 這是什麼網站？</h2>
          <p className="opacity-80 leading-relaxed">
            「東雪蓮大戰塔菲」是一個粉絲自發製作的互動粉絲站，
            收錄了東雪蓮與永雛塔菲兩位虛擬主播的各種有趣內容。
            包含人格測驗、粉絲投票對決、殿堂排行榜、以及好玩的小遊戲！
          </p>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">⚠️ 聲明</h2>
          <p className="opacity-80 leading-relaxed">
            本網站與<strong>東雪蓮</strong>（所属 Blanche Fleur）、
            <strong>永雛塔菲</strong>（個人勢 VTuber）及其經紀公司
            <strong>沒有任何官方關係</strong>。
            所有內容均由粉絲基於公開資料製作，純屬愛好分享，
            如有侵權請聯繫移除。
          </p>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">📚 主要資料來源</h2>
          <ul className="space-y-2 opacity-80">
            <li>🦇 東雪蓮 — YouTube、Twitch、Bilibili 公開直播內容</li>
            <li>🧪 永雛塔菲 — Bilibili、YouTube、Twitter 公開內容</li>
            <li>📖 萌娘百科（mzh.moegirl.org.cn）</li>
            <li>📖 pixiv 百科事典（dic.pixiv.net）</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-3">🛠️ 技術</h2>
          <p className="opacity-80">
            使用 Next.js + Prisma + SQLite + Tailwind CSS 架設。
            部署於 Vercel。
          </p>
        </section>

        <div className="text-center opacity-50 text-sm">
          <p>🌸 永雛塔菲 🧪 東雪蓮</p>
          <p className="mt-1">Made with ❤️ by fans, for fans · 2026</p>
        </div>
      </div>
    </div>
  );
}
