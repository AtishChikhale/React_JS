import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count
    
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
        count:prevState.count + 1
    }))
    console.log(this.state.count);
  }

  incrementFive() {
    console.log('Inside Increment Five')
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
