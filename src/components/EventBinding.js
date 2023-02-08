import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.clikHandler = this.clikHandler.bind(this)
  }

  // clikHandler() {
    // this.setState({
      // message: "Godbye",
    // });
    // console.log(this);
  // }

  clikHandler = () => {
    this.setState({
      message : "godbye!"
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clikHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clikHandler()}>Click</button> */}
        {/* <button onClick={this.clikHandler}>Click</button> */}
        <button onClick={this.clikHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
