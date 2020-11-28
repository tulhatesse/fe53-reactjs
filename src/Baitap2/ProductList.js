import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
    };
  }

  // Hàm selectProduct sẽ được chạy khi ở component ProductItem gọi tới props onSelect
  selectProduct = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  render() {
    const { productList } = this.props;
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        {/* Danh sách sản phẩm */}
        <div className="row">
          {productList.map((product) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                  {/* Để truyền dữ liệu từ component con lên component cha, ở component cha ta sẽ truyền cho component con 1 props là 1 callback function, trong component con khi ta gọi tới props đó, thì component cha sẽ chạy hàm callback */}
                  {/* trong ví dụ này: ở component con mình gọi onSlect() suy ra component cha sẽ chạy hàm selectProduct */}
                  <ProductItem
                    product={product}
                    onSelect={(product) => this.selectProduct(product)}
                    // onSelect={this.selectProduct}

                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Chi tiết sản phẩm */}
        {this.state.productDetail && (
          <div className="row">
            <div className="col-sm-6">
              <img
                src={this.state.productDetail.image}
                alt="product"
                width="300"
                height="300"
              />
            </div>
            <div className="col-sm-6">
              <h1>{this.state.productDetail.name}</h1>
              <p>{this.state.productDetail.price}</p>
            </div>
          </div>
        )}
      </section>
    );
  }
}
