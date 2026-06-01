import Image from 'next/image';
import { articles } from '@/data/writing';
import { BLUR_DATA_URL } from '@/lib/images';

export default function Writing() {
  return (
    <main className="w-full pb-24">

      {/* ── Writing ── */}
      <section className="pt-12 px-4 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2 anim-reveal-left">Writing</h1>
        <p className="text-sm text-muted mb-12 anim-reveal-up anim-delay-1">
          Essays, technical pieces, and reflections.
        </p>

        <div className="flex flex-wrap justify-center gap-8 anim-stagger">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-background rounded-sm shadow-[0_2px_12px_rgba(28,25,21,0.07)] hover:shadow-[0_6px_24px_rgba(28,25,21,0.13)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              {/* Cover */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-t-sm">
                {article.coverImage ? (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: article.imagePosition ?? 'top' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                ) : (
                  <div className="absolute inset-0 bg-border/50 flex items-center justify-center">
                    <span className="font-serif text-sm text-muted italic px-6 text-center leading-relaxed">
                      {article.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="px-5 py-4 flex-1 flex items-start">
                <h2 className="font-serif text-lg leading-snug text-foreground group-hover:text-accent transition-colors duration-200">
                  {article.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
