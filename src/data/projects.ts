import { img } from "./images";

export type GalleryItem = {
  src: string;
  /** Full Tailwind class(es) for the tile background; unused when `fill` is set */
  bg?: string;
  /** The image is a finished mockup with its own background: show it edge to edge, unframed */
  fill?: boolean;
  /** Layout of the tile: full width, or one half of a pair */
  size: "wide" | "half";
  /** Extra classes for the <img> */
  imgClass?: string;
  /** Screen recording (.mp4) that loops silently in the tile; `src` is its poster */
  video?: string;
};

export type CaseStudyImage = {
  /** The image, or the still shown before a `video` plays */
  src: string;
  alt: string;
  /** Full width, or one half of a side-by-side pair. Defaults to wide. */
  size?: "wide" | "half";
  /** Tailwind background for this frame; defaults to the case study's `frameBg` */
  bg?: string;
  /** The image is a finished mockup with its own background: show it edge to edge, unframed */
  fill?: boolean;
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
  /** Numbered list, e.g. the questions research set out to answer */
  list?: string[];
  /** Comparison table. Cells of "yes", "partial" or "no" render as symbols; anything else as text. */
  table?: { columns: string[]; rows: { label: string; values: string[] }[] };
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
  /** The cover is a finished mockup with its own background: show it edge to edge, unframed */
  coverFill?: boolean;
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
  /** The card image already has its own background, so show it edge to edge with no frame colour */
  cardFill?: boolean;
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
    cardImage: img("tiara-cover-card"),
    cardBg: "bg-[#E3CDB5]",
    cardHover: "hover:bg-[#E3CDB5]",
    cardFill: true,
    bannerImage: img("tiara-cover"),
    gallery: [
      { src: img("tiara-cover"), size: "wide", fill: true },
      { src: img("tiaraCombine1"), bg: "bg-[#262226]", size: "wide" },
      { src: img("tiaraShade"), bg: "bg-[#262226]", size: "half" },
      { src: img("tiaraFace"), bg: "bg-[#262226]", size: "half" },
      { src: img("tiaraCares"), bg: "bg-[#262226]", size: "wide" },
    ],
    listed: true,
  },
  {
    slug: "sweet-cheeks",
    title: "Sweet Cheeks",
    heading: "SweetCheeks",
    subtitle: "Dessert brand identity & website",
    tag: "Food & Bakery",
    category: "Branding",
    date: "2026-10",
    description:
      "SweetCheeks is a dessert brand serving handmade cakes, pastries and sweet drinks. I designed the website, where customers browse the menu, customise a treat, pre-order for a date and get in touch, and carried the identity into packaging, cups and stationery so every touchpoint feels as indulgent as the food: deep wine, soft blush and a playful script wordmark.",
    cardImage: img("sweetcheeks-cover-card"),
    cardBg: "bg-[#F8ACB0]",
    cardHover: "hover:bg-[#F8ACB0]",
    cardFill: true,
    bannerImage: img("sweetcheeks-cover"),
    gallery: [
      { src: img("sweetcheeks-cover"), size: "wide", fill: true },
      { src: img("sweetcheeks-pack-range"), size: "wide", fill: true },
      { src: img("sweetcheeks-pack-table"), size: "wide", fill: true },
      { src: img("sweetcheeks-screens-home"), size: "wide", fill: true },
      { src: img("sweetcheeks-flow-poster"), video: "/videos/sweetcheeks-flow.mp4", size: "wide", fill: true },
      { src: img("sweetcheeks-screens-menu"), size: "wide", fill: true },
      { src: img("sweetcheeks-screens-pre-order"), size: "wide", fill: true },
    ],
    listed: true,
  },
  {
    slug: "wemora",
    title: "Wemora",
    heading: "Wemora",
    subtitle: "Fashion e-commerce app",
    tag: "Fashion",
    category: "UI/UX Design",
    date: "2026-10",
    description:
      "Wemora is a fashion e-commerce app for discovering clothes, saving favourites and checking out with Mastercard, Visa or PayPal. I designed the full mobile journey, from an editorial splash and onboarding to browsing new arrivals, rich product pages, the cart and payment, in a clean monochrome interface that lets the fashion photography lead.",
    cardImage: img("wemora-hero"),
    cardBg: "bg-[#CDDAE2]",
    cardHover: "hover:bg-[#CDDAE2]",
    cardFill: true,
    bannerImage: img("wemora-hero"),
    gallery: [
      { src: img("wemora-hero"), size: "wide", fill: true },
      { src: img("wemora-flow-poster"), video: "/videos/wemora-flow.mp4", size: "wide", fill: true },
      { src: img("wemora-onboarding"), size: "wide", fill: true },
      { src: img("wemora-screens"), size: "wide", fill: true },
    ],
    listed: true,
  },
  {
    slug: "nomnom",
    title: "NomNom",
    heading: "NomNom",
    subtitle: "Food ordering app",
    tag: "Food & Delivery",
    category: "UI/UX Design",
    date: "2026-10",
    description:
      "NomNom is a modern food ordering app for discovering meals nearby, customising an order and tracking it to the door. I designed the full mobile flow, from a slide-to-explore welcome to browsing, a rich dish page, a one-swipe checkout and live courier tracking, in a bold dark interface lit by NomNom orange.",
    cardImage: img("nomnom-hero"),
    cardBg: "bg-[#FFC86B]",
    cardHover: "hover:bg-[#FFC86B]",
    cardFill: true,
    bannerImage: img("nomnom-hero"),
    gallery: [
      { src: img("nomnom-hero"), size: "wide", fill: true },
      { src: img("nomnom-flow-poster"), video: "/videos/nomnom-flow.mp4", size: "wide", fill: true },
      { src: img("nomnom-screens"), size: "wide", fill: true },
      { src: img("nomnom-type-colour"), size: "wide", fill: true },
      { src: img("nomnom-app-icon"), size: "wide", fill: true },
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
    cardImage: img("echofarms-card"),
    cardBg: "bg-[#0D2A1B]",
    cardHover: "hover:bg-[#1B4630]",
    cardFill: true,
    bannerImage: img("echofarms-responsive"),
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
      cover: img("echofarms-responsive"),
      coverFill: true,
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
            { src: img("echofarms-hero-laptop"), alt: "EchoFarms homepage hero with product and location search", fill: true },
            { src: img("echofarms-full-page-overview"), alt: "Full EchoFarms homepage on desktop and mobile", fill: true },
          ],
        },
        {
          title: "Vendor Dashboard",
          body: "The vendor dashboard puts the essentials first: a snapshot of ad performance, what is trending in the marketplace, and a clear table for creating and managing ads.",
          images: [
            { src: img("echofarms-dashboard-overview"), alt: "EchoFarms vendor dashboard overview", fill: true },
            { src: img("echofarms-dashboard-manage-ads"), alt: "EchoFarms manage ads screen", fill: true },
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
          images: [
            { src: img("echofarms-mobile-trio"), alt: "EchoFarms listings, hero and vendor sections on three phones", size: "half", fill: true },
            { src: img("echofarms-mobile-screens"), alt: "EchoFarms mobile screens from hero to footer", size: "half", fill: true },
          ],
        },
      ],
    },
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
      frameBg: "bg-[#262326]",
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
    listed: true,
  },
  {
    slug: "mentor-hub",
    title: "Mentor Hub",
    heading: "Mentor Hub",
    subtitle: "AI-matched mentorship platform",
    tag: "Education",
    category: "UI/UX Design",
    date: "2025-03",
    description:
      "Mentor Hub is a web-based mentorship platform that connects mentors and mentees globally. The app features real-time video and voice calls, in-app messaging, smart AI matching, appointment scheduling, personalized dashboards, and support for both free and paid mentorship programs.",
    cardImage: img("mentorhub-landing-dashboard"),
    cardBg: "bg-[#BCCFF3]",
    cardHover: "",
    cardFill: true,
    bannerImage: img("mentorhub-landing-dashboard"),
    caseStudy: {
      tagline: "A mentorship platform that matches mentees with the right mentor in minutes, then keeps the whole relationship in one place.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "Education & Careers" },
        { label: "Platform", value: "Web app" },
        { label: "Features", value: "AI matching, calls, scheduling" },
      ],
      overview:
        "Mentor Hub connects mentors and mentees around the world. Mentees answer six quick questions and get AI-matched with mentors who fit their field, goals, language and time zone. From there, video and voice calls, in-app messaging, scheduling, shared resources and progress tracking all live in one place, for both free and paid mentorship programmes.",
      cover: img("mentorhub-landing-dashboard"),
      coverBg: "bg-transparent",
      frameBg: "bg-transparent",
      sections: [
        {
          title: "Problem Statement",
          body: "Early-career professionals, students and career switchers know a mentor would help, but finding one is slow and uncertain. They browse long directories, send cold messages that go unanswered, and struggle to judge who is actually a good fit. When a match does happen, the relationship is scattered across email, calendar links, video tools and shared drives, so momentum fades. Mentors face the mirror image: unclear requests, scheduling back-and-forth across time zones, and no simple way to run or get paid for a programme.",
        },
        {
          title: "What We're Solving",
          body: "Mentor Hub set out to make mentorship easy to start and easy to keep going, for both sides.",
          list: [
            "Match mentees with a relevant mentor in minutes, instead of weeks of browsing and cold messaging.",
            "Make fit visible: field, goals, language and availability, with the reasons behind every match.",
            "Keep calls, chat, scheduling and resources in one place, so no relationship depends on five separate tools.",
            "Work across time zones and languages from the very first step, for genuinely global mentorship.",
            "Support free and paid programmes, giving mentors simple tools to manage mentees, sessions and payments.",
            "Show progress on goals, so mentees and mentors can see that the time together is paying off.",
          ],
        },
        {
          title: "Users & Goals",
          body: "Mentorship only works when the right people find each other, so the product is built around matching and staying connected.",
          highlights: [
            {
              label: "Mentees",
              text: "Students, junior professionals, career switchers and freelancers who want guidance from someone a few steps ahead, without the awkwardness of cold outreach.",
            },
            {
              label: "Mentors",
              text: "Experienced professionals who want to share what they know, manage sessions easily and, for paid programmes, run mentorship sustainably.",
            },
            {
              label: "Matching",
              text: "Smart AI matching pairs mentees with relevant mentors, so nobody has to sift through endless profiles to find a fit.",
            },
          ],
        },
        {
          title: "Research",
          body: "I spoke to both sides of the relationship before designing anything. My research focused on these questions:",
          list: [
            "How do mentees find mentors today, and where does that search break down?",
            "What makes a mentee trust that a mentor is the right fit before the first session?",
            "Which details matter most for a good match: field, goals, seniority, language, or time zone?",
            "How do mentors decide who to say yes to, and how much admin are they willing to take on?",
            "Which tools do mentors and mentees juggle today for calls, chat, scheduling and files?",
            "Why do mentorships stall after the first few sessions?",
            "What would make paying for mentorship feel worthwhile to mentees, and fair to mentors?",
            "How do time zones and language affect who people feel comfortable being mentored by?",
          ],
        },
        {
          title: "What Existing Options Miss",
          body: "I reviewed the ways people find and run mentorship today. Each solves part of the problem, but none brings guided matching and the whole relationship together in one product.",
          table: {
            columns: ["Mentor Hub", "Mentor directories", "Paid marketplaces", "Professional networks", "DIY tool stack"],
            rows: [
              { label: "Guided onboarding & matching", values: ["yes", "no", "partial", "no", "no"] },
              { label: "Language & time zone aware", values: ["yes", "partial", "partial", "no", "no"] },
              { label: "Video & voice calls built in", values: ["yes", "partial", "partial", "no", "partial"] },
              { label: "In-app messaging", values: ["yes", "partial", "yes", "yes", "partial"] },
              { label: "Scheduling & calendar", values: ["yes", "partial", "yes", "no", "yes"] },
              { label: "Shared resources", values: ["yes", "no", "partial", "no", "partial"] },
              { label: "Goals & progress tracking", values: ["yes", "no", "partial", "no", "no"] },
              { label: "Free and paid programmes", values: ["yes", "partial", "partial", "no", "partial"] },
              { label: "Mentor analytics & payments", values: ["yes", "no", "partial", "no", "no"] },
            ],
          },
        },
        {
          title: "Information Architecture",
          body: "A public site that turns visitors into mentees or mentors, and two connected spaces built around each side's jobs, all sitting on shared matching, scheduling, calling and payment systems.",
          images: [{ src: img("mentorhub-ia"), alt: "Mentor Hub information architecture", bg: "bg-[#FAFAF7]" }],
        },
        {
          title: "Low-Fidelity Wireframes",
          body: "I explored the onboarding, the mentor dashboard and scheduling in low fidelity first, to agree on hierarchy and flow before visual design. The annotations capture the decision behind each block.",
          images: [
            { src: img("mentorhub-wireframe-onboarding"), alt: "Annotated wireframes of mentee onboarding and matching", bg: "bg-[#FAFAF7]" },
            { src: img("mentorhub-wireframe-dashboard"), alt: "Annotated wireframe of the mentor dashboard", bg: "bg-[#FAFAF7]" },
            { src: img("mentorhub-wireframe-appointments"), alt: "Annotated wireframe of appointments, meetings and resources", bg: "bg-[#FAFAF7]" },
          ],
        },
        {
          title: "Mentee Onboarding",
          body: "Six questions, one per screen: career level, field, goals, language, time zone and availability, and session type. Each step is quick to answer with chips and pickers, and can be skipped. The walkthrough below plays through the whole flow.",
          images: [
            { src: img("mentorhub-onboarding-poster"), alt: "Walkthrough of the Mentor Hub mentee onboarding", video: "/videos/mentorhub-onboarding.mp4" },
            { src: img("mentorhub-onboarding-career"), alt: "Career level step", size: "half" },
            { src: img("mentorhub-onboarding-field"), alt: "Field of interest step", size: "half" },
            { src: img("mentorhub-onboarding-goals"), alt: "Goals step", size: "half" },
            { src: img("mentorhub-onboarding-language"), alt: "Preferred language step", size: "half" },
            { src: img("mentorhub-onboarding-availability"), alt: "Time zone and availability step", size: "half" },
            { src: img("mentorhub-onboarding-sessions"), alt: "Session type step", size: "half" },
          ],
        },
        {
          title: "Landing Page & Mentor Dashboard",
          body: "The landing page speaks to both audiences with two clear paths, find a mentor or become one. Inside, the mentor dashboard brings mentees, revenue, programme health, reviews, today's schedule and notifications onto one screen.",
          images: [{ src: img("mentorhub-landing-dashboard"), alt: "Mentor Hub landing page and mentor dashboard" }],
        },
        {
          title: "Resources, Appointments & Meetings",
          body: "Mentors share guides, recordings and documents with visibility controls, and manage every session from an agenda beside a full calendar, with meeting links attached.",
          images: [{ src: img("mentorhub-resources-appointments"), alt: "Mentor Hub resources and appointments screens" }],
        },
        {
          columns: [
            {
              title: "The Challenge",
              body: "Mentorship covers matching, calls, messaging, scheduling and payments. Bringing all of that together without overwhelming first-time mentees, or burying mentors in admin, was the core design problem.",
            },
            {
              title: "Design Strategy",
              body: "Lead with a short, skippable onboarding that powers explainable AI matches, then keep the relationship in one place. A confident blue palette signals trust, progressive disclosure keeps each screen focused on one job, and real faces keep the platform human.",
            },
          ],
        },
      ],
    },
    listed: true,
  },
];
