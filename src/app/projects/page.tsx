import { projects } from '@/data/projects';
import ProjectCard from '@/components/project-card';

const hero = projects.find((p) => p.tier === 'hero');
const features = projects.filter((p) => p.tier === 'feature');
const supporting = projects.filter((p) => p.tier === 'supporting');

export default function Projects() {
  return (
    <main className="w-full px-4 lg:px-8 max-w-5xl mx-auto pb-24">
      {/* ── Header ── */}
      <section className="pt-12">
        <h1 className="font-serif text-4xl font-medium mb-2 anim-reveal-left">Projects</h1>
        <p className="text-sm text-muted anim-reveal-up anim-delay-1">
          Long-term work, research, and things built under pressure.
        </p>
      </section>

      {/* ── Hero ── */}
      {hero && (
        <section className="pt-12 pb-16 anim-reveal-up anim-delay-2">
          <ProjectCard project={hero} variant="hero" />
        </section>
      )}

      {/* ── Features ── */}
      {features.length > 0 && (
        <section className="pt-4 pb-16 border-t border-border anim-draw-line anim-delay-3">
          <div className="pt-12 flex flex-wrap justify-start gap-8 anim-stagger">
            {features.map((p) => (
              <ProjectCard key={p.title} project={p} variant="feature" />
            ))}
          </div>
        </section>
      )}

      {/* ── Hackathons ── */}
      {supporting.length > 0 && (
        <section className="pt-4 border-t border-border">
          <div className="pt-10 mb-10">
            <h2 className="font-serif text-3xl font-medium anim-reveal-left anim-delay-4">Hackathons</h2>
          </div>
          <div className="flex flex-col gap-6 anim-stagger">
            {supporting.map((p) => (
              <ProjectCard key={p.title} project={p} variant="supporting" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
