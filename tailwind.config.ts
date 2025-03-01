import type { Config } from "tailwindcss";

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/app/pages/**.{js,ts,jsx,tsx,mdx,html,css}",
    "./src/app/core/components/**.{js,ts,jsx,tsx,mdx,html,css}",
    "./src/app/**.{js,ts,jsx,tsx,mdx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'dropdown-background-color': 'var(--dropdown-background-color)',
        'text-color': 'var(--text-color)',
        'link-color': 'var(--link-color)',
        'shadow-color': 'var(--shadow-color)',
        'nut-color': 'var(--nut-color)',
        'note-color': 'var(--note-color)',
        'note-text-color': 'var(--note-text-color)',
        'highlighted-note-color': 'var(--highlighted-note-color)',
        'highlighted-note-text-color': 'var(--highlighted-note-text-color)',
        'root-note-color': 'var(--root-note-color)',
        'root-note-text-color': 'var(--root-note-text-color)',
        'fret-color': 'var(--fret-color)',
        'string-color': 'var(--string-color)',
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
