'use client';

import { useState } from 'react';

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`faq-item ${open ? 'faq-item-open' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="faq-item-trigger"
        aria-expanded={open}
        suppressHydrationWarning
      >
        <h3>{item.question}</h3>
        <span className="faq-item-icon" aria-hidden="true">
          {open ? '-' : '+'}
        </span>
      </button>

      {open && (
        <div className="faq-item-content animate-fade-in">
          <p>{item.answer}</p>
        </div>
      )}
    </article>
  );
}

