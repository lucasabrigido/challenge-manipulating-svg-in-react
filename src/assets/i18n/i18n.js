import i18n from "i18next";
import ptBR from "./pt.json";
import en from "./en.json";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        'pt': {
            translations: { ...ptBR },
        },
        'en': {
            translations: { ...en }
        }
    },
    fallbackLng: "pt",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,
    react: {
        wait: true
    }
});

export default i18n;
