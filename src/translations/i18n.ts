import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./resources/en.json";
import ptBr from "./resources/pt-br.json";

const resources = {
  en,
  ptBr,
};

export const availableLanguages = Object.keys(resources);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS: "common",
    fallbackLng: "en",

    debug: false,
    keySeparator: ".",
    ns: ["translation"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: { useSuspense: false },
    compatibilityJSON: "v3",
  });

const t = i18n.t.bind(i18n);
export { t };

export default i18n;
