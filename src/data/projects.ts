export type GalleryItem = {
  src: string;
  /** Full Tailwind class(es) for the tile background */
  bg: string;
  /** Layout of the tile: full width, or one half of a pair */
  size: "wide" | "half";
  /** Extra classes for the <img> */
  imgClass?: string;
};

export type Project = {
  slug: string;
  /** Name used on cards and "next project" banners */
  title: string;
  /** Name used in the detail page heading */
  heading: string;
  subtitle: string;
  tag: string;
  category: string;
  description: string;
  /** Preview image on the /projects grid */
  cardImage: string;
  cardBg: string;
  cardHover: string;
  layout: "featured" | "grid";
  /** Image behind the "next project" banner when this project is next */
  bannerImage: string;
  gallery: GalleryItem[];
  visitUrl?: string;
  /** Shown on the /projects page and in "next project" order */
  listed: boolean;
};

export const projects: Project[] = [
  {
    slug: "tiara",
    title: "Tiara",
    heading: "Tiara",
    subtitle: "Skincare website & e-commerce",
    tag: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "Tiara is a cutting-edge skincare platform designed to help individuals find their perfect shade and select skincare products tailored to their unique needs. Using the latest advancements in AI technology, machine learning, and intelligent algorithms, Tiara analyzes your facial features such as wrinkles, age spots, and blemishes to determine your exact skin type and tone.",
    cardImage: "/images/project1real1.svg",
    cardBg: "bg-[#262226]",
    cardHover: "hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-600",
    layout: "featured",
    bannerImage: "/images/tiaraCombine1.svg",
    gallery: [
      { src: "/images/tiaraCombine1.svg", bg: "bg-[#262226]", size: "wide" },
      { src: "/images/tiaraShade.svg", bg: "bg-[#262226]", size: "half", imgClass: "max-w-2xs md:max-w-sm" },
      { src: "/images/tiaraFace.svg", bg: "bg-[#262226]", size: "half", imgClass: "max-w-full md:max-w-sm" },
      { src: "/images/tiaraCares.svg", bg: "bg-[#262226]", size: "wide" },
    ],
    listed: true,
  },
  {
    slug: "echo-farms",
    title: "Echo Farms",
    heading: "EchoFarms",
    subtitle: "Agriculture Ad Management System",
    tag: "Web Dev",
    category: "Web Dev",
    description:
      "My team and I developed EchoFarms, a dedicated Agriculture Ad Management Platform where vendors can easily create and manage ads, while buyers can search, filter, and purchase agricultural products with confidence. I was entrusted with designing a clean, intuitive interface for the homepage, vendor dashboard, and shop experience. I collaborated with developers and contributed to coding core pages and features, including ad posting forms, home page, shop, and search/filter functionality.",
    cardImage: "/images/echoProject.svg",
    cardBg: "bg-[#87A898]",
    cardHover: "hover:bg-gradient-to-r hover:from-emerald-950 hover:to-emerald-200",
    layout: "featured",
    bannerImage: "/images/echoFarmcarousel.svg",
    gallery: [
      { src: "/images/ecoPrev.svg", bg: "bg-[#A4D2D9]", size: "wide" },
      { src: "/images/LabEchoDashboard.svg", bg: "bg-[#507362]", size: "half", imgClass: "max-w-2xs md:max-w-sm" },
      { src: "/images/echoLav.svg", bg: "bg-[#507362]", size: "half", imgClass: "max-w-full md:max-w-sm" },
      { src: "/images/echoGrid.svg", bg: "bg-[#A4D2D9]", size: "wide" },
    ],
    visitUrl: "https://echo-farms.netlify.app/",
    listed: true,
  },
  {
    slug: "echo-books",
    title: "Echo Books",
    heading: "EchoBooks",
    subtitle: "Library Management System",
    tag: "Dashboard Dev",
    category: "Dashboard Dev",
    description:
      "EchoBooks is a modern Library Management System designed to help users easily manage book records, track borrowing and returns, and streamline overall library operations. I was responsible for designing the user interface and coding the dashboard, ensuring a clean, intuitive, and responsive experience that makes book management seamless for both administrators and users.",
    cardImage: "/images/echoBooks.svg",
    cardBg: "bg-slate-400",
    cardHover: "hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-600",
    layout: "grid",
    bannerImage: "/images/bookEcho.svg",
    gallery: [
      { src: "/images/bookDash.svg", bg: "bg-[#8CBEF6]", size: "wide" },
      { src: "/images/CategoryPage.svg", bg: "bg-[#2067B7]", size: "half", imgClass: "max-w-2xs md:max-w-sm" },
      { src: "/images/BookDetails.svg", bg: "bg-[#2067B7]", size: "half", imgClass: "max-w-full md:max-w-sm" },
      { src: "/images/echBookGrid.svg", bg: "bg-[#8CBEF6]", size: "wide" },
    ],
    visitUrl: "https://echo-stack.netlify.app/dashboard",
    listed: true,
  },
  {
    slug: "planit",
    title: "PlanIt",
    heading: "PlanIT",
    subtitle: "Task Management App",
    tag: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "Plainit is a simple yet powerful Task Management App designed to help users organize, prioritize, and track their daily tasks efficiently. I was responsible for designing the user interface, focusing on a clean, intuitive, and user-friendly experience that makes task planning and management seamless.",
    cardImage: "/images/planit.svg",
    cardBg: "bg-[#9ab1eb]",
    cardHover: "hover:bg-gradient-to-r hover:from-sky-800 hover:to-sky-100",
    layout: "grid",
    bannerImage: "/images/planItSvgPlans.svg",
    gallery: [
      { src: "/images/planItPrev.svg", bg: "bg-linear-to-r from-[#A0A3FD] via-[#b2b4fd] to-[#3E5BAC]", size: "wide" },
      { src: "/images/Home7XtraSmall.svg", bg: "bg-[#bcccfd]", size: "half", imgClass: "max-w-2xs md:max-w-sm" },
      { src: "/images/Home6Small.svg", bg: "bg-[#bcccfd]", size: "half", imgClass: "max-w-full md:max-w-sm" },
      { src: "/images/PlanItScreensBig2.svg", bg: "bg-linear-to-r from-[#A0A3FD] via-[#b2b4fd] to-[#3E5BAC]", size: "wide" },
    ],
    visitUrl:
      "https://www.figma.com/proto/3UDh13tUtkWdCEZuLBtqn7/Task-Management-App?page-id=0%3A1&node-id=1-5&p=f&viewport=642%2C296%2C0.02&t=k7qWMhQH6A6IjyIO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5",
    listed: true,
  },
  {
    slug: "lumea",
    title: "Luméa AI",
    heading: "Luméa",
    subtitle: "AI Skin Analysis Web App",
    tag: "Web Dev",
    category: "Web Dev",
    description:
      "Lumea is an innovative AI-powered Skin Analysis and Cosmetologist Booking Platform designed to help users understand their skin better and connect with trusted professionals for personalized care. The platform uses advanced AI technology to analyze skin tone, type, conditions, and overall health, providing users with detailed reports and tailored recommendations.",
    cardImage: "/images/lumeaPrev.svg",
    cardBg: "bg-purple-300",
    cardHover: "hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-200",
    layout: "featured",
    bannerImage: "/images/lumeaPrev.svg",
    gallery: [
      { src: "/images/Landing page.svg", bg: "bg-linear-to-r from-[#67b3d7] via-[#daa1fd] to-[#67b3d7]", size: "wide" },
      { src: "/images/resultUi.svg", bg: "bg-[#dca5fe]", size: "half", imgClass: "max-w-2xs md:max-w-sm shadow-lg" },
      { src: "/images/lumeaAICover.svg", bg: "bg-[#dca5fe]", size: "half", imgClass: "max-w-full md:max-w-sm shadow-lg" },
      { src: "/images/lumeaCombine.svg", bg: "bg-linear-to-r from-purple-400 via-purple-300 to-purple-200", size: "wide" },
    ],
    visitUrl: "https://lumeaai.netlify.app/",
    listed: true,
  },
  {
    slug: "mentor-hub",
    title: "Mentor Hub",
    heading: "Mentor Hub",
    subtitle: "Mentorship platform",
    tag: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "Mentor Hub is a web-based mentorship platform that connects mentors and mentees globally. The app features real-time video and voice calls, in-app messaging, smart AI matching, appointment scheduling, personalized dashboards, and support for both free and paid mentorship programs.",
    cardImage: "/images/MentorFirstPrototype.svg",
    cardBg: "bg-[#BCCFF3]",
    cardHover: "",
    layout: "featured",
    bannerImage: "/images/MentorFirstPrototype.svg",
    gallery: [{ src: "/images/mentor1.svg", bg: "bg-[#262226]", size: "wide" }],
    listed: false,
  },
];

export const carouselProjects = [
  { name: "Echo Farms", image: "/images/echoFarmcarousel.svg" },
  { name: "Mentor Hub", image: "/images/MentorFirstPrototype.svg" },
];
