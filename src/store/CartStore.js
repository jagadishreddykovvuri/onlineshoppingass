import { observable, computed, reaction, action } from "mobx";
import CartModel from "./Model/CartModel";
class CartStore {
  @observable cartProducts = [];
  @action.bound onAddProductToCart(id) {
    let flag = true;
    if (this.cartProducts.length === 0) {
      this.cartProducts.push(new CartModel(this, id, 1));
    } else {
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (this.cartProducts[i].id === id) {
          flag = false;
          this.cartProducts[i].quantity += 1;
        }
      }
      if (flag) {
        this.cartProducts.push(new CartModel(this, id, 1));
      }
    }
    console.log(this.cartProducts);
  }
}
export default CartStore;
