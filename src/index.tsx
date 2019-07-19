import * as React from 'react';
import * as ReactDOM from 'react-dom';

// NOTE Import for i18n support
import './utils/i18n/i18n';

import App from './App';

const container: HTMLElement = document.getElementById('root') as HTMLElement;

if (container) {
  ReactDOM.render(<App />, container);
}
