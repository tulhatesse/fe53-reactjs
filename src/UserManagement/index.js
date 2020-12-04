import React, { Component } from "react";
import UserList from "./UserList";
import Search from "./Search";
import FormUser from "./FormUser";
import data from "./data.json";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: data,
      search: "",
      userForm: {},
    };
  }

  handleAdd = (user) => {
    user.id = this.state.userList.length + 1;
    let newUserList = [...this.state.userList];
    newUserList.push(user);
    this.setState({ userList: newUserList });
  };
  handleSearch = (value) => {
    console.log(value);
    // Sử dụng cách thì bị mất data
    // const userList = this.state.userList.filter((user) => {
    //   return user.username.indexOf(value.trim()) !== -1;
    // });

    // this.setState({
    //   userList,
    // });

    this.setState({
      search: value,
    });
  };

  handleUpdate = (user) => {
    console.log(user);

    return user;
  };
  handleDelete = (userId) => {
    // Cách 1:
    // const userList = [...this.state.userList];
    // const index = userList.findIndex((user) => user.id === userId);
    // userList.splice(index, 1);
    // this.setState({ userList });
    // Cách 2:
    const userList = this.state.userList.filter((user) => {
      return user.id !== userId;
    });

    this.setState({ userList });
  };

  render() {
    const userList = this.state.userList.filter((user) => {
      const timThay = user.username.indexOf(this.state.search) !== -1;
      // dannd.indexOf(nd) => 3
      // dannd.indexOf(abc) => -1
      return timThay;
    });

    return (
      <div className='container'>
        <h1 className='text-center'>User Management</h1>
        <div className='d-flex justify-content-between'>
          <Search onSearch={this.handleSearch} />
          <button
            data-toggle='modal'
            data-target='#formUser'
            className='btn btn-success'
          >
            Add User
          </button>
        </div>
        <UserList
          userList={userList}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
        <FormUser onAdd={this.handleAdd} />
      </div>
    );
  }
}
