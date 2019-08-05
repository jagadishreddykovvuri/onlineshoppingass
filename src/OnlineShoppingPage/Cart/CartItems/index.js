import React, { Component } from "react";
import CartProduct from "./CartProducts";
import { cartStore } from "../../../store/Instance";
import { observer } from "mobx-react";
import {
  CartProducts,
  CartFooter,
  SubTotal,
  SubTotalHead,
  TotalPrice,
  TotalInstallment,
  CheckOutButton
} from "./StyledComponents";
@observer
class CartItem extends Component {
  cartProducts = () => {
    let cart = [];
    cartStore.cartProducts.forEach((quantity, id, cartItem) => {
      cart.push(
        <CartProduct key={id} cartItem={cartStore.cartProducts} id={id} />
      );
    });
    return cart;
  };
  render() {
    let subTotal = cartStore.subTotal;
    return (
      <>
        <CartProducts>{this.cartProducts()}</CartProducts>
        <CartFooter>
          <SubTotal>
            <SubTotalHead>SUBTOTAL</SubTotalHead>
            <div>
              <TotalPrice>${subTotal[0].toFixed(2)}</TotalPrice>
              <TotalInstallment>
                OR UP TO {subTotal[1]} X $
                {(subTotal[0] / subTotal[1]).toFixed(2)}
              </TotalInstallment>
            </div>
          </SubTotal>
          <CheckOutButton>CHECKOUT</CheckOutButton>
        </CartFooter>
      </>
    );
  }
}
export default CartItem;
