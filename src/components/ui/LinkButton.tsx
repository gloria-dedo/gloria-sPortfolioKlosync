import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type LinkButtonProps = {
  href: string;
  children: string;
  direction?: "left" | "right";
  size?: "md" | "lg";
  className?: string;
};

const SIZES = {
  md: "px-4 py-3",
  lg: "justify-center px-5 py-4",
};

export function LinkButton({
  href,
  children,
  direction = "right",
  size = "md",
  className = "",
}: LinkButtonProps) {
  const Arrow = direction === "left" ? FaArrowLeftLong : FaArrowRightLong;
  // Sized to its content, so it never stretches to fill a column layout on small screens
  const classes = `spread-bg group relative inline-flex w-fit max-w-full shrink-0 items-center overflow-hidden rounded-full whitespace-nowrap bg-[#262226] font-sans text-white transition-colors duration-500 hover:bg-[#FF99FF] hover:text-[#262226] ${SIZES[size]} ${className}`;

  const content = (
    <>
      <div className="relative mr-2 flex h-[15px] w-[20px] items-center justify-center">
        <Arrow className="absolute z-10 opacity-0 transition-all delay-100 duration-300 group-hover:opacity-100" />
        <span className="h-[20px] w-[20px] rounded-full bg-[#FF99FF] transition-all duration-300 group-hover:scale-75 group-hover:opacity-0" />
      </div>
      <span className="relative z-10 text-xs uppercase md:text-sm">{children}</span>
    </>
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {content}
    </a>
  );
}
