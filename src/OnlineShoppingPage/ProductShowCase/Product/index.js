import React, { Component } from "react";
import "./styles.css";
class Product extends Component {
  render() {
    return (
      <>
        <div className="each-product">
          <div className="product-image">
            <div class="free-shipping">Free Shipping</div>
          </div>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </>
    );
  }
}
export default Product;
