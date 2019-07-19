import React, { Component } from "react";
import CartProduct from "./CartProducts";
import "./styles.css";
class CartItem extends Component {
  render() {
    return (
      <>
        <div className="cart-products">
          <CartProduct />
        </div>
      </>
    );
  }
}
export default CartItem;
