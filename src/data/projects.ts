import { img } from "./images";

export type GalleryItem = {
  src: string;
  /** Full Tailwind class(es) for the tile background */
  bg: string;
  /** Layout of the tile: full width, or one half of a pair */
  size: "wide" | "half";
  /** Extra classes for the <img> */
  imgClass?: string;
};

export type CaseStudyImage = {
  /** The image, or the still shown before a `video` plays */
  src: string;
  alt: string;
  /** Full width, or one half of a side-by-side pair. Defaults to wide. */
  size?: "wide" | "half";
  /** Tailwind background for this frame; defaults to the case study's `frameBg` */
  bg?: string;
  /**
   * Screen recording (.mp4) of an interaction. Short clips loop silently in place; add `flow: true`
   * for longer walkthroughs, which show a "View flow" button that opens the recording with controls.
   */
  video?: string;
  flow?: boolean;
};

/** A block of the case study's main column. Every field is optional and rendered in this order. */
export type CaseStudySection = {
  title?: string;
  body?: string;
  /** Labelled insight cards, e.g. user groups from research */
  highlights?: { label: string; text: string }[];
  /** Side-by-side text blocks, e.g. "The Challenge" and "Design Strategy" */
  columns?: { title: string; body: string }[];
  images?: CaseStudyImage[];
};

export type CaseStudy = {
  tagline: string;
  /** Short facts in the sidebar, e.g. role, industry, platform */
  meta: { label: string; value: string }[];
  /** "Concept and Objectives" text in the sidebar */
  overview: string;
  /** Link for the "View interactive prototype" button, e.g. a Figma prototype; falls back to the project's `visitUrl` */
  prototypeUrl?: string;
  /** Lead image of the case study, also used on the home page showcase */
  cover: string;
  /** Tailwind background for the cover image's frame; defaults to `frameBg` */
  coverBg?: string;
  /** Tailwind background class for the frames behind screenshots */
  frameBg: string;
  sections: CaseStudySection[];
};

