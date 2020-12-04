import React, { Component } from "react";
import UserItem from "./UserItem";

export default class UserList extends Component {
  handleDelete = (userId) => {
    this.props.onDelete(userId);
  };

  handleUpdate = (user) => {
    this.props.onUpdate(user);
  };

  render() {
    const { userList } = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Username</th>
            <th>FullName</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <UserItem
                key={user.id}
                user={user}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
