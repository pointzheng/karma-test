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
    const wrapper = mount(<MyCompForTest foo="3" />)
    expect(wrapper.find('#foo').length).toBe(1);
  })
})
