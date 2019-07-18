import React, { Component } from "react";
import Cart from "./Cart";
import Product from "./Product";
import "./styles.css";
import produce from "immer";
class ProductShowCase extends Component {
  render() {
    return (
      <>
        <Cart />
        <Product />
      </>
    );
  }
}
export default ProductShowCase;
