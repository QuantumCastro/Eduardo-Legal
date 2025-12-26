import type { ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import { navSections, type NavIconKey } from "../../data/estrada-legal";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BriefcaseIcon, CloseIcon, MailIcon, MenuIcon, ScaleIcon, type IconProps } from "./icons";

const iconMap: Record<NavIconKey, ComponentType<IconProps>> = {
  scale: ScaleIcon,
  briefcase: BriefcaseIcon,
  mail: MailIcon,
};

export const Navbar = () => {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () =>
      navSections.map((link) => ({
        ...link,
        label: t.nav[link.key],
        Icon: iconMap[link.icon],
      })),
    [t],
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-950/80 py-0.5 backdrop-blur-md"
          : "bg-transparent py-2"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-left"
          title={t.nav.logoTitle}
          aria-label={t.nav.logoTitle}
        >
          <span className="flex h-8 w-8 rotate-45 items-center justify-center rounded-sm bg-amber-700 shadow-lg shadow-amber-900/0 transition-all duration-500 ease-out group-hover:rotate-[225deg] group-hover:scale-110 group-hover:shadow-amber-900/50">
            <span className="-rotate-45 font-display text-lg font-bold text-white transition-all duration-500 ease-out group-hover:-rotate-[225deg]">
              E
            </span>
          </span>
          <span className="font-display text-2xl tracking-wide text-slate-100 transition-colors duration-300 group-hover:text-amber-500">
            EDUARDO{" "}
            <span className="text-amber-700 transition-colors duration-300 group-hover:text-slate-100">
              LEGAL
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="group flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-300 transition-all duration-300 hover:bg-slate-800/50 hover:text-amber-500"
            >
              <link.Icon
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 text-amber-700 transition-all duration-300 group-hover:scale-110 group-hover:text-amber-500"
              />
              <span>{link.label}</span>
            </a>
          ))}
          <div className="ml-2 border-l border-slate-800 pl-4">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-slate-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full border-b border-slate-800 bg-slate-900 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="flex items-center gap-3 text-lg font-medium text-slate-300 transition-colors hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                <link.Icon size={24} className="text-amber-700" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};
