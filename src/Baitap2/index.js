import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Cart from "./Cart";

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
          id: 3,
          name: "Samsung Note 7",
          image: "images/sp_note7.png",
          price: 2100000,
        },
      ],
      cartList: [],
    };
  }

  addToCart = (product) => {
    console.log(product);
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = this.state.cartList.findIndex(
      (item) => item.id === product.id
    );

    if (index === -1) {
      this.setState({
        // Đối với data là array, hoặc obj thì cần phải trả về 1 array hoặc obj mới (khác địa chỉ vùng nhớ), thì component mới render lại
        // cartList: this.state.cartList.push({...product, quality: 1})
        cartList: [...this.state.cartList, { ...product, quality: 1 }],
      });
    } else {
      const newCartList = [...this.state.cartList];
      newCartList[index].quality += 1;
      this.setState({
        cartList: newCartList,
      });
    }
  };

  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#cart"
        >
          Giỏ hàng
        </button>
        <ProductList
          productList={this.state.productList}
          onAddToCart={this.addToCart}
        />
        <Footer />
        <Cart cartList={this.state.cartList} />
      </div>
    );
  }
}
