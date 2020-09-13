import React from 'react'
import {shallow} from 'enzyme'

import { findByTestAttr, checkprops} from '../../../Utils'
import SharedButton from './index'

describe('SharedButton component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }
      const propsError = checkprops(SharedButton, expectedProps)
      expect(propsError).toBeUndefined();
    })
  })

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      // this is a test function that is used in emitEvent below.
      // so when ever we click on the button this will get called
      // we can calculate no. of times this function is called.
      mockFunc = jest.fn()
      const Props = {
        buttonTest: 'Example Button Text',
        emitEvent: mockFunc
      }
      wrapper = shallow(<SharedButton {...Props}/>)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1);
    })

    it('should emit callback on click event', ()=> {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      button.simulate('click')
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1)
    })
  })
})