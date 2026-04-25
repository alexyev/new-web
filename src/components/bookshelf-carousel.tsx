'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { books as defaultBooks, type Book } from '@/data/books';

const BOOK_W = 170;
const BOOK_H = 255;
const ITEM_PX = 18; // padding each side on the snap element
const ITEM_W = BOOK_W + ITEM_PX * 2;
const INFO_H = 96; // reserved space beneath cover for hover details

function getBookStyle(dist: number): React.CSSProperties {
  let scale: number;
  let opacity: number;

  if (dist === 0) {
    scale = 1.06;
    opacity = 1;
  } else if (dist === 1) {
    scale = 0.86;
    opacity = 0.55;
  } else {
    // Beyond the 3-book window: hidden but still occupying layout so scroll works
    scale = 0.78;
    opacity = 0;
  }

  return {
    transform: `scale(${scale})`,
    opacity,
    transition:
      'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
  };
}

interface BookshelfCarouselProps {
  books?: Book[];
}

export default function BookshelfCarousel({ books = defaultBooks }: BookshelfCarouselProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftSpacerRef = useRef<HTMLDivElement>(null);
  const rightSpacerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Resize-aware spacer width so first/last book can snap to center
  const updateSpacers = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const spacerW = Math.max(0, container.clientWidth / 2 - ITEM_W / 2);
    if (leftSpacerRef.current) leftSpacerRef.current.style.width = `${spacerW}px`;
    if (rightSpacerRef.current) rightSpacerRef.current.style.width = `${spacerW}px`;
  }, []);

  useEffect(() => {
    updateSpacers();
    const ro = new ResizeObserver(updateSpacers);
    if (scrollRef.current) ro.observe(scrollRef.current);
    return () => ro.disconnect();
  }, [updateSpacers]);

  // When the books list identity changes (e.g. re-sorted), reset to the front
  useEffect(() => {
    const container = scrollRef.current;
    if (container) container.scrollLeft = 0;
    setActiveIndex(0);
  }, [books]);

  // Derive active index from scroll position
  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const itemCenter = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(itemCenter - center);
      if (d < minDist) { minDist = d; closest = i; }
    });
    setActiveIndex(closest);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActiveIndex);
  }, [updateActiveIndex]);

  // Smooth scroll to a book by index
  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    container.scrollTo({ left: itemCenter - container.clientWidth / 2, behavior: 'smooth' });
  }, []);

  // Non-passive wheel handler: convert vertical wheel → horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      } else if (e.key === 'ArrowRight' && activeIndex < books.length - 1) {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      }
    },
    [activeIndex, scrollToIndex],
  );

  const activeBook = books[activeIndex];

  return (
    <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory items-start pt-4 pb-2 outline-none focus-visible:outline-none"
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="listbox"
        aria-label="Bookshelf"
      >
        {/* Left spacer — calculated so book 0 can snap to center */}
        <div ref={leftSpacerRef} className="flex-shrink-0" />

        {books.map((book, index) => {
          const dist = Math.abs(index - activeIndex);
          const isActive = dist === 0;
          const hidden = dist >= 2;

          return (
            <div
              key={`${book.title}-${index}`}
              ref={el => { itemRefs.current[index] = el; }}
              className="snap-center flex-shrink-0 select-none"
              style={{
                paddingLeft: ITEM_PX,
                paddingRight: ITEM_PX,
                cursor: hidden ? 'default' : 'pointer',
              }}
              onClick={() => {
                if (hidden) return;
                if (!isActive) scrollToIndex(index);
              }}
              role="option"
              aria-selected={isActive}
              aria-hidden={hidden}
              aria-label={`${book.title} by ${book.author}`}
            >
              {/* Scale/opacity wrapper */}
              <div
                style={{
                  ...getBookStyle(dist),
                  width: BOOK_W,
                  height: BOOK_H,
                  pointerEvents: hidden ? 'none' : 'auto',
                  boxShadow: isActive
                    ? '0 14px 36px -8px rgba(201,173,167,0.55), 0 4px 12px rgba(28,25,21,0.12)'
                    : 'none',
                }}
              >
                {/* Frame — relative + overflow-hidden so cover fully fills */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    backgroundColor: 'var(--border)',
                    outline: isActive ? '1px solid rgba(201,173,167,0.4)' : 'none',
                  }}
                >
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover"
                    sizes={`${BOOK_W}px`}
                    draggable={false}
                    priority={dist <= 1}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Right spacer */}
        <div ref={rightSpacerRef} className="flex-shrink-0" />
      </div>

      {/* Info panel — always visible, centered on active book */}
      <div
        className="flex justify-center px-4 pt-8"
        style={{ minHeight: INFO_H }}
      >
        <div
          className="max-w-md text-center transition-opacity duration-200"
          aria-live="polite"
        >
          <p className="font-serif text-xl text-foreground leading-snug">
            {activeBook.title}
          </p>
          <p className="text-base text-accent italic mt-1">
            {activeBook.author}
          </p>
          {activeBook.review && (
            <p className="text-sm text-muted leading-relaxed mt-2">
              {activeBook.review}
            </p>
          )}
        </div>
      </div>

      {/* Mobile swipe affordance — hidden on md+ where the faded side-books already signal scroll */}
      <p
        aria-hidden
        className="md:hidden text-center text-[10px] uppercase tracking-[0.3em] text-muted/60 mt-3"
      >
        ← swipe →
      </p>
    </div>
  );
}
