import React, { Component } from "react";
import ProductShowCase from "./ProductShowCase";
import ProductSizeFilter from "./ProductSizeFilter";
import { cartStore } from "../store/Instance";
import productStore from "../store/Instance";
import * as Cookies from "js-cookie";
import {
  CartClicker,
  CartImage,
  CartProductCount,
  CartPage,
  CartDiv,
  ShoppingPanel,
  Button
} from "./StyledComponents";
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
  onSignout = () => {
    Cookies.remove("myuser");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Button onClick={this.onSignout}>signout</Button>
        <ShoppingPanel>
          <ProductSizeFilter />
          <ProductShowCase />
        </ShoppingPanel>
        <CartDiv>
          <CartClicker onClick={this.onOpenCart}>
            <CartImage
              src={
                this.state.isCartOpen ? "/assets/error.png" : "/assets/cart.png"
              }
            />
            <CartProductCount disabler={this.state.isCartOpen}>
              {cartStore.cartItemCount}
            </CartProductCount>
          </CartClicker>
          <CartPage opener={this.state.isCartOpen}>
            <Cart />
          </CartPage>
        </CartDiv>
      </div>
    );
  }
}

export default OnlineShoppingPage;
