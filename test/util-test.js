import React from 'react'
import Fixture from '../components/FixTure';

describe('MyComponent', () => {
  it('renders', () => {
    const wrapper = mount(<Fixture />)
    expect(wrapper.find('#disabled').hasClass("testClz")).toBe(true);
    expect(wrapper.find('#not').hasClass("testClz")).toBe(false);
  })
})
