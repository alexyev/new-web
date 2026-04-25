import Image from 'next/image';
import type { Book } from '@/data/books';

interface ReadingQueueProps {
  current: Book[];
  next: Book[];
}

export default function ReadingQueue({ current, next }: ReadingQueueProps) {
  if (current.length === 0 && next.length === 0) return null;

  return (
    <div className="space-y-10">
      {/* Currently Reading — horizontal row */}
      {current.length > 0 && (
        <section>
          <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
            Currently Reading
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {current.map((book) => (
              <li key={`${book.title}-${book.author}`} className="flex gap-4">
                <div
                  className="relative flex-shrink-0 overflow-hidden rounded-sm"
                  style={{
                    width: 104,
                    height: 156,
                    backgroundColor: 'var(--border)',
                    boxShadow:
                      '0 10px 26px -10px rgba(201,173,167,0.6), 0 2px 8px rgba(28,25,21,0.12)',
                  }}
                >
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover"
                    sizes="104px"
                  />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-serif text-base leading-snug text-foreground">
                    {book.title}
                  </p>
                  <p className="text-sm text-accent italic mt-0.5">
                    {book.author}
                  </p>
                  {book.startedAt && (
                    <p className="text-xs text-muted mt-1.5">
                      Started {book.startedAt}
                    </p>
                  )}
                  {book.note && (
                    <p className="text-sm text-muted leading-relaxed mt-1.5">
                      {book.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next Up */}
      {next.length > 0 && (
        <section>
          <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
            Next up
          </h2>
          <ol className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {next.map((book, i) => (
              <li
                key={`${book.title}-${book.author}`}
                className="flex gap-3 items-start"
              >
                <span className="font-serif text-sm text-muted w-4 pt-2 flex-shrink-0">
                  {i + 1}
                </span>
                <div
                  className="relative flex-shrink-0 overflow-hidden rounded-sm opacity-80"
                  style={{
                    width: 52,
                    height: 78,
                    backgroundColor: 'var(--border)',
                  }}
                >
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover"
                    sizes="52px"
                  />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="font-serif text-sm leading-snug text-foreground">
                    {book.title}
                  </p>
                  <p className="text-xs text-muted italic mt-0.5">
                    {book.author}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
