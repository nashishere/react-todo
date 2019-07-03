import * as React from "react";
import ReactDOM from "react-dom";

import App from "./App";

describe("Application component", () => {
  test("Should renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
