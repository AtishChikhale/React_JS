import React, { Component } from "react";

class userGreting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // short surcuit Aproch

    return this.state.isLoggedIn && <div>Welcome Atish</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Atish</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // second Aproch

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <>Welcome Atish</>;
    // } else {
    //   message = <>Welcome Guest</>;
    // }
    // return <>{message}</>;

    // first Aproch

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Atish</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Atish</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default userGreting;
