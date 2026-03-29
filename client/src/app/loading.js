export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg animate-pulse">
            <span className="text-white font-bold text-xl"></span>
          </div>
        </div>
        <p className="text-zinc-400">Loading...</p>
      </div>
    </div>
  );
}

