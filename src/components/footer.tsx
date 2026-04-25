import { FaLinkedinIn, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import { HiEnvelope } from 'react-icons/hi2';

const links = [
  {
    href: "https://www.linkedin.com/in/alexanderyevchenko/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/alexyev",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://x.com/ayevch",
    label: "X (Twitter)",
    Icon: FaXTwitter,
  },
  {
    href: "https://yevch3nko.substack.com",
    label: "Substack",
    Icon: SiSubstack,
  },
  {
    href: "https://www.youtube.com/@alexanderyevchenko",
    label: "YouTube",
    Icon: FaYoutube,
  },
  {
    href: "mailto:alexanderyevchenko@gmail.com",
    label: "Email",
    Icon: HiEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 lg:px-8 py-10 mt-16 border-t border-border">
      <div className="flex justify-center gap-3 sm:gap-5 -my-2">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : "_blank"}
            rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-muted hover:text-accent transition-colors duration-300 p-2"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-center text-xs text-muted/50 mt-5 italic">per aspera ad astra</p>
    </footer>
  );
}
