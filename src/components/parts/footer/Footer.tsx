import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.scss';

export default function Footer(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className="todo-app-footer">
      <div className="todo-app-footer-subtitle">Serhat Çevik, 2019</div>
    </div>
  );
}
