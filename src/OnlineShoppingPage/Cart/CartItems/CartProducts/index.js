import React, { Component } from "react";
import productStore from "../../../../store/Instance";
import { observer } from "mobx-react";
import {
  EachCartItem,
  ProductPhoto,
  ProductDetails,
  TitleColor,
  DetailStyle,
  DeleteAndPrice,
  DeleteIcon,
  Price
} from "./StyledComponents";
import { cartStore } from "../../../../store/Instance";
@observer
class CartProduct extends Component {
  this;
  constructor(props) {
    super(props);
    this.state = {
      onFocusDelete: false
    };
  }
  findProductDetails = () => {
    let products = productStore.products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === this.props.id) {
        return i;
      }
    }
  };
  onDeleteProduct = () => {
    this.props.cartItem.delete(this.props.id);
    cartStore.setCartProducts();
  };
  onFocusDelete = () => {
    this.setState({
      onFocusDelete: !this.state.onFocusDelete
    });
  };

  render() {
    const index = this.findProductDetails();
    let products = productStore.products;
    return (
      <EachCartItem striker={this.state.onFocusDelete ? true : false}>
        <div>
          <ProductPhoto src={products[index].image} />
        </div>
        <ProductDetails>
          <TitleColor>{products[index].title}</TitleColor>
          <DetailStyle>
            <p>
              {products[index].availableSizes[0]} | {products[index].style}
            </p>
            <p>Quatity:{this.props.cartItem.get(this.props.id)}</p>
          </DetailStyle>
        </ProductDetails>
        <DeleteAndPrice>
          <DeleteIcon
            onMouseEnter={this.onFocusDelete}
            onMouseLeave={this.onFocusDelete}
            onClick={this.onDeleteProduct}
            src="/assets/error.png"
          />
          <Price>
            {products[index].currencyFormat + products[index].price}
          </Price>
        </DeleteAndPrice>
      </EachCartItem>
    );
  }
}
export default CartProduct;
