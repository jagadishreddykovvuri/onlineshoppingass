import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import "./styles.css";
class OnlineShoppingPage extends Component {
  render() {
    return (
      <div className="shopping-background">
        <ProductSizeFilter />
        <ProductShowCase />
      </div>
    );
  }
}
export default OnlineShoppingPage;
