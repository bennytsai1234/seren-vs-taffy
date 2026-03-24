export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#7c3aed] animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full border-2 border-t-[#f59e0b] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <p className="text-sm opacity-40 animate-pulse">載入中...</p>
      </div>
    </div>
  );
}
