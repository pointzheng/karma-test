import React from 'react';

export default class MyCompForTest extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("MyCompForTest has mounted....");
  }

  render() {
    const {foo, bar, children} = this.props;

    if (foo) {
      return <div id="foo">{children}</div>
    }
    if (bar) {
      return <div id="bar">{children}</div>
    }
    return <div id="noFooBar">{children}</div>
  }
}