'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] container-main">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold gradient-text mb-4">😕</div>
        
        <h1 className="mb-4">Something Went Wrong</h1>
        
        <p className="text-slate-400 text-lg mb-8">
          We encountered an unexpected error. Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary"
          >
            Try Again
          </button>
          <Link href="/" className="btn btn-outline">
            Back Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-slate-800 rounded border border-slate-700">
            <p className="text-xs text-slate-400 font-mono break-all">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
