import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import "./styles.css";
class OnlineShoppingPage extends Component {
  render() {
    return (
      <div>
        <ProductSizeFilter />
        <ProductShowCase />
      </div>
    );
  }
}
export default OnlineShoppingPage;
