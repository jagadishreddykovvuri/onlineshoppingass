import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import { cartStore } from "../Instance";

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
      image = "/assets/cart.png";
    if (this.state.isCartOpen) {
      open = "opener";
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
            <img className="cartimage" src={image} />
            <div className="product-coun">{cartStore.cartItemCount}</div>
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
