import React, { Component } from "react";
import Product from "./Product";
import orderByPrice from "../../constant";
import productStore from "../../store/Instance";
import { observer } from "mobx-react";
import Loader from "./Loader";
import { APIstatus } from "../../constant";
import { cartStore } from "../../store/Instance";
import {
  ProductShow,
  OrderByFIlter,
  OrderBy,
  ProductCount,
  Loading
} from "./StyledComponents";

@observer
class ProductShowCase extends Component {
  onChangeOrderbyFilter = e => {
    productStore.onChangeOrderByValue(e.target.value);
  };
  onLoadingFetch = () => {
    if (productStore.isLoading === APIstatus.LOADING) {
      return (
        <Loading>
          <Loader />
          Loading.......
        </Loading>
      );
    }
  };
  componentDidMount() {}
  afterLoadingData = () => {
    const products = productStore.onFilteredProducts;
    if (productStore.isLoading === APIstatus.SUCCESS) {
      return (
        <>
          <ProductCount>
            <h3>{products.length} Product(s) found</h3>
            <OrderBy>
              <h3>Order by: </h3>
              <OrderByFIlter onClick={this.onChangeOrderbyFilter}>
                {orderByPrice.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </OrderByFIlter>
            </OrderBy>
          </ProductCount>

          <ProductShow>
            {products.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </ProductShow>
        </>
      );
    }
  };

  render() {
    if (productStore.isLoading === APIstatus.FAILURE) {
      return <h1>SOMETHING WENT WRONG</h1>;
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
