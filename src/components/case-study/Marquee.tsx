const PHRASE = "Crafting solutions that endure for ages";

/** Pink band with a slowly scrolling phrase. The list is rendered twice so the loop is seamless. */
export function Marquee() {
  const items = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#262226] py-3 text-white md:py-4" aria-label={PHRASE}>
      <div className="marquee flex w-max" aria-hidden>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-6 px-6 font-sans text-sm font-semibold whitespace-nowrap uppercase md:text-base">
                {PHRASE}
                <span className="text-lg text-[#FF99FF]">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
