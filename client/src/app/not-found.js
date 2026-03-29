import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] container-main">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold gradient-text mb-4">404</div>
        
        <h1 className="mb-4">Page Not Found</h1>
        
        <p className="text-slate-400 text-lg mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            ← Back Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
}
