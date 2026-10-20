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
      <SectionPill>Here is what I am listening to</SectionPill>
      <p className="max-w-2xl text-base leading-relaxed font-light md:text-lg">
        From focus-boosting soundtracks to inspiring podcasts, here&apos;s what keeps me energized and creatively tuned
        while designing and coding.
      </p>
      <div className="flex flex-col gap-6 md:flex-row">
          {spotifyEmbeds.tracks.map((src, i) => (
            <SpotifyEmbed key={src} src={src} title={`Spotify track ${i + 1}`} />
          ))}
      </div>
      <SpotifyEmbed src={spotifyEmbeds.playlist} title="Spotify playlist" />
    </SectionShell>
  );
}
