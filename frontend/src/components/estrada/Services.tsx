import { useTranslation } from "../../hooks/useTranslation";
import { FadeIn } from "./FadeIn";
import { ArrowRightIcon, BriefcaseIcon, GlobeIcon, ScaleIcon, ShieldCheckIcon } from "./icons";

const serviceIcons = [ScaleIcon, ShieldCheckIcon, BriefcaseIcon, GlobeIcon];

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  const t = useTranslation();
  const Icon = serviceIcons[index] ?? ScaleIcon;

  return (
    <FadeIn delayMs={index * 100} direction="up">
      <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:bg-slate-800/80">
        <div className="absolute left-0 top-0 h-0 w-1 bg-amber-600 transition-all duration-300 ease-in-out group-hover:h-full" />

        <div className="mb-6 text-amber-600 transition-colors group-hover:text-amber-400">
          <Icon size={40} strokeWidth={1.5} />
        </div>

        <h3 className="mb-4 font-display text-2xl text-slate-100">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
          {description}
        </p>

        <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-wider text-amber-700 transition-transform group-hover:translate-x-2">
          {t.services.details}
          <ArrowRightIcon size={14} className="ml-2" />
        </div>
      </article>
    </FadeIn>
  );
};

export const Services = () => {
  const t = useTranslation();

  return (
    <section id="services" className="relative bg-slate-950 py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end gap-6 md:flex-row md:justify-between">
          <FadeIn>
            <h2 id="services-title" className="font-display text-4xl text-slate-100 md:text-5xl">
              {t.services.title}{" "}
              <span className="italic text-amber-700">{t.services.titleAccent}</span>
            </h2>
          </FadeIn>
          <FadeIn delayMs={200}>
            <p className="max-w-md border-l-2 border-slate-800 pl-4 text-left text-slate-400 md:border-l-0 md:border-r-2 md:pl-0 md:pr-4 md:text-right">
              {t.services.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.services.cards.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
