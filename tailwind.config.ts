import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        animation: {
          typewriter: "typewriter 2s steps(11) forwards"
        },
        keyframes: {
          typewriter: {
            to: {
              left: "100%"
            }
          }
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-lora)', 'Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
