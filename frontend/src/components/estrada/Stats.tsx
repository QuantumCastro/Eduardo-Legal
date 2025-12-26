import { useTranslation } from "../../hooks/useTranslation";
import { FadeIn } from "./FadeIn";
import { AwardIcon, ScaleIcon, ShieldCheckIcon, UsersIcon } from "./icons";

const stats = [
  { number: "15+", labelKey: "exp", Icon: AwardIcon },
  { number: "400+", labelKey: "cases", Icon: ScaleIcon },
  { number: "98%", labelKey: "retention", Icon: UsersIcon },
  { number: "$50M+", labelKey: "value", Icon: ShieldCheckIcon },
] as const;

export const Stats = () => {
  const t = useTranslation();

  return (
    <section className="border-y border-slate-800 bg-slate-900 py-20" aria-labelledby="stats-title">
      <h2 id="stats-title" className="sr-only">
        {t.stats.sectionTitle}
      </h2>
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn key={stat.labelKey} delayMs={index * 100} direction="up">
            <div className="group text-center">
              <div className="mb-4 flex justify-center text-slate-600 transition-colors group-hover:text-amber-600">
                <stat.Icon size={32} />
              </div>
              <dt className="text-xs uppercase tracking-widest text-slate-400">
                {t.stats[stat.labelKey]}
              </dt>
              <dd className="mb-2 font-display text-4xl font-bold text-white">{stat.number}</dd>
            </div>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
};
