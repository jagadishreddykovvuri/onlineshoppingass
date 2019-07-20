import React, { Component } from "react";
import { products } from "../../../../constant";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class CartProduct extends Component {
  findProductDetails = () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === this.props.id) {
        return i;
      }
    }
  };
  onDeleteProduct = () => {
    this.props.cartItem.delete(this.props.id);
  };
  render() {
    console.log(1);
    console.log(1);
    console.log(1);
    let index = this.findProductDetails();
    return (
      <div className="each-cart-item">
        <div>
          <img className="product-photo" src={products[index].image} />
        </div>
        <div className="product-details">
          <h2 className="title-color">{products[index].title}</h2>
          <div className="detailstyle">
            <p>
              {products[index].availableSizes[0]} | {products[index].style}
            </p>
            <p>Quatity:{this.props.cartItem.get(this.props.id)}</p>
          </div>
        </div>
        <div className="delete-with-price">
          <img
            onClick={this.onDeleteProduct}
            className="delete-icon"
            src="/assets/error.png"
          />
          <p className="price">
            {products[index].currencyFormat + products[index].price}
          </p>
        </div>
      </div>
    );
  }
}
export default CartProduct;
