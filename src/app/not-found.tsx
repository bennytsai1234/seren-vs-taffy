export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-4 opacity-30">🦇⚡🧪</div>
      <h1 className="text-4xl font-black mb-2">404</h1>
      <p className="text-xl opacity-60 mb-8">この頁面は存在しません</p>
      <a
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#f59e0b] font-bold hover:scale-105 transition-transform"
      >
        回到首頁 ⚡
      </a>
    </div>
  );
}
