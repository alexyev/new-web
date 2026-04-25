'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from 'react-icons/hi2';

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex justify-between items-center w-full px-4 lg:px-8 py-4">
        <Link href="/" className="block group">
          <p className="text-lg font-medium font-serif group-hover:text-accent transition-colors duration-300">
            Alexander Yevchenko
          </p>
          <p className="text-xs italic opacity-50 -mt-0.5">per aspera ad astra</p>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-300 ${
                pathname === href ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden -m-2 p-2 text-foreground hover:text-accent transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-4 pb-4 pt-3 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-300 py-2.5 ${
                pathname === href ? 'text-accent' : 'hover:text-accent'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
