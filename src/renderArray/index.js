import React, { Component } from "react";

export default class RenderArray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "Iphone 12", gia: 35000000 },
        { maSP: 2, tenSP: "Samsung note 20", gia: 25000000 },
        { maSP: 3, tenSP: "Huawei P30", gia: 20000000 },
      ],
    };
  }

  renderMangSanPham() {
    return this.state.mangSanPham.map((item, index) => {
      // Khi dùng map render một mảng, bắt buộc phải có property key cho thẻ bao ngoài cùng
      // Giống hàm return trong render, chỉ được có 1 tag html bao ngoài cùng
      // hạn chế sử dụng index làm key
      return (
        <p key={item.maSP}>
          {item.maSP} - {item.tenSP} - {item.gia}
        </p>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderMangSanPham()}
        {this.state.mangSanPham.map((item) => (
          <p key={item.id}>
            {item.maSP} - {item.tenSP} - {item.gia}
          </p>
        ))}
      </div>
    );
  }
}

// [<p>1 - Iphone - 35</p>, <p>2 - samsung - 25</p>, <p>3 - huawei - 25</p>]
