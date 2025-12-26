import { siteConfig } from "../../data/estrada-legal";
import { useTranslation } from "../../hooks/useTranslation";

export const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-0.5 text-xs text-slate-400">
      <div className="mx-auto flex min-h-[40px] max-w-7xl flex-col items-center justify-between gap-2 px-6 md:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <span className="font-display text-lg tracking-wide text-slate-100">
            ESTRADA <span className="text-amber-700">LEGAL</span>
          </span>
          <p className="sr-only">{t.footer.desc}</p>
          <div className="hidden h-3 w-px bg-slate-800 md:block" />
          <p className="opacity-75">© 2026 eduardo Legal. {t.footer.rights}</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4 font-medium opacity-75" aria-label={t.footer.legal}>
            <a href="#" className="transition-colors hover:text-amber-600">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-amber-600">
              {t.footer.terms}
            </a>
          </nav>

          <div className="hidden h-3 w-px bg-slate-800 md:block" />

          <div className="flex gap-2" aria-label={t.footer.socialLabel}>
            <a
              href={siteConfig.socialLinks.linkedIn}
              aria-label={t.footer.socialLinkedInLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-slate-800 bg-slate-900 text-[10px] transition-colors hover:bg-amber-700 hover:text-white"
            >
              in
            </a>
            <a
              href={siteConfig.socialLinks.x}
              aria-label={t.footer.socialXLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-slate-800 bg-slate-900 text-[10px] transition-colors hover:bg-amber-700 hover:text-white"
            >
              x
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
