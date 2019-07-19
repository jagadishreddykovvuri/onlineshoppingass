import React, { Component } from "react";
import "./styles.css";
class Product extends Component {
  onFreeShipping = value => {
    if (value) {
      return <div class="free-shipping">Free Shipping</div>;
    }
  };
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="each-product">
          <div
            className="product-image"
            style={{
              backgroundImage: "url(" + product.image + ")"
            }}
          >
            {this.onFreeShipping(product.isFreeShipping)}
          </div>
          <div className="product-title">
            <h2 className="price">{product.title}</h2>
          </div>
          <div className="separation" />
          <h4 className="price">
            {product.currencyFormat} {product.price}
          </h4>
          <p className="installment">
            or {product.installments} x {product.currencyFormat}
            {Number((product.price / 9).toFixed(2))}
          </p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </>
    );
  }
}
export default Product;
