import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLogin = false; //false là chưa login; true là đã login
  username = "Nguyen";

  //   renderHTML = () => {
  //     if (this.isLogin) {
  //       return <div>Hello {this.username}</div>;
  //     } else {
  //       return <button className="btn btn-success">Login</button>;
  //     }
  //   };

  handleLogin = () => {
    console.log(this.isLogin);
    this.isLogin = true;
    console.log(this.isLogin);
  };

  renderHTML = () => {
    return this.isLogin ? (
      <div>Hello {this.username}</div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  render() {
    console.log("render");
    return (
      <div>
        <h3>*ExampleHandlingEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
