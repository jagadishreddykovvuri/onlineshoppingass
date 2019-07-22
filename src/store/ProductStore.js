import { observable, computed, reaction, action } from "mobx";
import orderByPrice from "../constant";
import { products } from "../constant";
class ProductStore {
  products = products;
  @observable sizeFilter = [];
  @observable orderByValue;
  @action.bound onAddorRemoveFilter(filterValue) {
    if (this.sizeFilter.indexOf(filterValue) === -1) {
      this.sizeFilter.push(filterValue);
    } else {
      this.sizeFilter.remove(filterValue);
    }
  }

  @action.bound onChangeOrderByValue(filter) {
    this.orderByValue = filter;
  }
  @computed get onFilteredProducts() {
    let products = [];
    if (this.sizeFilter.length > 0) {
      this.products.forEach(product => {
        if (
          this.sizeFilter.filter(size => product.availableSizes.includes(size))
            .length > 0
        ) {
          products.push(product);
        }
      });
    } else {
      this.products.forEach(product => {
        products.push(product);
      });
    }

    if (this.orderByValue === orderByPrice[1]) {
      return products.sort(function(a, b) {
        return a.price - b.price;
      });
    }
    if (this.orderByValue === orderByPrice[2]) {
      return products.sort(function(a, b) {
        return b.price - a.price;
      });
    }
    return products;
  }
}
export default ProductStore;
