import React, { Component } from "react";
import "./styles.css";
class CartProduct extends Component {
  render() {
    return (
      <div className="each-cart-item">
        <div>
          <img
            className="product-photo"
            src="https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg"
          />
        </div>
        <div className="product-details">
          <h2 className="title-color">title</h2>
          <div className="detailstyle">
            <p>size|model</p>
            <p>quantity</p>
          </div>
        </div>
        <div className="delete-with-price">
          <img className="delete-icon" src="/assets/error.png" />
          <p>price</p>
        </div>
      </div>
    );
  }
}
export default CartProduct;
