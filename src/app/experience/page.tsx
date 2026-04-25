import { experiences } from '@/data/experiences';
import ExperienceCard from '@/components/experience-card';

export default function Experience() {
  return (
    <main className="w-full px-4 lg:px-8 max-w-5xl mx-auto pb-24">

      <section className="pt-12">
        <h1 className="font-serif text-4xl font-medium mb-2 anim-reveal-left">Experience</h1>
        <p className="text-sm text-muted mb-6 anim-reveal-up anim-delay-1">
          What I&apos;ve worked on and what it taught me.
        </p>

        <div className="divide-y divide-border anim-stagger">
          {experiences.map((experience, i) => (
            <ExperienceCard key={`${experience.company}-${experience.period}`} experience={experience} index={i} />
          ))}
        </div>
      </section>

    </main>
  );
}
