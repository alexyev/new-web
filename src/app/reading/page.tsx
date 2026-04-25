'use client';

import { useMemo, useState } from 'react';
import { books, currentlyReading, nextUp } from '@/data/books';
import BookshelfCarousel from '@/components/bookshelf-carousel';
import ReadingQueue from '@/components/reading-queue';
import SortDropdown, { type SortOption } from '@/components/sort-dropdown';

type SortKey = 'author-asc' | 'author-desc' | 'title-asc' | 'title-desc';

const SORT_OPTIONS: SortOption<SortKey>[] = [
  { key: 'author-asc', label: 'Author A–Z' },
  { key: 'author-desc', label: 'Author Z–A' },
  { key: 'title-asc', label: 'Title A–Z' },
  { key: 'title-desc', label: 'Title Z–A' },
];

// Strip leading articles so "The Great Gatsby" sorts under G, not T.
function titleKey(title: string): string {
  return title.replace(/^(the|a|an)\s+/i, '').toLowerCase();
}

export default function ReadingPage() {
  const [sort, setSort] = useState<SortKey>('author-asc');

  const sortedBooks = useMemo(() => {
    const copy = [...books];
    copy.sort((a, b) => {
      switch (sort) {
        case 'author-asc':
          return a.authorLast.localeCompare(b.authorLast);
        case 'author-desc':
          return b.authorLast.localeCompare(a.authorLast);
        case 'title-asc':
          return titleKey(a.title).localeCompare(titleKey(b.title));
        case 'title-desc':
          return titleKey(b.title).localeCompare(titleKey(a.title));
      }
    });
    return copy;
  }, [sort]);

  const hasQueue = currentlyReading.length > 0 || nextUp.length > 0;

  return (
    <main className="w-full pb-24">
      {/* Header */}
      <section className="pt-12 px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2 anim-reveal-left">Reading</h1>
        <p className="text-sm text-muted anim-reveal-up anim-delay-1">
          Books that have shaped how I think, and what I&apos;m reading now.
        </p>
      </section>

      {/* Currently Reading + Next Up */}
      {hasQueue && (
        <section className="mt-12 px-4 lg:px-8 max-w-4xl mx-auto anim-reveal-up anim-delay-2">
          <ReadingQueue current={currentlyReading} next={nextUp} />
        </section>
      )}

      {/* Shelf */}
      <section
        className={`${hasQueue ? 'mt-16 pt-8 border-t border-border' : 'mt-12'}`}
      >
        <div className="px-4 lg:px-8 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
          <h2 className="font-serif text-2xl font-medium">The Shelf</h2>

          {/* Sort controls */}
          <SortDropdown
            value={sort}
            options={SORT_OPTIONS}
            onChange={setSort}
          />
        </div>

        {/* Carousel breaks out of max-w constraint for full-width shelf effect */}
        <BookshelfCarousel books={sortedBooks} />
      </section>
    </main>
  );
}
