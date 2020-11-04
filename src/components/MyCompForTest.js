import React from 'react';

export default class MyCompForTest extends React.Component {
  constructor(props) {
    super(props);
  }

  clickTest() {
    console.log("clickTest method is called");
  }

  componentDidMount() {
    console.log("MyCompForTest has mounted....");
  }

  render() {
    const {foo, bar, children} = this.props;
    const link = <a id="testLink" onClick={this.clickTest}>testLink</a>

    if (foo) {
      return <div id="foo">{link}{children}</div>
    }
    if (bar) {
      return <div id="bar">{link}{children}</div>
    }
    return <div id="noFooBar">{link}{children}</div>
  }
}