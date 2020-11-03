import React from 'react'

export default function Fixture() {
  const a = 3;

  // The following code is to test coverage rate for comparison
  // function inner() {
  //   var b = 5;
  //   console.log("b:", b)
  // }

  return (
    <div>
       <input id="disabled" disabled className="testClz" />
        <input id="not"/>
    </div>
  );
}