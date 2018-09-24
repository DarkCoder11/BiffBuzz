import React, { Component } from "react";
import classes from "./Div.css";

class Div extends Component {
  state = {
    isNum: false,
    divAnimationClass: classes.OrderDiv,
    textAnimationClass: classes.OrderDivText
  };

  isNumChangeToTrueHandler = () => {
    if (typeof this.props.bifBuzz === "string") {
      this.setState({
        divAnimationClass: classes.OrderDivAnimatedEnter,
        textAnimationClass: classes.OrderDivTextAnimatedEnter
      });
    }

    this.setState({
      isNum: true
    });
  };

  isNumChangeToFalseHandler = () => {
    if (typeof this.props.bifBuzz === "string") {
      this.setState({
        divAnimationClass: classes.OrderDivAnimatedLeave,
        textAnimationClass: classes.OrderDivTextAnimatedLeave
      });
    }

    this.setState({
      isNum: false
    });
  };

  render() {
    const {divAnimationClass,textAnimationClass,isNum} = this.state
    return (
      <div className={divAnimationClass} onMouseOver={this.isNumChangeToTrueHandler} onMouseOut={this.isNumChangeToFalseHandler}>
        <span className={textAnimationClass}>
          {isNum ? this.props.bifBuzz : this.props.div}
        </span>
      </div>
    );
  }
}

export default Div;
