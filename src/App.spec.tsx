import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

describe('Application component', (): void => {
  test('Should renders without crashing', (): void => {
    const div: HTMLElement = document.createElement('div') as HTMLElement;

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
