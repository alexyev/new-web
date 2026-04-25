import Image from 'next/image';
import { books } from '@/data/books';

export default function BookGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2">
      {books.map((book) => (
        <div
          key={book.title}
          className="group relative aspect-[2/3] overflow-hidden rounded-sm bg-border/30"
        >
          <Image
            src={book.cover}
            alt={`${book.title} by ${book.author}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 150px"
          />

          {/* Hover overlay — title and author fade in */}
          <div className="absolute inset-0 bg-foreground/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2">
            <p className="font-serif text-background text-xs text-center leading-snug line-clamp-3">
              {book.title}
            </p>
            <p className="text-accent text-xs text-center mt-1.5 leading-tight opacity-90 line-clamp-2">
              {book.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
