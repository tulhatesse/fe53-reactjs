import React, { Component } from "react";

export default class ProductItem extends Component {
  selectProduct = (product) => {
    // Cần truyền sản phẩm vừa click vào lên component ProductList để hiển thị ra chi tiết sản phẩm
    // onSelect là 1 function
    // Để truyền dữ liệu lên component cha, ta sẽ gọi props onSelect và truyền param là product vào
    const { onSelect } = this.props;
    onSelect(product)
  };

  render() {
    const { product } = this.props;
    return (
      <div className="card bg-light" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={product.image}
          alt="Cardimage"
          style={{ maxWidth: "100%", height: 250 }}
        />
        <div className="card-body text-center">
          <h4 className="card-title text-center">{product.name}</h4>
          <p className="card-text">{product.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => this.selectProduct(product)}
          >
            Detail
          </button>
          <button data-toggle="modal" data-target="#modalId"className="btn btn-danger">
            Cart
          </button>
        </div>
      </div>
    );
  }
}
