/* @flow */

import Enzyme, {mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.shallow = shallow;
