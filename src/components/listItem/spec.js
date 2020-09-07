import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkprops} from '../../../Utils'
import ListItem from './index'

describe('ListItem component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text'
      }
      const propsError = checkprops(ListItem, expectedProps)
      expect(propsError).toBeUndefined();
    })
  })

  describe('Component Renders', ()=> {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some text'
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Should renders without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent')

      expect(component.length).toBe(1)
    })

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle')

      expect(title.length).toBe(1)
    })

    it('Should render a description', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc')

      expect(desc.length).toBe(1)
    })


  })
})
