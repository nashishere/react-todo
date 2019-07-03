/* @flow */

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-i18next", () => ({
  "withTranslation": () => Component => {
    Component.defaultProps = {...Component.defaultProps, t: () => ""};

    return Component;
  }
}));

global.shallow = shallow;
global.render = render;
global.mount = mount;
