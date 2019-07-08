/* @flow */

import * as React from "react";
import ReactDOM from "react-dom";

// NOTE Import for i18n support
import "./utils/i18n/i18n";

import App from "./App.js";

const container = document.getElementById("root");

if (container) {
  ReactDOM.render(<App />, container);
}
