import { i18n } from './index';

const toggleLanguage = (): void => {
  const activeLanguages = ['en', 'nl', 'de'];
  const currentLanguageIndex = activeLanguages.findIndex((language: string): boolean => i18n.language === language);
  const nextLanguageIndex = (currentLanguageIndex + 1) % activeLanguages.length;

  i18n.changeLanguage(activeLanguages[nextLanguageIndex]);
};

export default toggleLanguage;
