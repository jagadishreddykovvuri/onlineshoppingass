import React, { Component } from "react";
import Cart from "./Cart";
import Product from "./Product";
import orderByPrice from "../../constant";
import productStore from "../../Instance";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class ProductShowCase extends Component {
  onChangeOrderbyFilter = e => {
    productStore.onChangeorderByValue(e.target.value);
  };
  render() {
    const products = productStore.filteredProducts;

    return (
      <>
        <Cart />
        <div>
          <div className="header-filter">
            <h3>{products.length} Product(s) found</h3>
            <div className="orderby">
              <h3 className="gap">Order by: </h3>
              <select
                className="order-by-filter"
                onClick={this.onChangeOrderbyFilter}
              >
                {orderByPrice.map(option => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="product-show">
            {products.map(product => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default ProductShowCase;
