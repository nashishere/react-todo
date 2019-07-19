import * as React from 'react';
import {
  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n,
} from '../node_modules/react-i18next/src/index';

/* eslint-disable */

const hasChildren = node => node && (node.children || (node.props && node.props.children));

const getChildren = node => (node && node.children ? node.children : node.props && node.props.children);

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '');
    }

    return child;
  });
};

const useMock = {
  t: k => k,
  i18n: {},
};

module.exports = {
  // withTranslation: () => (Component) => (props) => <Component t={k => k} {...props} />,
  Trans: ({ children }) => renderNodes(children),
  Translation: ({ children }) => children(k => k, { i18n: {} }),
  useTranslation: () => useMock,

  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n,
};
