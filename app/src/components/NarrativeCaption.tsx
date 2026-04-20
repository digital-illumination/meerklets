interface NarrativeCaptionProps {
  caption: string;
  subCaption?: string;
  sceneKey: string;
}

export function NarrativeCaption({
  caption,
  subCaption,
  sceneKey,
}: NarrativeCaptionProps) {
  return (
    <div
      key={sceneKey}
      className="pointer-events-none absolute inset-x-0 bottom-20 flex flex-col items-center gap-2 px-8 animate-[fadein_800ms_ease-out]"
    >
      <h1 className="max-w-3xl text-center text-3xl font-light tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">
        {caption}
      </h1>
      {subCaption && (
        <p className="text-center text-base uppercase tracking-[0.3em] text-ctm-yellow drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-lg">
          {subCaption}
        </p>
      )}
    </div>
  );
}
