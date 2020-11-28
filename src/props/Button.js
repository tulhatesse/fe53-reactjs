import React, { Component } from "react";

const styleMapping = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export default class Button extends Component {
  // props: variant(primary/secondary), disabled, size(lg, sm)
  // Các component luôn luôn có 1 props là children, đại diện cho nội dung bên trong component khi component được gọi
  render() {
    const { variant, disabled, size, children } = this.props;

    // const className = variant === "primary" ? "btn-primary" : "btn-secondary";
    const className = styleMapping[variant]
    return (
      <button className={`btn ${className} btn-${size}`} disabled={disabled}>
        {children}
      </button>
    );
  }
}
