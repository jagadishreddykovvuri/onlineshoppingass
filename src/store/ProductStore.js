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

  @action.bound onChangeorderByValue(filter) {
    this.orderByValue = filter;
  }
  @computed get filteredProducts() {
    let products = [];
    if (this.sizeFilter.length > 0) {
      for (let i = 0; i < this.products.length; i++) {
        if (
          this.sizeFilter.filter(size =>
            this.products[i].availableSizes.includes(size)
          ).length > 0
        ) {
          products.push(this.products[i]);
        }
      }
    } else {
      for (let i = 0; i < this.products.length; i++) {
        products.push(this.products[i]);
      }
    }

    if (this.orderByValue === orderByPrice[1]) {
      return products.sort(function(a, b) {
        return a.price - b.price;
      });
    }
    if (this.orderByValue === orderByPrice[2]) {
      return products
        .sort(function(a, b) {
          return a.price - b.price;
        })
        .reverse();
    }
    return products;
  }
}
export default ProductStore;
