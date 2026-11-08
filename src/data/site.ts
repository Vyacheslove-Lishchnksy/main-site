export const SITE = {
  name: "Viacheslav Lishchynskyi",
  shortName: "Viacheslav",
  handle: "Vyacheslove-Lishchnksy",
  github: "https://github.com/Vyacheslove-Lishchnksy",
  location: "Khmelnytskyi, Ukraine",
  role: "Fullstack developer · creative coding",
} as const;

export const NAV_ITEMS = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "playground", label: "Playground" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
] as const;

export const HERO_FACTS = [
  { value: "15+", label: "public repositories" },
  { value: "3", label: "live demos online" },
  { value: "TS", label: "core stack" },
] as const;
