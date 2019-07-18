import { observable, computed, reaction, action } from "mobx";
import * as Utils from "../utils";

class ProductStore {
  @observable sizeFilter = [];
  @action.bound onAddorRemoveFilter(filterValue) {
    if (this.sizeFilter.indexOf(filterValue) === -1) {
      this.sizeFilter.push();
    } else {
      this.sizeFilter.remove(filterValue);
    }
    console.log(this.sizeFilter);
  }
}
export default ProductStore;
