import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './Login';

describe('Login page component', (): void => {
  test('Should renders without crashing', (): void => {
    const div: HTMLElement = document.createElement('div') as HTMLElement;

    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
