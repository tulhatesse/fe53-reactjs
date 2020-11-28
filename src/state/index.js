import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "Nguyen",
      count: 0
    };
  }

  handleLogin = () => {
    // this.state.isLogin = true
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin); // true
      }
    );

    console.log(this.state.isLogin) // false
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

  handleIncrease = () => {
    // Cách 1
    // const count = this.state.count
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    // Cách 2: Nên dùng khi setState mà cần lấy giá trị cũ để tính toán
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    // console.log("render");
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase</button>
        {/* <button onClick={() => this.handleIncrease()}>Increase</button> */}

      </div>
    );
  }
}








