import React from 'react';
import { shallow } from 'enzyme';
import  NotFoundPage  from '../../Components/NotFoundPage';


test("Should render NotFound Page (404!)", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
   
  });