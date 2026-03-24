export default function SerenPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="relative inline-block mb-4">
          <img src="/images/seren-character.svg" alt="東雪蓮" className="w-52 h-52 object-contain mx-auto" />
        </div>
        <h1 className="text-5xl font-black text-[#a78bfa] mb-2">東雪蓮</h1>
        <p className="text-lg opacity-60">Azuma Seren · 清楚吸血鬼歌姬</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#7c3aed]/30 to-[#3b82f6]/30 border border-[#7c3aed]/50">
          <h2 className="font-black text-lg mb-4 text-[#a78bfa]">📋 基本資料</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="opacity-60">生日</span><span>7月24日</span></div>
            <div className="flex justify-between"><span className="opacity-60">所屬</span><span>Blanche Fleur</span></div>
            <div className="flex justify-between"><span className="opacity-60">語言</span><span>日語・英語・中文</span></div>
            <div className="flex justify-between"><span className="opacity-60">種族</span><span>人類與吸血鬼混血</span></div>
            <div className="flex justify-between"><span className="opacity-60">喜歡顏色</span><span>藍色、紫色</span></div>
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#7c3aed]/20 to-transparent border border-[#7c3aed]/30">
          <h2 className="font-black text-lg mb-4 text-[#a78bfa]">🍣 飲食偏好</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="opacity-60">喜歡</span><span>壽司、三文魚、甜甜的東西</span></div>
            <div className="flex justify-between"><span className="opacity-60">討厭</span><span>番茄（極度厭惡）</span></div>
            <div className="flex justify-between"><span className="opacity-60">特點</span><span>不會吸血，甚至有點暈血</span></div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-white/5 border border-white/10 mb-10">
        <h2 className="font-black text-lg mb-4 text-[#a78bfa]">🌸 角色特色</h2>
        <div className="space-y-4 text-sm leading-relaxed opacity-90">
          <p>東雪蓮是一位有著人類血脈的吸血鬼，自稱「成年」且偏好人類食物。頭上戴著<strong>芍藥花</strong>，家中有一隻被稱為「使魔」的貓，名字叫<strong>諾爾</strong>（男孩子）。</p>
          <p>自稱清楚、可愛、乖巧、文靜的女孩子，但直播時常與觀眾激情對線，雙方都樂在其中——這也是她直播的一大看點。</p>
          <p>以作詞唱歌為主要活動，同時也會在 Twitch 進行遊戲直播。粉絲群體被稱為「棺材鋪 → 棺人痴」。</p>
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-gradient-to-r from-[#7c3aed]/20 to-[#3b82f6]/20 border border-[#7c3aed]/30 mb-10">
        <h2 className="font-black text-lg mb-4">🔗 直播平台</h2>
        <div className="flex gap-3 flex-wrap">
          <a href="https://www.youtube.com/@AzumaSeren" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm hover:bg-red-500/30 transition-colors">YouTube</a>
          <a href="https://www.twitch.tv/azumaseren" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm hover:bg-purple-500/30 transition-colors">Twitch</a>
          <a href="https://space.bilibili.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm hover:bg-pink-500/30 transition-colors">Bilibili</a>
        </div>
      </div>

      <div className="text-center">
        <a href="/quiz" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] font-bold hover:scale-105 transition-transform">
          參加測驗 🦇
        </a>
      </div>
    </div>
  );
}
