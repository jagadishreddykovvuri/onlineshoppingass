import React, { Component } from "react";
import CartItems from "./CartItems";
import "./styles.css";
class Cart extends Component {
  render() {
    return (
      <>
        <div className="cart-header">
          <img className="cart-image-size" src="/assets/cart.png" />
        </div>
        <CartItems />
      </>
    );
  }
}
export default Cart;
