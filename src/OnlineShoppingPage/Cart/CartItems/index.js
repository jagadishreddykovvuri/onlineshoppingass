import React, { Component } from "react";
import CartProduct from "./CartProducts";
import { cartStore } from "../../../store/Instance";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class CartItem extends Component {
  cartProducts = () => {
    let cart = [];
    cartStore.cartProducts.forEach((quantity, id, cartItem) =>
      cart.push(<CartProduct cartItem={cartStore.cartProducts} id={id} />)
    );
    return cart;
  };
  render() {
    let subTotal = cartStore.subTotal;
    return (
      <>
        <div className="cart-products">{this.cartProducts()}</div>
        <div className="check-out">
          <div className="sub-total">
            <p className="subtotal-size">SUBTOTAL</p>
            <div className="price-installment">
              <p className="total-price">${subTotal[0].toFixed(2)}</p>
              <p className="total-installments">
                OR UP TO {subTotal[1]} X $
                {(subTotal[0] / subTotal[1]).toFixed(2)}
              </p>
            </div>
          </div>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      </>
    );
  }
}
export default CartItem;
