import { useEffect, useRef, useState } from "react";
import { languageOptions, languagePaths, type Language } from "../../data/estrada-legal";
import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "../../hooks/useTranslation";
import { setLanguage } from "../../stores/language";
import { CheckIcon, ChevronDownIcon, GlobeIcon } from "./icons";

export const LanguageSwitcher = () => {
  const language = useLanguage();
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!dropdownRef.current) {
        return;
      }

      if (!dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const handleLanguageChange = (next: Language) => {
    setLanguage(next);
    setIsOpen(false);

    if (typeof window === "undefined") {
      return;
    }

    const targetPath = languagePaths[next];
    const currentPath = window.location.pathname;
    if (currentPath !== targetPath) {
      window.location.assign(`${targetPath}${window.location.search}${window.location.hash}`);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-amber-500"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.nav.languageLabel}
      >
        <GlobeIcon size={18} />
        <span>{language.toUpperCase()}</span>
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 origin-top-right overflow-hidden rounded-sm border border-slate-800 bg-slate-900 shadow-xl transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
        role="listbox"
        aria-hidden={!isOpen}
      >
        <div className="py-1">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                handleLanguageChange(option.code);
              }}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-slate-800 ${
                language === option.code
                  ? "bg-slate-800/50 font-semibold text-amber-500"
                  : "text-slate-300"
              }`}
              role="option"
              aria-selected={language === option.code}
            >
              {option.label}
              {language === option.code ? <CheckIcon size={14} /> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
