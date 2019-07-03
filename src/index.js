/* @flow */

import * as React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line no-unused-vars
import i18n from "./utils/i18n/i18n";

import App from "./App.js";

const container = document.getElementById("root");

if (container) {
  ReactDOM.render(<App />, container);
}
