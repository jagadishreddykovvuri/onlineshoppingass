import { observable, computed, reaction, action } from "mobx";
import CartModel from "./Model/CartModel";
import { products } from "../constant";
class CartStore {
  @observable cartProducts = new Map();
  @action.bound onAddProductToCart(id) {
    if (this.cartProducts.get(id)) {
      this.cartProducts.set(id, this.cartProducts.get(id) + 1);
    } else {
      this.cartProducts.set(id, 1);
    }
  }
  @computed get subTotal() {
    let total = 0;
    products.forEach(product => {
      if (this.cartProducts.get(product.id)) {
        total = total + this.cartProducts.get(product.id) * product.price;
      }
    });
    return total.toFixed(2);
  }
  @action.bound deleteProduct(id) {
    this.cartProducts.delete(id);
  }

  @computed get cartItemCount() {
    let count = 0;
    this.cartProducts.forEach(element => {
      count = count + element;
    });
    return count;
  }
}
export default CartStore;
