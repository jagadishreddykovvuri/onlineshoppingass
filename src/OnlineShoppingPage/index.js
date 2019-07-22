import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import { cartStore } from "../store/Instance";

import cart from "./Cart";
import "./styles.css";
import Cart from "./Cart";
import { observer } from "mobx-react";
@observer
class OnlineShoppingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false
    };
  }
  onOpenCart = () => {
    this.setState({
      isCartOpen: !this.state.isCartOpen
    });
  };
  render() {
    let open = "",
      countshow = "",
      image = "/assets/cart.png";
    if (this.state.isCartOpen) {
      open = "opener";
      countshow = "disabler";
      image = "/assets/error.png";
    }
    return (
      <div className="container">
        <div className="shopping-background">
          <ProductSizeFilter />
          <ProductShowCase />
        </div>
        <div className="cart">
          <div className="cart-clicker" onClick={this.onOpenCart}>
            <img
              className="cartimage"
              src={
                this.state.isCartOpen ? "/assets/error.png" : "/assets/cart.png"
              }
            />
            <div className={"product-coun " + countshow}>
              {cartStore.cartItemCount}
            </div>
          </div>
          <div className={"cart-page " + open}>
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
export default OnlineShoppingPage;
