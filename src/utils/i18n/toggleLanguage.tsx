import { i18n } from './index';

export default function toggleLanguage(): void {
  const activeLanguages: string[] = ['en', 'nl', 'de'];
  const currentLanguageIndex = activeLanguages.findIndex((language: string): boolean => i18n.language === language);
  const nextLanguageIndex = (currentLanguageIndex + 1) % activeLanguages.length;

  i18n.changeLanguage(activeLanguages[nextLanguageIndex]);
}
