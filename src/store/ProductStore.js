import { observable, computed, reaction, action } from "mobx";
class ProductStore {
  @observable sizeFilter = [];
  @action.bound onAddorRemoveFilter(filterValue) {
    if (this.sizeFilter.indexOf(filterValue) === -1) {
      this.sizeFilter.push(filterValue);
    } else {
      this.sizeFilter.remove(filterValue);
    }
    console.log(this.sizeFilter);
  }
}
export default ProductStore;
