import React, { Component } from "react";

class RootComp extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => {
      return {
        number: prevState.number + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button onClick={this.clickHandler}>Punch To Increase</button>
      </div>
    );
  }
}

export default RootComp;
