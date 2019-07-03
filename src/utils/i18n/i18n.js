/* @flow */

import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./translations/en.json";
import de from "./translations/de.json";
import nl from "./translations/nl.json";

import "moment/locale/en-gb";
import "moment/locale/nl";

i18n.use(initReactI18next).init({
  resources: {en, nl, de},

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;