export const uiItems = [
  { icon: "/images/uiuxIcon.svg", title: "UI/UX Design" },
  { icon: "/images/protoTypIcon.svg", title: "Prototyping" },
  { icon: "/images/GraohicDesign.svg", title: "Graphic Design" },
  { icon: "/images/typography.svg", title: "Typography" },
  { icon: "/images/branding.svg", title: "Branding" },
  { icon: "/images/uxresearch.svg", title: "User Research" },
];

export const orbitIcons = [
  { src: "/images/html5Icon.svg", alt: "html", position: "top-0 left-1/2 -translate-x-1/2" },
  { src: "/images/nodeIcon.svg", alt: "node", position: "top-[20%] left-[90%] -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/cssIcon.svg", alt: "css", position: "top-1/2 left-full -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/reactIcon.svg", alt: "react", position: "bottom-[20%] left-[90%] -translate-x-1/2 translate-y-1/2" },
  { src: "/images/jsIcon.svg", alt: "js", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { src: "/images/wordPressIcon.svg", alt: "wordpress", position: "bottom-[20%] left-[10%] -translate-x-1/2 translate-y-1/2" },
  { src: "/images/viteIcon.svg", alt: "vite", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
  { src: "/images/tailwindIcon.svg", alt: "tailwind", position: "top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2" },
];

export const expertiseTabs = [
  { id: "design", label: "UI/UX Design" },
  { id: "webDev", label: "Frontend Development" },
] as const;

export type ExpertiseTabId = (typeof expertiseTabs)[number]["id"];
