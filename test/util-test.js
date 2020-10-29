// import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react'
// import {mount, shallow} from 'enzyme'

describe('test', () => {
  beforeEach(() => {
    
  });

  it('reverse word', function() {
    // tests
    console.log("in test start")
    const wrapper = mount(<Fixture />); // mount/render/shallow when applicable
    expect(true).toBe(true);
    // expect(wrapper.find('#not')).not.toBeChecked();
    console.log("in test end")
  });
});

function Fixture() {
  return (
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
      <input id="tertiary" defaultChecked />
    </div>
  );
}

