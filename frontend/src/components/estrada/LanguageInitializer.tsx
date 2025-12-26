import { useEffect } from "react";
import { getInitialLanguage, setLanguage } from "../../stores/language";

export const LanguageInitializer = () => {
  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
  }, []);

  return null;
};
