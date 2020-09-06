import React from 'react'
import  {shallow}  from 'enzyme'
import Header from './index'
import {findByTestAttr} from '../../../Utils/index'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

// moved to utils

// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`);
//   return wrapper;
// }

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, "headerComponent")
    // const wrapper = component.find(`[data-test="headerComponent"]`);
    expect(wrapper.length).toBe(1);
  })

})

