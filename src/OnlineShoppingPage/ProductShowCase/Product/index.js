import React, { Component } from "react";
import { cartStore } from "../../../store/Instance";
import "./styles.css";
class Product extends Component {
  onFreeShipping = value => {
    if (value) {
      return <div class="free-shipping">Free Shipping</div>;
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
        <div className="each-product">
          <div
            className="product-image"
            style={{
              backgroundImage: "url(" + image + ")"
            }}
          >
            {this.onFreeShipping(isFreeShipping)}
          </div>
          <div className="product-title">
            <h2 className="price">{title}</h2>
          </div>
          <div className="separation" />
          <h4 className="price">
            {currencyFormat} {price}
          </h4>
          <p className="installment">
            {this.getInstallments(installments, currencyFormat, price)}
          </p>
          <button className="add-to-cart" onClick={this.onAddtoCart}>
            Add To Cart
          </button>
        </div>
      </>
    );
  }
}
export default Product;
