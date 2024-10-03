import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "translations/locales/pl.json";

const resources = {
  pl: { translation: pl },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  fallbackLng: "pl",
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default { i18n };
