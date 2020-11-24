import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Nguyen";
  lop = "FE53";

  renderInfo = () => {
    return (
      <div>
        Username: {this.username} - Lop: {this.lop}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>*RenderingElements</h3>
        {this.renderInfo()}
        {/* <div>
          Username: {this.username} - Lop: {this.lop}
        </div> */}
      </div>
    );
  }
}
