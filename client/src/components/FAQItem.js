'use client';

import { useState } from 'react';

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-purple-600/50 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left hover:bg-slate-800/50 transition-colors flex items-center justify-between group"
      >
        <h4 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{item.question}</h4>
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
        <div className="px-6 pb-6 pt-3 border-t border-slate-700 animate-fade-in">
          <p className="text-slate-400 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}
