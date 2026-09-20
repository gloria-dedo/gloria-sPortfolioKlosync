import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { spotifyEmbeds } from "@/data/about";

function SpotifyEmbed({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height="352"
      style={{ borderRadius: 12 }}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

export function ListeningSection() {
  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 py-16 font-jost md:px-12">
        <SectionPill widthClass="md:w-[500px]">HERE IS WHAT I AM LISTENTING TO</SectionPill>
        <p className="text-sm font-light text-white md:text-lg">
          From focus-boosting soundtracks to inspiring
          <br />
          podcasts, here&apos;s what keeps me energized
          <br /> and creatively tuned while designing and coding.
        </p>
        <div className="flex flex-col gap-8 md:flex-row">
          {spotifyEmbeds.tracks.map((src, i) => (
            <SpotifyEmbed key={src} src={src} title={`Spotify track ${i + 1}`} />
          ))}
        </div>
        <SpotifyEmbed src={spotifyEmbeds.playlist} title="Spotify playlist" />
      </div>
    </SectionShell>
  );
}
