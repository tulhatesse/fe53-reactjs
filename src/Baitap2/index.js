import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import ProductList from './ProductList'
import Footer from './Footer'

export default class Baitap2 extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    )
  }
}
