/* @flow */

import Enzyme, {mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-i18next", () => ({
  "withTranslation": () => Component => {
    Component.defaultProps = {...Component.defaultProps, t: () => ""};

    return Component;
  }
}));

global.mount = mount;
global.render = render;
global.shallow = shallow;
