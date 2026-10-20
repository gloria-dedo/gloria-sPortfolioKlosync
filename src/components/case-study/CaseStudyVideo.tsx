"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaXmark } from "react-icons/fa6";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { CaseStudyImage } from "@/data/projects";

type VideoProps = { media: CaseStudyImage & { video: string }; className: string };

/** A short interaction that loops silently in its frame like a living screenshot, playing only while on screen. */
function InlineVideo({ media, className }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        src={media.video}
        poster={media.src}
        aria-label={media.alt}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={className}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause interaction" : "Play interaction"}
        className="absolute right-3 bottom-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#262226]/80 text-xs text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white hover:text-[#262226]"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}

/** A longer walkthrough: a still with a "View flow" button that opens the recording with full controls. */
function FlowVideo({ media, className }: VideoProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => {});
  };
  const close = () => dialogRef.current?.close();

  return (
    <div className="relative h-full w-full">
      <SkeletonImage src={media.src} alt={media.alt} wrapperClassName="h-full w-full" className={className} />
      <button
        type="button"
        onClick={open}
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[#262226]/30 transition-colors hover:bg-[#262226]/50"
      >
        <span className="flex items-center gap-3 rounded-full bg-[#262226] py-3 pr-5 pl-3 font-sans text-sm font-medium text-white uppercase shadow-lg ring-1 ring-white/15">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] text-[#262226]">
            <FaPlay />
          </span>
          View flow
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => videoRef.current?.pause()}
        onClick={(event) => event.target === dialogRef.current && close()}
        className="m-auto w-[min(92vw,1100px)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close flow"
          className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black hover:bg-gray-200"
        >
          <FaXmark />
        </button>
        <video
          ref={videoRef}
          src={media.video}
          poster={media.src}
          aria-label={media.alt}
          controls
          playsInline
          preload="none"
          className="max-h-[85svh] w-full rounded-2xl bg-black"
        />
      </dialog>
    </div>
  );
}

export function CaseStudyVideo(props: VideoProps) {
  return props.media.flow ? <FlowVideo {...props} /> : <InlineVideo {...props} />;
}
