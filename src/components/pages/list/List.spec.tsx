import * as React from 'react';
import * as ReactDOM from 'react-dom';

import List from './List';

describe('List page component', (): void => {
  test('Should renders without crashing', (): void => {
    const div: HTMLElement = document.createElement('div') as HTMLElement;

    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
