/* @flow */

import {i18n} from "./index";

export default function toggleLanguage() {
  const activeLanguages = ["en", "nl", "de"];
  const currentLanguageIndex = activeLanguages.findIndex(language => i18n.language === language);
  const nextLanguageIndex = (currentLanguageIndex + 1) % activeLanguages.length;

  return i18n.changeLanguage(activeLanguages[nextLanguageIndex]);
}
