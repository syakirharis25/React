import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.firstq}</h5>
        <p>{this.props.firsta}</p>
        <input type="checkbox" onChecked={this.props.firstop} />
        <p>{this.props.seconda}</p>
        <input type="checkbox" onChecked={this.props.secondop} />
      </div>
    );
  }
}

export default Quiz;
