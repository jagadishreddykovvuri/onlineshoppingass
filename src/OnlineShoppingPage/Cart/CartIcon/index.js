import React, { Component } from "react";
import { cartStore } from "../../../store/Instance";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class CartIcon extends Component {
  render() {
    return (
      <div>
        <img className="cart-image-size" src={this.props.image} />
        <div className="product-count">{cartStore.cartItemCount}</div>
      </div>
    );
  }
}
export default CartIcon;
