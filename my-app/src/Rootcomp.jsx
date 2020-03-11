import React, { Component } from "react";
import Questions from "./Questions";
import Quiz from "./Quiz";

class RootComp extends Component {
  constructor() {
    super();
    this.state = {
      problem: Questions
    };
  }

  render() {
    const newProblem = this.state.problem.map(item => (
      <Quiz
        key={item.id}
        firstq={item.firstq}
        firsta={item.firsta}
        firstop={item.firstop}
        seconda={item.seconda}
        secondop={item.secondop}
        thirda={item.thirda}
        thirdop={item.thirdop}
      />
    ));
    return <div>{newProblem}</div>;
  }
}

export default RootComp;
