import { orbitIcons } from "@/data/expertise";

function TechOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-[240px] sm:w-[300px] lg:w-[360px]">
      <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-white/15" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Laptop-Porfolio.svg"
        alt=""
        className="absolute top-1/2 left-1/2 z-10 w-[45%] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="spin-slow absolute inset-0">
        {orbitIcons.map(({ src, alt, position }) => (
          <span
            key={alt}
            className={`absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#262226] ring-1 ring-white/15 sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${position}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="spin-slow-reverse h-1/2 w-1/2 object-contain" />
          </span>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {orbitIcons.map(({ src, name }) => (
        <li
          key={name}
          className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/10 transition-colors hover:ring-white/30"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-5 w-5 shrink-0 object-contain" />
          <span className="truncate font-sans text-sm font-medium text-white/85">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceCards() {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 font-sans sm:gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-4 rounded-xl border border-[#A69CA6] bg-[#544D54] p-4 text-white shadow-md sm:flex-row sm:gap-6 sm:p-6 lg:max-w-sm lg:flex-col xl:flex-row">
        <div className="flex flex-col justify-between">
          <h1 className="mb-3 text-sm leading-tight font-semibold sm:mb-0 sm:text-base md:text-lg">
            Custom Site
            <br />
            Design +
            <br />
            Dashboard build
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dashboardportfolio.svg" alt="dashboard" className="mt-2 w-16 sm:mt-4 sm:w-20 md:w-24" />
        </div>
        <div className="flex-1 space-y-3 text-xs text-[#CCC4CC]">
          <p>
            I craft unique, client-focused website designs and powerful dashboards that are tailored to your brand,
            ensuring a seamless user experience.
          </p>
          <p>
            From concept to launch, I deliver responsive, intuitive interfaces and admin tools that help you manage your
            site with ease and confidence.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 rounded-xl border border-[#A69CA6] bg-[#544D54] p-4 text-white sm:gap-6 sm:p-6 lg:max-w-xs">
        <h1 className="text-base leading-loose font-semibold sm:text-lg">Figma-to-Code</h1>
        <p className="text-xs text-[#CCC4CC]">
          I convert your Figma designs into clean, responsive code with pixel-perfect accuracy, bringing your vision to
          life exactly as planned.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-20 self-center sm:w-24 sm:self-start md:w-28" src="/images/figmaToCodeIcon.svg" alt="figma to code" />
      </div>
    </div>
  );
}

export function WebDevPanel() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] font-bold tracking-tight text-white">
            Fast, responsive interfaces that feel as good as they look.
          </h3>
          <p className="max-w-xl font-sans text-base leading-relaxed font-light text-white/75 md:text-lg">
            I build websites and products with modern technologies, so your site performs beautifully on every device.
          </p>
          <TechStack />
        </div>
        <TechOrbit />
      </div>
      <ServiceCards />
    </div>
  );
}
