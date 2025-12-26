import { useTranslation } from "../../hooks/useTranslation";
import { FadeIn } from "./FadeIn";
import { ArrowRightIcon, ChevronDownIcon } from "./icons";
import { mediaAssets } from "../../data/estrada-legal";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-32"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-slate-800 to-transparent blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-900/40 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 text-center md:grid-cols-2 md:text-left">
        <div className="space-y-8">
          <FadeIn direction="up">
            <div className="mb-4 inline-block rounded-full border border-amber-800/50 bg-amber-900/10 px-3 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                {t.hero.badge}
              </span>
            </div>
            <h1
              id="hero-title"
              className="font-display text-5xl leading-tight text-slate-100 md:text-7xl"
            >
              {t.hero.titleStart}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
                {t.hero.titleEnd}
              </span>
              .
            </h1>
          </FadeIn>

          <FadeIn delayMs={200} direction="up">
            <p className="max-w-lg text-lg leading-relaxed text-slate-400">{t.hero.subtitle}</p>
          </FadeIn>

          <FadeIn delayMs={400} direction="up">
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-amber-700 px-8 py-4 font-semibold text-white shadow-lg shadow-amber-900/20 transition-all hover:bg-amber-600"
              >
                {t.hero.ctaPrimary}
                <ArrowRightIcon
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="flex items-center justify-center border border-slate-700 px-8 py-4 font-semibold text-slate-300 transition-all hover:border-amber-700 hover:text-amber-500"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delayMs={300} direction="left">
          <div className="relative hidden h-[600px] w-full md:block">
            <div className="absolute inset-0 rotate-3 rounded-sm border border-slate-700 bg-gradient-to-tr from-slate-800 to-slate-900 opacity-50" />
            <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-sm border border-slate-700 bg-slate-900 shadow-2xl">
              <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden p-12">
                <img
                  src={mediaAssets.heroBackground.src}
                  alt={t.hero.imageAlt}
                  width={mediaAssets.heroBackground.width}
                  height={mediaAssets.heroBackground.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="relative z-10 border-l-2 border-amber-600 pl-6">
                  <h3 className="font-display text-xl italic text-white">
                    &ldquo;{t.hero.quote}&rdquo;
                  </h3>
                </div>
                <div className="relative z-10 self-end">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-500 motion-safe:animate-pulse">
                    <ChevronDownIcon className="text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-slate-500 motion-safe:animate-bounce md:block">
        <ChevronDownIcon size={24} />
      </div>
    </section>
  );
};
