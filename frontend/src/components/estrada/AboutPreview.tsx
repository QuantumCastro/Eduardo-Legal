import { mediaAssets } from "../../data/estrada-legal";
import { useTranslation } from "../../hooks/useTranslation";
import { FadeIn } from "./FadeIn";

export const AboutPreview = () => {
  const t = useTranslation();

  return (
    <section id="about" className="bg-slate-950 py-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-800 grayscale transition-all duration-700 hover:grayscale-0">
                <img
                  src={mediaAssets.aboutPortrait.src}
                  alt={t.about.imageAlt}
                  width={mediaAssets.aboutPortrait.width}
                  height={mediaAssets.aboutPortrait.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden w-64 bg-amber-800 p-6 text-white shadow-2xl md:block">
                <p className="font-display text-lg italic">&ldquo;{t.about.quote}&rdquo;</p>
                <p className="mt-2 text-xs opacity-75">&mdash; {t.about.quoteAuthor}</p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delayMs={200}>
              <h2 id="about-title" className="font-display text-4xl text-slate-100">
                {t.about.titleStart}
                <br />
                {t.about.titleEnd} <span className="text-amber-700">{t.about.titleAccent}</span>.
              </h2>
            </FadeIn>

            <FadeIn delayMs={300}>
              <p className="text-lg leading-relaxed text-slate-400">{t.about.description}</p>
            </FadeIn>

            <FadeIn delayMs={400}>
              <ul className="space-y-4">
                {t.about.points.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delayMs={500}>
              <button
                type="button"
                className="border-b border-amber-600 pb-1 font-semibold text-amber-600 transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                {t.about.link}
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
