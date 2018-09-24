import React from "react";

const input = props => (
  <input type="text" onChange={props.inputChange} value={props.value} placeholder="write your number"/>
);

export default input;
