import App from './App'
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils";
import React from 'react'

const setUp = (initialState={}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store} />).childAt(0).dive()
  // console.log(wrapper.debug())
  return wrapper
}
 

describe('App component', ()=> {
  let wrapper;
  beforeEach(()=> {
    const initialState = {
      posts: [{
        title: 'Example title',
        body: 'Some Text'
      }]
    }
    wrapper = setUp(initialState)
  })

  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent')
    expect(component.length).toBe(1)
  })
}) 
