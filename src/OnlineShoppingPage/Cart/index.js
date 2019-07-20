import React, { Component } from "react";
import CartItems from "./CartItems";
import { cartStore } from "../../store/Instance";
import "./styles.css";
class Cart extends Component {
  showCartItems = () => {
    let count = cartStore.cartItemCount;
    if (count > 0) {
      return <CartItems />;
    } else {
      return (
        <p className="add-products">
          Add some products in Cart <br /> :)
        </p>
      );
    }
  };
  render() {
    let count = cartStore.cartItemCount;
    if (count > 0) {
      let cartItems = [<CartItems />];
    } else {
      let cartItems = <p>add products</p>;
    }
    return (
      <>
        <div className="cart-header">
          <div className="headerLabel">
            <div>
              <img className="cart-image-size" src="/assets/cart.png" />
              <div className="product-count">{cartStore.cartItemCount}</div>
            </div>
            <p>CART</p>
          </div>
        </div>
        {this.showCartItems()}
      </>
    );
  }
}
export default Cart;
