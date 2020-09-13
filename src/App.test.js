import App from './App'
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils";
import React from 'react'

const setUp = (initialState={}) => {
  const store = testStore(initialState)
  // here shallow(<App store={store} />) is not giving <App/> component, instead it is wrapped inside <contextProvider>
  // therefore we used childAt(0)
  // even then it is giving something else. So dive() is used to get the exact component
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

  // to test methods on a class
  it('exampleMethod_updatesState Method updates state as expected', ()=> {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true)
  })
}) 
