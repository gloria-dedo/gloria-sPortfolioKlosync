import { orbitIcons } from "@/data/expertise";

const ORBIT_ICON_SIZE = "w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px] xl:w-[40px]";

function TechOrbit() {
  return (
    <div className="relative mx-auto h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Laptop-Porfolio.svg"
        alt="laptop"
        className="absolute top-1/2 left-1/2 z-10 w-[80px] -translate-x-1/2 -translate-y-1/2 sm:w-[100px] md:w-[120px] lg:w-[180px] xl:w-[250px]"
      />
      <div className="spin-slow absolute top-0 left-0 h-full w-full">
        {orbitIcons.map(({ src, alt, position }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={alt} src={src} alt={alt} className={`absolute ${ORBIT_ICON_SIZE} ${position}`} />
        ))}
      </div>
    </div>
  );
}

function ServiceCards() {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 font-jost sm:gap-6 lg:flex-row">
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
    <div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6 lg:w-1/2 lg:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/techStack.svg" alt="" className="w-[150px] sm:w-[180px] md:w-[200px]" />
          <h1 className="px-2 text-center font-jost text-xs uppercase sm:text-sm lg:text-left">
            I build fast, responsive websites using modern technologies ensuring your site performs beautifully on every
            device.
          </h1>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <TechOrbit />
        </div>
      </div>
      <ServiceCards />
    </div>
  );
}
