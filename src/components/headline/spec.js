import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'

import {findByTestAttr, checkprops} from '../../../Utils/index'

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {

  describe('Checking Proptypes', () => {
    it('Should not throw a warning', ()=> {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test des'
      }

      const propsErr = checkprops(Headline, expectedProps)
      expect(propsErr).toBeUndefined();
    })
  })

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      }
      wrapper = setUp(props)
    })

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(1)
    })

    it('should render a h2', () => {
      const h2 = findByTestAttr(wrapper, 'header')
      expect(h2.length).toBe(1)
    })

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc')
      expect(desc.length).toBe(1)
    })


  })

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp()
    })

    it('should not render', ()=> {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(0)
    })
  })

})
