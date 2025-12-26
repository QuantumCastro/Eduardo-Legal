import { useStore } from "@nanostores/react";
import { translationStore } from "../stores/language";

export const useTranslation = () => useStore(translationStore);
