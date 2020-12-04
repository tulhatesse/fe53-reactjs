import React, { Component } from "react";

export default class UserItem extends Component {
  handleUpdate = (user) => {
    this.props.onUpdate(user);
  };
  render() {
    const { user, onDelete } = this.props;

    return (
      <tr>
        <td>{user.username}</td>
        <td>{user.fullName}</td>
        <td>{user.dateOfBirth}</td>
        <td>{user.email}</td>
        <td>{user.position}</td>
        <td>
          <button
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#formUser'
            onClick={() => {
              this.handleUpdate(this.props.user);
            }}
          >
            Update
          </button>
          <button className='btn btn-danger' onClick={() => onDelete(user.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
