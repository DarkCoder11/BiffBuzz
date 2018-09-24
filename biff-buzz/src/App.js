import React, { Component } from "react";
import Input from "./components/Input/Input";
import DivList from './components/DivLists/DivLists';
import classes from "./App.css";

class App extends Component {
  state = {
    inputValue: '',
    divList: []
  };
  
  inputChangeHandler = (event) => {
    if(!isFinite(+event.target.value)) {
      return
    }
    this.setState({
      inputValue: +event.target.value
    });
    const divListLength = new Array(+event.target.value);
    let divList = [];
    for(let i = 1; i < divListLength.length; i++) {
      divList.push(i);
    }
    this.setState({
      divList
    })
  };
  
  render() {
    const {inputValue,divList} = this.state
    return (
      <div className={classes.App}>
        <Input
          inputChange={(event) => this.inputChangeHandler(event,inputValue)}
          value={inputValue}
        />
        <DivList divList={divList}/>
      </div>
    );
  }
}

export default App;