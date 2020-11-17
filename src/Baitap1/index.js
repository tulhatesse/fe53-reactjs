import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Sidebar from './Sidebar'

export default class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    )
  }
}
