import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import type { Experience } from '@/data/experiences';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return <CardLayout experience={experience} index={index} />;
}

function CardLayout({ experience, index }: { experience: Experience; index: number }) {
  const { role, company, period, location, description, link, image, imageFit, upcoming } = experience;
  const even = index % 2 === 0;
  const fitContain = imageFit === "contain";

  const imageBlock = image ? (
    <div
      className={`relative w-full md:w-[32%] aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm flex-shrink-0 ${
        fitContain ? "bg-background p-4" : ""
      }`}
    >
      <Image
        src={image}
        alt={company}
        fill
        className={`${
          fitContain ? "object-contain" : "object-cover"
        } transition-transform duration-[600ms] group-hover:scale-[1.02]`}
        sizes="(max-width: 768px) 100vw, 32vw"
      />
    </div>
  ) : (
    <div className="relative w-full md:w-[32%] aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm flex-shrink-0 bg-border/40 flex items-center justify-center">
      <span className="font-serif text-5xl text-muted/30 select-none">
        {company.charAt(0)}
      </span>
    </div>
  );

  const contentBlock = (
    <div className="flex-1 flex flex-col justify-center py-1 md:py-4">
      <p className="text-[10px] text-muted uppercase tracking-[0.2em] mb-3">
        {period} · {location}
      </p>

      <h2 className="font-serif text-2xl leading-snug mb-2">{role}</h2>

      <div className="flex items-center gap-3 mb-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors duration-300"
          >
            {company}
            <HiArrowUpRight
              size={13}
              className="text-accent/50 group-hover/link:text-accent group-hover/link:translate-x-px group-hover/link:-translate-y-px transition-all duration-300"
            />
          </a>
        ) : (
          <span className="text-sm font-medium">{company}</span>
        )}

        {upcoming && (
          <span className="text-xs text-accent border border-accent/40 rounded-full px-2.5 py-0.5 leading-none">
            Upcoming
          </span>
        )}
      </div>

      <p className="text-sm text-foreground/70 leading-relaxed max-w-lg">
        {description}
      </p>
    </div>
  );

  return (
    <div className="group py-8">
      <article className={`flex flex-col md:flex-row gap-6 md:gap-8 items-stretch ${even ? '' : 'md:flex-row-reverse'}`}>
        {imageBlock}
        {contentBlock}
      </article>
    </div>
  );
}
