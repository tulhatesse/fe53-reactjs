import React, { Component } from "react";

export default class Search extends Component {
  handleChange = (evt) => {
    console.log(evt.target.value);
    // Lấy dc value, cần đẩy value lên component UserManagement
    this.props.onSearch(evt.target.value);
  };

  render() {
    return (
      <div class="w-25">
        <input
          className="form-control"
          // onChange={this.handleChange}
          onChange={(evt) => this.handleChange(evt)}
        />
      </div>
    );
  }
}
