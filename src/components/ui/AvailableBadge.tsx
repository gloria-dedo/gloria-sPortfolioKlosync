export function AvailableBadge({ textClass = "text-sm md:text-base" }: { textClass?: string }) {
  return (
    <h4 className="flex items-center">
      <span className="mr-2 inline-block h-[10px] w-[10px] rounded-full bg-[#FF99FF] align-middle" />
      <span className={`text-white ${textClass}`}>Available for work</span>
    </h4>
  );
}
