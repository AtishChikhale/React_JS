import React, { Component } from "react";

class Welcome1 extends Component {
  render() {
    return (
      <h1>
        Welcome1 {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome1;
