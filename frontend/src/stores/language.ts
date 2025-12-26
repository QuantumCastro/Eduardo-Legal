import { atom, computed } from "nanostores";
import { translations, type Language } from "../data/estrada-legal";

const STORAGE_KEY = "estrada-language";

export const languageStore = atom<Language>("es");

export const translationStore = computed(languageStore, (language) => translations[language]);

export const isLanguage = (value: string): value is Language => value === "es" || value === "en";

export const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "es";
  }

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang && isLanguage(urlLang)) {
    return urlLang;
  }

  const documentLang = document.documentElement.lang;
  if (documentLang && isLanguage(documentLang)) {
    return documentLang;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLanguage(stored)) {
    return stored;
  }

  const browserLang = window.navigator.language?.toLowerCase() ?? "";
  return browserLang.startsWith("en") ? "en" : "es";
};

export const setLanguage = (next: Language) => {
  languageStore.set(next);
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, next);
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
  }
};
