import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          width: '70%',
          height: '400px',
          backgroundColor: 'yellow'
        }}
      >
        <span>Content</span>
      </div>
    )
  }
}
