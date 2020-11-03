import React from 'react';

export default class MyCompForTest extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("MyCompForTest has mounted....");
  }

  render() {
    const {foo, bar} = this.props;

    if (foo) {
      return <div id="foo">foo</div>
    }
    if (bar) {
      return <div id="bar">bar</div>
    }
    return <div id="noFooBar">Not foo and not bar</div>
  }
}