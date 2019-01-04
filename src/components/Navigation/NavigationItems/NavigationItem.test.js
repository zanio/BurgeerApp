import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItem from './NavItem';
import NavList from './NavList/NavList';


//The code below connect enzyme to adapter..
configure({adapter:new Adapter()});

describe('<NavItem />', ()=>{
    let wrapper;

    beforeEach(()=>{
    // The shallow mwthod makes a copy of that element imported.
    wrapper = shallow(<NavItem />);
    });

    it('Should render two <NavItem /> if NOT authenticated',() => {
    // The 'expect' method checks if the wrapper contains a certain element.
    expect(wrapper.find(NavList)).toHaveLength(3)
   });

   it('Should render two <NavItem /> if authenticated',() => {
  //  wrapper = shallow(<NavItem idToken/>);
    wrapper.setProps({idToken:true})
    // The 'expect' method checks if the wrapper contains a certain element.
    expect(wrapper.find(NavList)).toHaveLength(4)
   });

});

//Let it known that testing your component on router related componenet does not work!.