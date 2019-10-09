import React, {Component} from "react";

class ClassBased extends Component {
  constructor() {
    super()
      this.state = {
        answer: true,
        isloggedin: true,
      }
  }
  render() {
   let wordDisplay
    if (this.state.isloggedin) {
      wordDisplay = "In"
    } else {
      wordDisplay = "Out"
    }
    const newDate = new Date();
    const name = "Mr. Mohit"
    return (
      <div>
        <h1> Welcome {name} </h1>
        <h3>Today is {newDate.getMonth()}</h3>
        <input type="checkbox" name="" value="" checked={this.state.answer}></input><p>Today is {this.props.weekend}</p>
        <h4>You are currently Logged==> {wordDisplay}</h4>
      </div>
    )
  }
}

export default ClassBased