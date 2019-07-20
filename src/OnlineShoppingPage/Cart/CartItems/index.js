import React, { Component } from "react";
import CartProduct from "./CartProducts";
import { cartStore } from "../../../Instance";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class CartItem extends Component {
  cartProducts = () => {
    if (cartStore.cartProducts.length > 0) {
      return cartStore.cartProducts.map(cartItem => (
        <CartProduct cartItem={cartItem} />
      ));
    }
  };
  render() {
    return (
      <>
        <div className="cart-products">{this.cartProducts()}</div>
        <div className="check-out">
          <div className="sub-total">
            <p className="subtotal-size">SUBTOTAL</p>
            <div>
              <p className="total-price">${cartStore.subTotal}</p>
              <p className="total-installments">installments</p>
            </div>
          </div>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </>
    );
  }
}
export default CartItem;
