import { uiItems } from "@/data/expertise";

export function UiSkillGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3 sm:gap-4 sm:px-4 md:grid-cols-4">
      {uiItems.map(({ icon, title }) => (
        <div
          key={title}
          className="group flex min-h-[100px] cursor-pointer flex-col items-start justify-between rounded-3xl border border-pink-300 bg-transparent p-8 transition delay-150 duration-300 ease-in-out from-purple-500 to-pink-400 hover:-translate-y-1 hover:bg-linear-65 md:min-h-[200px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" className="mb-6 h-8 w-8 group-hover:brightness-200 group-hover:invert md:h-10 md:w-10" />
          <h3 className="text-xs font-medium text-white md:text-lg">{title}</h3>
        </div>
      ))}
    </div>
  );
}
