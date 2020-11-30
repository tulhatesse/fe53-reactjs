import React, { Component } from "react";

export default class FormUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      fullName: "",
      email: "",
      dateOfBirth: "",
      position: "",
    };
  }

  handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value);

    const name = evt.target.name; // username

    this.setState({
      [name]: evt.target.value,
      // userrname: evt.target.value
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="formUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Form User</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username" // Quan trọng
                  value={this.state.username} // Quan trọng
                  // onChange={(evt) =>
                  //   this.setState({ username: evt.target.value })
                  // }
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Fullname</label>
                <input type="text" id="fullName" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="text" id="dateOfBirth" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <select id="position" className="form-control">
                  <option value="">---</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
