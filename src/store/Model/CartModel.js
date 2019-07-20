import { observable, computed, reaction, action } from "mobx";
class CartModel {
  store;
  id;
  @observable quantity;
  constructor(store, id, quantity) {
    this.store = store;
    this.id = id;
    this.quantity = quantity;
    console.log("constructor", store);
  }
  deleteProduct = () => {
    console.log("deleteProduct", this.store);
    this.store.cartProducts.remove(this);
  };
}
export default CartModel;
