import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageSelector.scss';

const LanguageSelector = (): React.ReactElement => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChangeLanguage = (event: React.SyntheticEvent<HTMLSelectElement>) => {
    const nextLanguage = event.currentTarget.options[event.currentTarget.selectedIndex].value;
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <select className="todo-app-language-selector" value={currentLanguage} onChange={handleChangeLanguage}>
      <option className="todo-app-language-selector-option" value="en">
        {t('long_name', { lng: 'en' })}
      </option>
      <option className="todo-app-language-selector-option" value="de">
        {t('long_name', { lng: 'de' })}
      </option>
      <option className="todo-app-language-selector-option" value="nl">
        {t('long_name', { lng: 'nl' })}
      </option>
    </select>
  );
};

export default LanguageSelector;
