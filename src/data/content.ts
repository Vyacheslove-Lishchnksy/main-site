export type ProjectVisual = "fog" | "matrix" | "player" | "eyes" | "melody";

export type Project = {
  id: string;
  kind: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  visual: ProjectVisual;
};

export type PlaygroundItem = {
  id: string;
  title: string;
  description: string;
  status: "live" | "soon";
  repo: string;
  demo?: string;
  glyph: string;
};

const GITHUB = "https://github.com/Vyacheslove-Lishchnksy";

export const PROJECTS: Project[] = [
  {
    id: "fog",
    kind: "Web app · 2026",
    title: "Fog of War",
    description:
      "Turns an ordinary walk into map exploration: GPS reveals fog cells around you. Progress lives locally, and with an account it syncs through Supabase.",
    tags: ["TypeScript", "Vite", "Leaflet", "Supabase", "Vitest"],
    repo: `${GITHUB}/fog`,
    demo: "https://fog-0tou.onrender.com",
    featured: true,
    visual: "fog",
  },
  {
    id: "matrix-js",
    kind: "Open source · framework",
    title: "matrix.js",
    description:
      "A React framework for matrix displays of any size. A program is just two functions — before and draw — and the rest of the magic happens on canvas.",
    tags: ["React", "TypeScript", "Canvas", "BSD-3"],
    repo: `${GITHUB}/matrix.js`,
    demo: "https://vyacheslove-lishchnksy.github.io/matrix.js/",
    visual: "matrix",
  },
  {
    id: "pleer-pk",
    kind: "Desktop · Electron",
    title: "pleer-pk",
    description:
      "A desktop music player: track library, metadata from audio files, and custom player state on Redux Toolkit. Electron + React under the hood.",
    tags: ["Electron", "React", "Redux", "Web Audio"],
    repo: `${GITHUB}/pleer-pk`,
    visual: "player",
  },
  {
    id: "oh-my-eyes",
    kind: "Browser extension",
    title: "oh-my-eyes",
    description:
      "A Chrome extension that rewrites text on pages by your rules — from replacing individual words to masking them with asterisks.",
    tags: ["Chrome Extension", "TypeScript", "RegExp"],
    repo: `${GITHUB}/oh-my-eyes`,
    visual: "eyes",
  },
  {
    id: "diplom3",
    kind: "Fullstack · IoT",
    title: "Melody Device",
    description:
      "A diploma web interface for a music device: melody library, device mode and playback control. Next.js on Vercel.",
    tags: ["Next.js", "Nest.js", "ESP32"],
    repo: `${GITHUB}/diplom3`,
    demo: "https://diplom3.vercel.app",
    visual: "melody",
  },
];

export const PLAYGROUND: PlaygroundItem[] = [
  {
    id: "snake",
    title: "snake",
    description: "Classic Snake in TypeScript and canvas. The demo is already live online.",
    status: "live",
    repo: `${GITHUB}/snake`,
    demo: "https://vyacheslove-lishchnksy.github.io/snake/",
    glyph: "◼",
  },
  {
    id: "matrix-demos",
    title: "matrix.js demos",
    description: "Matrix experiments: a clock, animations and visualizations on my own framework.",
    status: "live",
    repo: `${GITHUB}/matrix.js`,
    demo: "https://vyacheslove-lishchnksy.github.io/matrix.js/",
    glyph: "01",
  },
  {
    id: "brick-game",
    title: "brickGame",
    description: "A retro arcade game in TypeScript: grid, pieces, score. The next candidate for a live demo block.",
    status: "soon",
    repo: `${GITHUB}/brickGame`,
    glyph: "▦",
  },
  {
    id: "regexpxr",
    title: "RegExpXr",
    description: "Regular expression experiments in the browser — with a sandbox for rules.",
    status: "soon",
    repo: `${GITHUB}/RegExpXr`,
    glyph: ".*",
  },
];

export const STACK: { title: string; items: string[] }[] = [
  {
    title: "Language",
    items: ["TypeScript", "JavaScript", "HTML", "CSS / Sass"],
  },
  {
    title: "Frontend",
    items: ["React", "Redux Toolkit", "Vite", "Next.js"],
  },
  {
    title: "Data & backend",
    items: ["Node.js", "Supabase", "Leaflet", "REST"],
  },
  {
    title: "Tools",
    items: ["Git / GitHub", "Vitest", "ESLint", "Electron"],
  },
];

export const FACTS: { label: string; value: string }[] = [
  { label: "Location", value: "Khmelnytskyi, UA" },
  { label: "Focus", value: "Frontend / interactive" },
  { label: "Core stack", value: "TypeScript, React, Vite" },
  { label: "Public repositories", value: "15+" },
  { label: "Open to work", value: "Yes" },
];
