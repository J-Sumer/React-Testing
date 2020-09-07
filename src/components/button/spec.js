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
    beforeEach(() => {
      const Props = {
        buttonTest: 'Example Button Text',
        emitEvent: () => {

        }
      }
      wrapper = shallow(<SharedButton {...Props}/>)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1);
    })
  })
})