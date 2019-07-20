import React, { Component } from "react";
import CartItems from "./CartItems";
import "./styles.css";
class Cart extends Component {
  render() {
    return (
      <>
        <div className="cart-header">
          <div className="headerLabel">
            <div>
              <img className="cart-image-size" src="/assets/cart.png" />
              <div className="product-count">1</div>
            </div>
            <p>CART</p>
          </div>
        </div>
        <CartItems />
      </>
    );
  }
}
export default Cart;