export type Project = {
  slug: string;
  /** Name used on cards and "next project" banners */
  title: string;
  /** Name used in the detail page heading */
  heading: string;
  subtitle: string;
  /** Industry shown on cards, e.g. "Agriculture" */
  tag: string;
  /** Discipline shown on the project page, e.g. "UI/UX Design" */
  category: string;
  /** When the project was made (YYYY-MM); newest first under the "Recent" filter on /projects */
  date: string;
  description: string;
  /** Preview image on project cards */
  cardImage: string;
  cardBg: string;
  cardHover: string;
  /** Image behind the "next project" banner when this project is next */
  bannerImage: string;
  /** Screens shown on a regular project page */
  gallery?: GalleryItem[];
  /** Projects with a case study get the long-form case study page instead of the gallery page */
  caseStudy?: CaseStudy;
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
    tag: "E-commerce",
    category: "UI/UX Design",
    date: "2024-04",
    description:
      "Tiara is a cutting-edge skincare platform designed to help individuals find their perfect shade and select skincare products tailored to their unique needs. Using the latest advancements in AI technology, machine learning, and intelligent algorithms, Tiara analyzes your facial features such as wrinkles, age spots, and blemishes to determine your exact skin type and tone.",
    cardImage: img("project1real1"),
    cardBg: "bg-[#262226]",
    cardHover: "hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-600",
    bannerImage: img("tiaraCombine1"),
    gallery: [
      { src: img("tiaraCombine1"), bg: "bg-[#262226]", size: "wide" },
      { src: img("tiaraShade"), bg: "bg-[#262226]", size: "half" },
      { src: img("tiaraFace"), bg: "bg-[#262226]", size: "half" },
      { src: img("tiaraCares"), bg: "bg-[#262226]", size: "wide" },
    ],
    listed: true,
  },
  {
    slug: "echo-farms",
    title: "Echo Farms",
    heading: "EchoFarms",
    subtitle: "Agriculture Ad Management System",
    tag: "Agriculture",
    category: "Web Dev",
    date: "2024-11",
    description:
      "My team and I developed EchoFarms, a dedicated Agriculture Ad Management Platform where vendors can easily create and manage ads, while buyers can search, filter, and purchase agricultural products with confidence. I was entrusted with designing a clean, intuitive interface for the homepage, vendor dashboard, and shop experience. I collaborated with developers and contributed to coding core pages and features, including ad posting forms, home page, shop, and search/filter functionality.",
    cardImage: img("echoProject"),
    cardBg: "bg-[#87A898]",
    cardHover: "hover:bg-gradient-to-r hover:from-emerald-950 hover:to-emerald-200",
    bannerImage: img("echoFarmcarousel"),
    caseStudy: {
      tagline: "An agriculture ad marketplace where vendors list farm products and buyers shop with confidence.",
      meta: [
        { label: "Role", value: "UI/UX Design & Frontend" },
        { label: "Industry", value: "Agriculture" },
        { label: "Platform", value: "Web app" },
        { label: "Team", value: "Team project" },
      ],
      overview:
        "EchoFarms is an Agriculture Ad Management Platform. Vendors create and manage ads for equipment, seeds and produce, while buyers search, filter and purchase what they need. The objective was a marketplace that feels simple for vendors posting their first ad and fast for buyers who know exactly what they are looking for.",
      cover: img("echoFarmcarousel"),
      frameBg: "bg-[#87A898]",
      sections: [
        {
          title: "Users & Goals",
          body: "The platform serves two very different groups, so every screen had to answer a clear question for one of them: how do I sell this, or how do I find this.",
          highlights: [
            {
              label: "Vendors",
              text: "Need a quick way to post ads, keep listings up to date and see how they are performing, without a steep learning curve.",
            },
            {
              label: "Buyers",
              text: "Want to find the right equipment or produce fast, compare options side by side and trust who they are buying from.",
            },
            {
              label: "Trust",
              text: "Clear product details, verified vendors and consistent layouts help both sides feel confident doing business.",
            },
          ],
        },
        {
          title: "Homepage & Shop",
          body: "I designed and helped build the homepage, shop and search and filter experience, bringing the most in-demand categories forward and keeping product imagery at the centre.",
          images: [
            { src: img("ecoPrev"), alt: "EchoFarms homepage and shop screens", bg: "bg-[#A4D2D9]" },
            { src: img("echoGrid"), alt: "EchoFarms shop, FAQ and vendor story sections", bg: "bg-[#A4D2D9]" },
          ],
        },
        {
          title: "Vendor Dashboard",
          body: "The vendor dashboard puts the essentials first: a snapshot of ad performance, what is trending in the marketplace, and a clear table for creating and managing ads.",
          images: [
            { src: img("EcoDashboard"), alt: "EchoFarms vendor dashboard overview", size: "half", bg: "bg-[#507362]" },
            { src: img("echoLav"), alt: "EchoFarms manage ads screen", size: "half", bg: "bg-[#507362]" },
          ],
        },
        {
          columns: [
            {
              title: "The Challenge",
              body: "Agricultural listings range from tractors to seedlings. The interface had to present very different products, prices and details without feeling cluttered or confusing.",
            },
            {
              title: "Design Strategy",
              body: "A calm green palette rooted in farming, generous imagery and a small set of reusable cards and form components kept the homepage, shop and dashboard consistent and made handoff to developers straightforward.",
            },
          ],
          images: [{ src: img("echoProject"), alt: "EchoFarms landing page and product page" }],
        },
      ],
    },
    visitUrl: "https://echo-farms.netlify.app/",
    listed: true,
  },
  {
    slug: "echo-books",
    title: "Echo Books",
    heading: "EchoBooks",
    subtitle: "Library Management System",
    tag: "Education",
    category: "Dashboard Dev",
    date: "2025-01",
    description:
      "EchoBooks is a modern Library Management System designed to help users easily manage book records, track borrowing and returns, and streamline overall library operations. I was responsible for designing the user interface and coding the dashboard, ensuring a clean, intuitive, and responsive experience that makes book management seamless for both administrators and users.",
    cardImage: img("echoBooks"),
    cardBg: "bg-slate-400",
    cardHover: "hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-600",
    bannerImage: img("bookEcho"),
    gallery: [
      { src: img("bookDash"), bg: "bg-[#8CBEF6]", size: "wide" },
      { src: img("CategoryPage"), bg: "bg-[#2067B7]", size: "half" },
      { src: img("BookDetails"), bg: "bg-[#2067B7]", size: "half" },
      { src: img("echBookGrid"), bg: "bg-[#8CBEF6]", size: "wide" },
    ],
    visitUrl: "https://echo-stack.netlify.app/dashboard",
    listed: true,
  },
  {
    slug: "planit",
    title: "PlanIt",
    heading: "PlanIT",
    subtitle: "Task Management App",
    tag: "Productivity",
    category: "UI/UX Design",
    date: "2024-07",
    description:
      "Plainit is a simple yet powerful Task Management App designed to help users organize, prioritize, and track their daily tasks efficiently. I was responsible for designing the user interface, focusing on a clean, intuitive, and user-friendly experience that makes task planning and management seamless.",
    cardImage: img("planit"),
    cardBg: "bg-[#9ab1eb]",
    cardHover: "hover:bg-gradient-to-r hover:from-sky-800 hover:to-sky-100",
    bannerImage: "/images/planItSvgPlans.svg",
    gallery: [
      { src: img("planItPrev"), bg: "bg-linear-to-r from-[#A0A3FD] via-[#b2b4fd] to-[#3E5BAC]", size: "wide" },
      { src: img("Home7XtraSmall"), bg: "bg-[#bcccfd]", size: "half", imgClass: "max-h-[70svh] w-auto object-contain sm:h-full sm:max-h-none" },
      { src: "/images/Home6Small.svg", bg: "bg-[#bcccfd]", size: "half", imgClass: "max-h-[70svh] w-auto object-contain sm:h-full sm:max-h-none" },
      { src: img("PlanItScreensBig2"), bg: "bg-linear-to-r from-[#A0A3FD] via-[#b2b4fd] to-[#3E5BAC]", size: "wide" },
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
    tag: "Healthcare",
    category: "Web Dev",
    date: "2025-06",
    description:
      "Lumea is an innovative AI-powered Skin Analysis and Cosmetologist Booking Platform designed to help users understand their skin better and connect with trusted professionals for personalized care. The platform uses advanced AI technology to analyze skin tone, type, conditions, and overall health, providing users with detailed reports and tailored recommendations.",
    cardImage: img("lumeaPrev"),
    cardBg: "bg-purple-300",
    cardHover: "hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-200",
    bannerImage: img("lumeaPrev"),
    caseStudy: {
      tagline: "AI skin analysis and cosmetologist booking, brought together in one web app.",
      meta: [
        { label: "Role", value: "UI/UX Design & Web Dev" },
        { label: "Industry", value: "Healthcare & Beauty" },
        { label: "Platform", value: "Web app" },
        { label: "Focus", value: "AI skin analysis" },
      ],
      overview:
        "Luméa helps people understand their skin and connect with trusted professionals for personalised care. Its AI analyses skin tone, type, conditions and overall health, then turns the results into a clear report with tailored recommendations and an easy way to book a cosmetologist.",
      cover: img("Landing page"),
      coverBg: "bg-linear-to-r from-[#67b3d7] via-[#daa1fd] to-[#67b3d7]",
      frameBg: "bg-[#dca5fe]",
      sections: [
        {
          title: "Users & Goals",
          body: "Luméa sits between technology and a very personal topic, so the experience needed to feel as caring as it is smart.",
          highlights: [
            {
              label: "Skincare seekers",
              text: "Want to understand their skin type, tone and concerns without guesswork or costly trial and error.",
            },
            {
              label: "Cosmetologists",
              text: "Need a simple way to manage appointments and see a client's skin report before a session.",
            },
            {
              label: "Trust in AI",
              text: "Results must be explained in plain language with clear next steps, so people trust what the analysis tells them.",
            },
          ],
        },
        {
          title: "AI Analysis Results",
          body: "The results screen leads with an overall skin health score, then breaks it down into skin type, conditions and recommended products, with a direct path to book an expert.",
          images: [{ src: img("resultUi"), alt: "Luméa AI skin analysis results screen" }],
        },
        {
          title: "Cosmetologist Dashboard",
          body: "Professionals get a calendar, upcoming appointments and an annotated face map of each client's concerns, so they arrive at every session prepared.",
          images: [
            { src: img("lumeaAICover"), alt: "Luméa client details dashboard", size: "half" },
            { src: img("lumeaPrev"), alt: "Luméa appointments dashboard", size: "half" },
          ],
        },
        {
          columns: [
            {
              title: "The Challenge",
              body: "AI results can feel clinical and intimidating. The challenge was presenting detailed analysis in a way that feels reassuring and actionable rather than overwhelming.",
            },
            {
              title: "Design Strategy",
              body: "Soft lavender tones, real diverse faces and plain-language labels make the product feel warm. Every analysis ends with a next step, whether that is a product, a routine or a booking.",
            },
          ],
          images: [
            { src: img("lumeaMocLand"), alt: "Luméa landing page on a laptop", size: "half" },
            { src: img("lumeaYellowHere"), alt: "Luméa landing page alternative on a laptop", size: "half" },
            { src: img("lumeaCombine"), alt: "Luméa brand and marketing screens", bg: "bg-linear-to-r from-purple-400 via-purple-300 to-purple-200" },
          ],
        },
      ],
    },
    visitUrl: "https://lumeaai.netlify.app/",
    listed: true,
  },
  {
    slug: "mentor-hub",
    title: "Mentor Hub",
    heading: "Mentor Hub",
    subtitle: "Mentorship platform",
    tag: "Education",
    category: "UI/UX Design",
    date: "2025-03",
    description:
      "Mentor Hub is a web-based mentorship platform that connects mentors and mentees globally. The app features real-time video and voice calls, in-app messaging, smart AI matching, appointment scheduling, personalized dashboards, and support for both free and paid mentorship programs.",
    cardImage: img("MentorFirstPrototype"),
    cardBg: "bg-[#BCCFF3]",
    cardHover: "",
    bannerImage: img("MentorFirstPrototype"),
    caseStudy: {
      tagline: "A global mentorship platform that connects mentees with the right mentors.",
      meta: [
        { label: "Role", value: "UI/UX Design" },
        { label: "Industry", value: "Education" },
        { label: "Platform", value: "Web app" },
        { label: "Features", value: "Calls, chat, AI matching" },
      ],
      overview:
        "Mentor Hub connects mentors and mentees around the world. It brings real-time video and voice calls, in-app messaging, smart AI matching, appointment scheduling and personalised dashboards together, and supports both free and paid mentorship programmes.",
      cover: img("MentorFirstPrototype"),
      frameBg: "bg-[#BCCFF3]",
      sections: [
        {
          title: "Users & Goals",
          body: "Mentorship only works when the right people find each other, so the product is built around matching and staying connected.",
          highlights: [
            {
              label: "Mentees",
              text: "Want guidance from experienced people in their field, but are often unsure who to reach out to or how.",
            },
            {
              label: "Mentors",
              text: "Want to share what they know, manage sessions easily and, for paid programmes, run mentorship sustainably.",
            },
            {
              label: "Matching",
              text: "Smart AI matching pairs mentees with relevant mentors, so nobody has to sift through endless profiles.",
            },
          ],
        },
        {
          title: "Landing & Onboarding",
          body: "The landing page speaks directly to both audiences with two clear paths, find a mentor or become one, and a welcoming sign-in flow.",
          images: [
            { src: img("mentor1"), alt: "Mentor Hub landing page", bg: "bg-[#262226]" },
            { src: img("mentor2"), alt: "Mentor Hub sign in screen", size: "half" },
            { src: img("mentor4"), alt: "Mentor Hub mentor profile", size: "half" },
          ],
        },
        {
          title: "Dashboards",
          body: "Personalised dashboards track mentorship progress, upcoming sessions and notifications at a glance, with a full list of mentors and their status.",
          images: [{ src: img("mentor3"), alt: "Mentor Hub dashboard" }],
        },
        {
          columns: [
            {
              title: "The Challenge",
              body: "Mentorship covers calls, messaging, scheduling and payments. Bringing all of that together without overwhelming first-time users was the core design problem.",
            },
            {
              title: "Design Strategy",
              body: "A confident blue palette signals trust, while progressive disclosure keeps each screen focused on one task. Real faces and friendly copy keep the platform human.",
            },
          ],
        },
      ],
    },
    listed: true,
  },
];
