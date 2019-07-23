import { observable, computed, reaction, action } from "mobx";
import CartModel from "./Model/CartModel";
import { products } from "../constant";
import productStore from "./Instance";
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
    let total = [0, 0];
    productStore.products.forEach(product => {
      if (this.cartProducts.get(product.id)) {
        total[0] = total[0] + this.cartProducts.get(product.id) * product.price;
        total[1] = total[1] + product.installments;
      }
    });
    return total;
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
