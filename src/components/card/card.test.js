import React from "react";
import TestUser from "./item";
import Card from "./card";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({adapter:new Adapter()});

describe('just testing', ()=>{

    it("should render right", () => {
        const wrapper = shallow(<TestUser />);
        expect(wrapper.find(Card)).toHaveLength(3);
      });
})