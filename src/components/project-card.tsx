import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import type { Project } from '@/data/projects';
import { BLUR_DATA_URL } from '@/lib/images';

interface ProjectCardProps {
  project: Project;
  variant: 'hero' | 'feature' | 'supporting';
}

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  if (variant === 'hero') return <HeroCard project={project} />;
  if (variant === 'feature') return <FeatureCard project={project} />;
  return <SupportingCard project={project} />;
}

function metaLine(parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(' · ');
}

/* ─── Hero ─── */
function HeroCard({ project }: { project: Project }) {
  const {
    title,
    description,
    oneLiner,
    image,
    link,
    tags,
    year,
    role,
    status,
    metrics,
  } = project;

  const meta = metaLine([year, role, status]);

  const inner = (
    <article className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
      {/* Image — oversized, asymmetric to content */}
      <div
        className="relative w-full lg:w-[56%] aspect-[4/3] overflow-hidden rounded-sm"
        style={{
          boxShadow:
            '0 28px 52px -28px rgba(201,173,167,0.5), 0 14px 36px -18px rgba(28,25,21,0.12)',
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 56vw"
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>

      {/* Content column */}
      <div className="flex-1 lg:w-[44%] flex flex-col justify-center py-2">
        {meta && (
          <p className="text-[11px] text-muted uppercase tracking-[0.2em] mb-5">
            {meta}
          </p>
        )}

        <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-[1.05] mb-5 group-hover:text-accent transition-colors duration-300">
          {title}
        </h2>

        {oneLiner && (
          <p className="font-serif italic text-xl text-accent leading-snug mb-6">
            &ldquo;{oneLiner}&rdquo;
          </p>
        )}

        <p className="text-sm text-foreground/75 leading-relaxed mb-7">
          {description}
        </p>

        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 pb-2">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-[10px] text-muted uppercase tracking-[0.2em] mb-1">
                  {m.label}
                </p>
                <p className="text-sm text-foreground/85 leading-snug">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-5 mt-auto border-t border-border/70">
          <p className="text-xs text-muted tracking-wider">
            {tags.join(' · ')}
          </p>
          {link && (
            <HiArrowUpRight
              size={20}
              className="text-accent/60 group-hover:text-accent group-hover:translate-x-px group-hover:-translate-y-px transition-all duration-300"
            />
          )}
        </div>
      </div>
    </article>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {inner}
      </a>
    );
  }
  return <div className="group block">{inner}</div>;
}

/* ─── Feature ─── */
function FeatureCard({ project }: { project: Project }) {
  const { title, description, image, link, tags, year, role } = project;
  const meta = metaLine([year, role]);

  const inner = (
    <article className="flex flex-col h-full">
      <div className="relative aspect-[3/2] overflow-hidden rounded-t-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
      <div className="px-6 py-5 flex-1 flex flex-col">
        {meta && (
          <p className="text-[10px] text-muted uppercase tracking-[0.2em] mb-2.5">
            {meta}
          </p>
        )}

        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl leading-snug group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          {link && (
            <HiArrowUpRight
              size={15}
              className="flex-shrink-0 mt-1 text-accent/50 group-hover:text-accent group-hover:translate-x-px group-hover:-translate-y-px transition-all duration-300"
            />
          )}
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <p className="text-[11px] text-muted tracking-wider">
          {tags.join(' · ')}
        </p>
      </div>
    </article>
  );

  const base =
    'group flex flex-col bg-background rounded-sm shadow-[0_2px_14px_rgba(28,25,21,0.07)] hover:shadow-[0_10px_28px_rgba(28,25,21,0.13)] hover:-translate-y-0.5 transition-all duration-300 w-full md:w-[calc(50%-1rem)]';

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return <div className={base}>{inner}</div>;
}

/* ─── Supporting (hackathon — horizontal editorial card) ─── */
function SupportingCard({ project }: { project: Project }) {
  const { title, description, image, link, tags, label } = project;

  const inner = (
    <article className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-stretch">
      <div className="relative w-full sm:w-[38%] aspect-[3/2] sm:aspect-auto overflow-hidden rounded-sm flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 38vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center py-1 sm:py-4">
        {label && (
          <span className="inline-block self-start text-[10px] font-medium uppercase tracking-[0.18em] text-accent bg-accent/10 px-2.5 py-1 rounded-sm mb-3">
            {label}
          </span>
        )}

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-2xl leading-snug group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          {link && (
            <HiArrowUpRight
              size={16}
              className="flex-shrink-0 mt-1.5 text-accent/50 group-hover:text-accent group-hover:translate-x-px group-hover:-translate-y-px transition-all duration-300"
            />
          )}
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
          {description}
        </p>

        <p className="text-[11px] text-muted tracking-wider mt-auto">
          {tags.join(' · ')}
        </p>
      </div>
    </article>
  );

  const base =
    'group block w-full bg-background rounded-sm shadow-[0_2px_14px_rgba(28,25,21,0.06)] hover:shadow-[0_10px_28px_rgba(28,25,21,0.12)] hover:-translate-y-0.5 transition-all duration-300 p-3 sm:p-4';

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return <div className={base}>{inner}</div>;
}
