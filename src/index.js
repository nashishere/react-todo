/* @flow */

import * as React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const container = document.getElementById("root");

if (container) {
  ReactDOM.render(<App />, container);
}
