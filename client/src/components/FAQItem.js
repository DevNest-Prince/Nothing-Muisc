'use client';

import { useState } from 'react';

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left hover:bg-zinc-900/50 transition-colors flex items-center justify-between group"
      >
        <h4 className="font-bold text-lg group-hover:text-orange-400 transition-colors">{item.question}</h4>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {open && (
        <div className="px-6 pb-6 pt-3 border-t border-zinc-800 animate-fade-in">
          <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

