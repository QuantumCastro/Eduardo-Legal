import { useStore } from "@nanostores/react";
import { languageStore } from "../stores/language";

export const useLanguage = () => useStore(languageStore);
