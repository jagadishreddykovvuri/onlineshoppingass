import React, { Component } from "react";
import { cartStore } from "../../../store/Instance";
import {
  ProductTitle,
  Separation,
  AddToCart,
  Installments,
  Price,
  Title,
  EachProduct,
  ProductImage,
  FreeShipping
} from "./StyledComponents";
class Product extends Component {
  onFreeShipping = value => {
    if (value) {
      return <FreeShipping>Free Shipping</FreeShipping>;
    }
  };
  onAddtoCart = () => {
    cartStore.onAddProductToCart(this.props.id);
  };
  getInstallments = (installment, currencyFormat, price) => {
    return `or ${installment} x ${currencyFormat}
    ${Number((price / installment).toFixed(2))}`;
  };
  render() {
    const {
      image,
      isFreeShipping,
      title,
      price,
      currencyFormat,
      installments
    } = this.props;
    return (
      <>
        <EachProduct>
          <ProductImage
            style={{
              backgroundImage: "url(" + image + ")"
            }}
          >
            {this.onFreeShipping(isFreeShipping)}
          </ProductImage>
          <ProductTitle>
            <Title>{title}</Title>
          </ProductTitle>
          <Separation />
          <Price>
            {currencyFormat} {price}
          </Price>
          <Installments>
            {this.getInstallments(installments, currencyFormat, price)}
          </Installments>
          <AddToCart onClick={this.onAddtoCart}>Add To Cart</AddToCart>
        </EachProduct>
      </>
    );
  }
}
export default Product;
