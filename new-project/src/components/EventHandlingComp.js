import React, {Component} from 'react' 

class EventHandlingComp extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    },
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("I am clicked");
    this.setState({count: 3}); 
  }
  render() {
    return (
      <div>
          <h6>{this.state.count}</h6>
        <button onClick={this.handleClick}>Click Me For Change</button>
      </div>
    )
  }
}

export default EventHandlingComp