export const uiItems = [
  { icon: "/images/uiuxIcon.svg", title: "UI/UX Design" },
  { icon: "/images/protoTypIcon.svg", title: "Prototyping" },
  { icon: "/images/GraohicDesign.svg", title: "Graphic Design" },
  { icon: "/images/typography.svg", title: "Typography" },
  { icon: "/images/branding.svg", title: "Branding" },
  { icon: "/images/uxresearch.svg", title: "User Research" },
];

/** Tech stack, placed every 45° around the orbit, each centred on the ring */
export const orbitIcons = [
  { src: "/images/html5Icon.svg", alt: "html", name: "HTML5", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/nodeIcon.svg", alt: "node", name: "Node.js", position: "top-[14.6%] left-[85.4%] -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/cssIcon.svg", alt: "css", name: "CSS3", position: "top-1/2 left-full -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/reactIcon.svg", alt: "react", name: "React", position: "top-[85.4%] left-[85.4%] -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/jsIcon.svg", alt: "js", name: "JavaScript", position: "top-full left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/wordPressIcon.svg", alt: "wordpress", name: "WordPress", position: "top-[85.4%] left-[14.6%] -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/viteIcon.svg", alt: "vite", name: "Vite", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/tailwindIcon.svg", alt: "tailwind", name: "Tailwind CSS", position: "top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2" },
];

export const expertiseTabs = [
  { id: "design", label: "Product Design" },
  { id: "webDev", label: "Frontend Engineering" },
] as const;

export type ExpertiseTabId = (typeof expertiseTabs)[number]["id"];
