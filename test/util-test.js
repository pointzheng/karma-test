import React from 'react'
import Fixture from '../components/FixTure';
import MyCompForTest from '../components/MyCompForTest';

describe('MyComponent', () => {
  it('renders', () => {
    const wrapper = mount(<Fixture />)
    expect(wrapper.find('#disabled').hasClass("testClz")).toBe(true);
    expect(wrapper.find('#not').hasClass("testClz")).toBe(false);
  })

  it('testFooBar', () => {
    const wrapperFoo = mount(<MyCompForTest foo="3" />)
    expect(wrapperFoo.find('#foo').length).toBe(1);
    const wrapperBar = mount(<MyCompForTest bar="3" />)
    expect(wrapperBar.find('#bar').length).toBe(1);
    // const wrapperNotFooOrBar = mount(<MyCompForTest />)
    // expect(wrapperNotFooOrBar.find('#foo').length).toBe(0);
  })
})
