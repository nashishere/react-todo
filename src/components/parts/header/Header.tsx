import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RoutePaths } from '../../../constants';
import { LanguageSelector } from '..';

import './Header.scss';

export default function Header(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className="todo-app-header">
      <Link className="todo-app-header-title" to={RoutePaths.LIST}>
        {t('header.title')}
      </Link>

      <LanguageSelector />
    </div>
  );
}
