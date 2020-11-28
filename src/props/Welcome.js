import React, { Component } from 'react'

export default class Welcome extends Component {
  // Mặc định trong tất cả class component của React đều có 1 thuộc tính là this.props
  render() {
    const {name, age} = this.props
    return (
      <div>
        {/* name, age ở đây do component cha truyền xuống */}
        Hello {name} - Age: {age}
      </div>
    )
  }
}
