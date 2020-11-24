import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./images/imgRedCar.jpg",
    };
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleChangeColor = (img) => {
    this.setState({
      img,
    });
  };

  handleDemo() {
    this.setState({
      img: "./images/imgRedCar.jpg",
    });
  }

  render() {
    return (
      <div className="container">
        <h3>*ExampleCar</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.img} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.handleChangeColor("./images/imgRedCar.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-light mx-2"
              onClick={() => {
                this.handleChangeColor("./images/imgSilverCar.jpg");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.handleChangeColor("./images/imgBlackCar.jpg");
              }}
            >
              Black
            </button>
            <button onClick={this.handleDemo}>Demo</button>
          </div>
        </div>
      </div>
    );
  }
}
