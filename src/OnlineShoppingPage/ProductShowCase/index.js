import React, { Component } from "react";
import Product from "./Product";
import orderByPrice from "../../constant";
import productStore from "../../store/Instance";
import "./styles.css";
import { observer } from "mobx-react";
import Loader from "./Loader";
import { APIstatus } from "../../constant";

@observer
class ProductShowCase extends Component {
  onChangeOrderbyFilter = e => {
    productStore.onChangeOrderByValue(e.target.value);
  };
  onLoadingFetch = () => {
    if (productStore.isLoading === APIstatus.LOADING) {
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
    if (productStore.isLoading === APIstatus.SUCCESS) {
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
    if (productStore.isLoading === APIstatus.FAILURE) {
      return <h1>INTERNET___DISCONNECTED</h1>;
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
