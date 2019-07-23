import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import { cartStore } from "../store/Instance";
import productStore from "../store/Instance";
import CartIcon from "./Cart/CartIcon";

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
  componentDidMount() {
    productStore.onFetchProductList();
  }
  render() {
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
            <div
              className={
                "cart-product-count" +
                (this.state.isCartOpen ? " disabler" : "")
              }
            >
              {cartStore.cartItemCount}
            </div>
          </div>
          <div
            className={"cart-page " + (this.state.isCartOpen ? "opener" : "")}
          >
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineShoppingPage;
