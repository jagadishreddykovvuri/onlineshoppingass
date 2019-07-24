import React, { Component } from "react";
import CartItems from "./CartItems";
import { cartStore } from "../../store/Instance";
import {
  CartHeader,
  CartImage,
  HeaderLabel,
  ProductCount,
  AddProducts
} from "./StyledComponents";

class Cart extends Component {
  showCartItems = () => {
    let count = cartStore.cartItemCount;
    if (count > 0) {
      return <CartItems />;
    } else {
      return (
        <AddProducts>
          Add some products in Cart <br /> :)
        </AddProducts>
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
        <CartHeader>
          <HeaderLabel>
            <div>
              <CartImage src="/assets/cart.png" />
              <ProductCount>{cartStore.cartItemCount}</ProductCount>
            </div>
            <p>CART</p>
          </HeaderLabel>
        </CartHeader>
        {this.showCartItems()}
      </>
    );
  }
}
export default Cart;
