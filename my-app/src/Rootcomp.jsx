import React, { Component } from "react";

class RootComp extends Component {
  constructor() {
    super();
    this.state = {
      isValid: "very false"
    };
  }

  render() {
    return (
      <div>
        <h4>This is the fact and it is {this.state.isValid}</h4>
      </div>
    );
  }
}

export default RootComp;
