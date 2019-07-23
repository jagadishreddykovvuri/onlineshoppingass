import React, { Component } from "react";
import Product from "./Product";
import orderByPrice from "../../constant";
import productStore from "../../store/Instance";
import "./styles.css";
import { observer } from "mobx-react";
import Loader from "./Loader";

@observer
class ProductShowCase extends Component {
  onChangeOrderbyFilter = e => {
    productStore.onChangeOrderByValue(e.target.value);
  };
  onLoadingFetch = () => {
    if (productStore.isLoading) {
      return (
        <div className="loading">
          <Loader />
          Loading.......
        </div>
      );
    }
  };
  afterLoadingData = () => {
    const products = productStore.onFilteredProducts;
    if (!productStore.isLoading && productStore.error === null) {
      return (
        <>
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
              <Product {...product} />
            ))}
          </div>
        </>
      );
    }
  };

  render() {
    if (productStore.error !== null) {
      return <h1>TypeError: Failed to fetch</h1>;
    } else {
      return (
        <div>
          {this.onLoadingFetch()}
          {this.afterLoadingData()}
        </div>
      );
    }
  }
}
export default ProductShowCase;
