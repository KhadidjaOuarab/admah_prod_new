import React from "react";
import flexboxCss from "./FlexBox.css"
function FlexBox({input1Col1,input2Col1,input3Col1,input1Col2,input2Col2,input3Col2}) {
  return (
    <header>
      <div className="col">
        <div className="row">{input1Col1}</div>
        <div className="row">{input2Col1}</div>
        <div className="row">{input3Col1}</div>
      </div>
      <div className="col">
        <div className="row">{input1Col2}</div>
        <div className="row">{input2Col2}</div>
        <div className="row">{input3Col2}</div>
      </div>
    </header>
  );
}

export default FlexBox;
