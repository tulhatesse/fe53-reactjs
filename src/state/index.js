import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "Nguyen",
    };
  }

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  renderHTML = () => {
    return this.state.isLogin ? (
      <div>Hello {this.state.username}</div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  render() {
    // console.log("render");
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
