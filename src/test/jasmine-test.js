// NOTE: in karma.conf.js, the plugins config is 'karma-jasmine' and framework config is 'jasmine'
import React from 'react'
import Fixture from '../components/FixTure';
import MyCompForTest from '../components/MyCompForTest';

describe('MyComponent', () => {
  console.log("jasmine test...");
  
  it('mount demo', () => {
    const wrapper = mount(<Fixture />)
    expect(wrapper.find('#disabled').hasClass("testClz")).toBe(true);
    expect(wrapper.find('#not').hasClass("testClz")).toBe(false);
  })

  it('testFooBar', () => {
    const wrapperFoo = mount(<MyCompForTest foo="3" />)
    expect(wrapperFoo.find('#foo').length).toBe(1);
    const wrapperBar = mount(<MyCompForTest bar="3" />)
    expect(wrapperBar.find('#bar').length).toBe(1);
  })

  it('test button click', () => {
    const onButtonClick = jasmine.createSpy('whatAmI');
    const wrapper = mount(
      <MyCompForTest foo="3">
        <button onClick={onButtonClick}>test</button>
      </MyCompForTest>
    )
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  })
})
