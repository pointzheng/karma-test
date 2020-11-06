// NOTE: in karma.conf.js, the plugins config is 'karma-jasmine' and framework config is 'jasmine'
import React from 'react'
import Fixture from '../components/FixTure';
import MyCompForTest from '../components/MyCompForTest';

describe('MyComponent', () => {
  console.log("jasmine test...");
  
  it('mount demo', () => {
    expect(true).toBe(false)
    const wrapper = mount(<Fixture />)
    expect(wrapper.find('#disabled').hasClass("testClz")).toBe(true);
    expect(wrapper.find('#not').hasClass("testClz")).toBe(false);
  })

  it('test element search', () => {
    const wrapperFoo = mount(<MyCompForTest foo="3" />)
    expect(wrapperFoo.find('#foo').length).toBe(1);
    const wrapperBar = mount(<MyCompForTest bar="3" />)
    expect(wrapperBar.find('#bar').length).toBe(1);
  })

  it('test spy', () => {
    const onButtonClick = jasmine.createSpy('whatIsSpy');
    const wrapper = mount(
      <MyCompForTest foo="3">
        <button onClick={onButtonClick}>test</button>
      </MyCompForTest>
    )
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();

    spyOn(MyCompForTest.prototype, 'clickTest');
    const btWrapper = mount(<MyCompForTest foo="3" />)
    expect(btWrapper.find("a").text()).toBe('testLink')
    btWrapper.find('a').simulate('click');
    expect(MyCompForTest.prototype.clickTest).toHaveBeenCalled();
    expect(MyCompForTest.prototype.clickTest).toHaveBeenCalledTimes(1);
  })
})
