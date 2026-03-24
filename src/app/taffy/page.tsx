export default function TaffyPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="text-8xl mb-4">🧪</div>
        <h1 className="text-5xl font-black text-[#f59e0b] mb-2">永雛塔菲</h1>
        <p className="text-lg opacity-60">Ace Taffy · 王牌發明家</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#f59e0b]/30 to-[#ef4444]/30 border border-[#f59e0b]/50">
          <h2 className="font-black text-lg mb-4 text-[#f59e0b]">📋 基本資料</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="opacity-60">出道日期</span><span>2021年6月1日</span></div>
            <div className="flex justify-between"><span className="opacity-60">類型</span><span>個人勢虛擬偶像</span></div>
            <div className="flex justify-between"><span className="opacity-60">設計者</span><span>神樂七奈</span></div>
            <div className="flex justify-between"><span className="opacity-60">名字由來</span><span>王牌發明家 + Ace</span></div>
            <div className="flex justify-between"><span className="opacity-60">平台</span><span>B站、YT、抖音、微博</span></div>
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#f59e0b]/20 to-transparent border border-[#f59e0b]/30">
          <h2 className="font-black text-lg mb-4 text-[#f59e0b]">🏆 數據</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="opacity-60">B站粉絲</span><span>147.8 萬</span></div>
            <div className="flex justify-between"><span className="opacity-60">風格</span><span>抽象整活</span></div>
            <div className="flex justify-between"><span className="opacity-60">重要里程碑</span><span>首次全息演唱會</span></div>
            <div className="flex justify-between"><span className="opacity-60">轉生次數</span><span>多次（每次都驚喜）</span></div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-white/5 border border-white/10 mb-10">
        <h2 className="font-black text-lg mb-4 text-[#f59e0b]">💡 角色特色</h2>
        <div className="space-y-4 text-sm leading-relaxed opacity-90">
          <p>永雛塔菲（Ace Taffy）是 2021 年出道的個人勢虛擬偶像，角色形象由知名繪師<strong>神樂七奈</strong>（也是 Vtuber 神楽坂努努的作者）設計。</p>
          <p>她的名字裡「永雛」代表<strong>王牌發明家</strong>身份，「Ace」在撲克牌中意為<strong>王牌</strong>。以「抽象整活」的風格聞名，經歷了多次身份轉生。</p>
          <p>她即將舉辦**首次全息個人演唱會**，這是她自出道以來一直努力的目標。直播風格多元活潑，粉絲們跟隨她是因為那份快樂和惊喜。</p>
        </div>
      </div>

      <div className="rounded-2xl p-6 bg-gradient-to-r from-[#f59e0b]/20 to-[#ef4444]/20 border border-[#f59e0b]/30 mb-10">
        <h2 className="font-black text-lg mb-4">🔗 直播平台</h2>
        <div className="flex gap-3 flex-wrap">
          <a href="https://space.bilibili.com/4526580" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm hover:bg-pink-500/30 transition-colors">Bilibili</a>
          <a href="https://www.youtube.com/@AceTaffy" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm hover:bg-red-500/30 transition-colors">YouTube</a>
          <a href="https://twitter.com/Ace_Taffy" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm hover:bg-blue-500/30 transition-colors">Twitter</a>
        </div>
      </div>

      <div className="text-center">
        <a href="/battle" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ef4444] font-bold hover:scale-105 transition-transform">
          去投票對決 🧪
        </a>
      </div>
    </div>
  );
}
