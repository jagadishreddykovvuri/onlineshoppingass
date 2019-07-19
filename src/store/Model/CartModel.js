import { observable, computed, reaction, action } from "mobx";
class CartModel {
  store;
  id;
  @observable quantity;
  constructor(store, id, quantity) {
    this.id = id;
    this.quantity = quantity;
  }
}
export default CartModel;
