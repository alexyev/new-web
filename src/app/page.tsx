import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import { HiEnvelope } from 'react-icons/hi2';

const socialLinks = [
  { href: "https://www.linkedin.com/in/alexanderyevchenko/", label: "LinkedIn",   Icon: FaLinkedinIn },
  { href: "https://github.com/alexyev",                       label: "GitHub",     Icon: FaGithub     },
  { href: "https://x.com/ayevch",                            label: "X (Twitter)", Icon: FaXTwitter  },
  { href: "https://yevch3nko.substack.com",                  label: "Substack",   Icon: SiSubstack   },
  { href: "https://www.youtube.com/@alexanderyevchenko",     label: "YouTube",    Icon: FaYoutube    },
  { href: "mailto:alexanderyevchenko@gmail.com",             label: "Email",      Icon: HiEnvelope   },
];


export default function Home() {
  return (
    <main className="w-full px-4 lg:px-8 max-w-4xl mx-auto pb-24">

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-32 pb-16 flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-14">

        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-serif font-medium leading-[1.08] mb-2 anim-reveal-left">
            Alexander Yevchenko
          </h1>
          <p className="text-sm italic text-muted mb-7 anim-reveal-up anim-delay-2">per aspera ad astra</p>

          <p className="text-[15px] text-foreground/80 leading-relaxed mb-9 max-w-lg anim-reveal-up anim-delay-3">
            I build things at the intersection of technology and impact.
            Currently studying CS, Business, and Physics at UNC Chapel Hill as a
            Morehead-Cain Scholar.
          </p>

          <div className="flex gap-1 sm:gap-3 items-center -my-2 -ml-2 anim-reveal-up anim-delay-5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-300 p-2"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 anim-reveal-scale anim-delay-1">
          <Image
            src="/profile.jpg"
            alt="Alexander Yevchenko"
            width={170}
            height={170}
            className="rounded-md object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-border anim-draw-line anim-delay-5" />

      {/* ── Now ── */}
      <section className="py-8">
        <div className="pl-5 border-l-2 border-accent/50 anim-reveal-up anim-delay-6">
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Now</p>
          <p className="text-sm text-foreground/75 leading-relaxed max-w-prose">
            <span className="font-medium text-foreground/90">Spring 2026:</span>{" "}
            Studying abroad at the National University of Singapore. Preparing for a
            summer internship at Boomitra in Buenos Aires. Recruiting for quant and
            CS roles for Summer 2027.
          </p>
        </div>
      </section>

    </main>
  );
}
