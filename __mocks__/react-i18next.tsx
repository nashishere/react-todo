import * as React from 'react';
import { getDefaults, getI18n, I18nextProvider, initReactI18next, setDefaults, setI18n } from 'react-i18next';

/* eslint-disable */

const hasChildren = node => node && (node.children || (node.props && node.props.children));
const getChildren = node => (node && node.children ? node.children : node.props && node.props.children);

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  const mapper = (key, i) => {
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
      return Object.keys(child).reduce((str, childKey): string => `${str}${child[childKey]}`, '');
    }

    return child;
  };

  return Object.keys(reactNodes).map(mapper);
};

const useMock = {
  t: k => k,
  i18n: {},
};

module.exports = {
  withTranslation: () => Component => props => <Component t={(k: string): string => k} {...props} />,
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
