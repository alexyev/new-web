'use client';

import { useEffect, useRef, useState } from 'react';

export interface SortOption<T extends string> {
  key: T;
  label: string;
}

interface SortDropdownProps<T extends string> {
  value: T;
  options: SortOption<T>[];
  onChange: (key: T) => void;
  label?: string;
}

export default function SortDropdown<T extends string>({
  value,
  options,
  onChange,
  label = 'Sort',
}: SortDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const active = options.find((o) => o.key === value) ?? options[0];

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block text-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group flex items-baseline gap-2 text-muted hover:text-foreground transition-colors duration-200"
      >
        <span className="uppercase tracking-wider text-xs">{label}</span>
        <span className="font-serif italic text-foreground">{active.label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          aria-hidden
          className={`transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          style={{ transformOrigin: 'center' }}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 mt-2 min-w-[10rem] max-w-[calc(100vw-2rem)] bg-background border border-border rounded-sm shadow-[0_8px_24px_-8px_rgba(28,25,21,0.18)] py-1 z-40"
        >
          {options.map((opt) => {
            const selected = opt.key === value;
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(opt.key);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-1.5 font-serif text-sm transition-colors duration-150 ${
                    selected
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent hover:bg-border/30'
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
