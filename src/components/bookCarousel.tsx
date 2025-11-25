'use client'
import { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Image from 'next/image';

interface Book {
  title: string;
  author: string;
  isbn?: string;
}

interface BookCarouselProps {
  books: Book[];
}

// Helper to construct local path from book title
const getLocalBookCover = (book: Book): string => {
  // Special override for Demian
  if (book.title === "Demian" && book.author.includes("Hesse")) {
    return "/books/demian.jpeg";
  }

  // Convert title to kebab-case-like slug
  // 1. Lowercase
  // 2. Replace non-alphanumeric chars with hyphens (e.g. spaces, apostrophes)
  // 3. Remove consecutive hyphens if any (though basic replacement usually suffices)
  // 4. Trim hyphens from start/end
  const slug = book.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return `/books/${slug}.jpg`;
};

// Generate a nice placeholder with book info
const getPlaceholderCover = (book: Book): string => {
  const title =
    book.title.length > 22 ? `${book.title.substring(0, 19)}…` : book.title;
  const author =
    book.author.length > 20 ? `${book.author.substring(0, 17)}…` : book.author;

  const svg = `
    <svg width="220" height="330" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#111" />
          <stop offset="100%" stop-color="#050505" />
        </linearGradient>
      </defs>
      <rect width="220" height="330" rx="14" fill="url(#grad)" />
      <rect x="14" y="14" width="192" height="302" rx="10" stroke="#c9ada7" stroke-width="1.2" fill="none" opacity="0.35" />
      <text x="110" y="150" font-family="Georgia, serif" font-size="16" fill="#c9ada7" text-anchor="middle" font-weight="600">${title.replace(/&/g,'&amp;')}</text>
      <text x="110" y="190" font-family="Georgia, serif" font-size="12" fill="#c9ada7" opacity="0.7" text-anchor="middle">${author.replace(/&/g,'&amp;')}</text>
      <text x="110" y="250" font-family="Georgia, serif" font-size="10" fill="#c9ada7" opacity="0.45" text-anchor="middle">Cover Unavailable</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Individual book cover component
function BookCover({ book, isCentered }: { book: Book; isCentered: boolean }) {
  const imageSrc = getLocalBookCover(book);
  const placeholderUrl = getPlaceholderCover(book);

  const baseWidth = 200;
  const baseHeight = baseWidth * 1.5;

  return (
    <div className="relative flex-shrink-0" style={{ width: baseWidth, height: baseHeight }}>
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out pointer-events-none"
        style={{
          transformOrigin: "center",
          transform: isCentered
            ? "translateY(-8px) scale(1.25)"
            : "translateY(0px) scale(0.72)",
          filter: isCentered ? "none" : "blur(3px)",
          opacity: isCentered ? 1 : 0.45,
          zIndex: isCentered ? 10 : 1,
        }}
      >
        <div
          className="relative w-full h-full rounded-2xl overflow-visible transition-shadow duration-500 pointer-events-auto"
          style={{
            boxShadow: isCentered
              ? "0 20px 40px rgba(0,0,0,0.45)"
              : "0 6px 20px rgba(0,0,0,0.25)",
          }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#c9ada7]/15 bg-[#090909]">
            <Image
              src={imageSrc}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 200px"
              priority={isCentered}
              onError={(e) => {
                 // Fallback to placeholder if image load fails
                 const target = e.target as HTMLImageElement;
                 target.srcset = "";
                 target.src = placeholderUrl;
              }}
            />
          </div>
          {isCentered && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium line-clamp-2 text-center">
                  {book.title}
                </p>
                <p className="text-[#c9ada7] text-xs text-center opacity-80">
                  {book.author}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookCarousel({ books }: BookCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(books.length);
  const isAutoAdjusting = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const duplicatedBooks = [...books, ...books, ...books];

  const scrollToIndex = (index: number, smooth = true) => {
    if (!scrollRef.current || !containerRef.current) return;

    const targetCard = cardRefs.current[index];
    const container = containerRef.current;
    let target = 0;

    if (targetCard) {
      const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
      target = cardCenter - container.clientWidth / 2;
    } else {
      const bookWidth = 200;
      const gap = 24;
      target =
        index * (bookWidth + gap) -
        container.clientWidth / 2 +
        bookWidth / 2;
    }

    isAutoAdjusting.current = true;
    scrollRef.current.scrollTo({
      left: target,
      behavior: smooth ? 'smooth' : 'auto',
    });

    window.setTimeout(() => {
      isAutoAdjusting.current = false;
    }, smooth ? 400 : 0);
  };

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;
    const bookWidth = 200;
    const gap = 24;
    const startIndex = books.length;
    const initial =
      startIndex * (bookWidth + gap) -
      containerRef.current.clientWidth / 2 +
      bookWidth / 2;

    scrollRef.current.scrollLeft = initial;
    setCurrentIndex(startIndex);
  }, [books.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || !containerRef.current || isAutoAdjusting.current) return;

      const scrollLeft = scrollRef.current.scrollLeft;
      const bookWidth = 200;
      const gap = 24;
      const containerWidth = containerRef.current.clientWidth;
      const center = scrollLeft + containerWidth / 2;
      const rawIndex = Math.round((center - bookWidth / 2) / (bookWidth + gap));
      let wrappedIndex = rawIndex;

      if (rawIndex < books.length) {
        wrappedIndex = rawIndex + books.length;
        scrollToIndex(wrappedIndex, false);
      } else if (rawIndex >= books.length * 2) {
        wrappedIndex = rawIndex - books.length;
        scrollToIndex(wrappedIndex, false);
      }

      if (wrappedIndex !== currentIndex) {
        setCurrentIndex(wrappedIndex);
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        scrollToIndex(wrappedIndex);
      }, 120);
    };

    const node = scrollRef.current;
    if (!node) return;

    node.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      node.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [books.length, currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ overflow: 'visible' }}
    >
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
        aria-label="Scroll left"
      >
        <HiChevronLeft size={22} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-40 py-20 items-center"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x proximity',
          perspective: '1200px',
        }}
      >
        {duplicatedBooks.map((book, index) => (
          <div
            key={`${book.title}-${index}`}
            style={{ scrollSnapAlign: 'center' }}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            <BookCover book={book} isCentered={index === currentIndex} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
        aria-label="Scroll right"
      >
        <HiChevronRight size={22} />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

