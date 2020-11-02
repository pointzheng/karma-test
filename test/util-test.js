// import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react'
// import { shallow } from 'enzyme';
// import {mount, shallow} from 'enzyme'
// import { describe } from 'jasmine';
// import { mount, shallow } from 'enzyme';
// import { render } from 'enzyme';
// import { shallow } from 'enzyme';

function Fixture() {
  return (
    <div>
       <input id="disabled" disabled className="testClz" />
        <input id="not"/>
    </div>
  );
}

describe('MyComponent', () => {
  it('renders', () => {
    expect(true).toBe(true)
    const wrapper = mount(<Fixture />)
    expect(wrapper.find('#disabled').hasClass("testClz")).toBe(true);
  })
})
