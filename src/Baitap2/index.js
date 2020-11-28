import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default class Baitap2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: 1,
          name: "Iphone",
          image: "images/sp_iphoneX.png",
          price: 3000000,
        },
        {
          id: 2,
          name: "Blackberry",
          image: "images/sp_blackberry.png",
          price: 1800000,
        },
        {
          id: 1,
          name: "Samsung Note 7",
          image: "images/sp_note7.png",
          price: 2100000,
        },
      ],
    };
  }

  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ProductList productList={this.state.productList} />
        <Footer />
      </div>
    );
  }
}
