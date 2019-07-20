import { observable, computed, reaction, action } from "mobx";
import CartModel from "./Model/CartModel";
import { products } from "../constant";
class CartStore {
  @observable cartProducts = [];
  @action.bound onAddProductToCart(id, cost) {
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
  }
  @computed get subTotal() {
    var total = 0;

    if (this.cartProducts.length > 0) {
      console.log(this.cartProducts[0].id);
      for (let i = 0; i < this.cartProducts.length; i++) {
        for (let j = 0; j < products.length; j++) {
          console.log(products[j].id);
          if (products[j].id === this.cartProducts[i].id) {
            total = total + this.cartProducts[i].quantity * products[j].price;
          }
        }
      }
    }
    return total.toFixed(2);
  }
  @computed get cartItemCount() {
    let count = 0;
    this.cartProducts.forEach(element => {
      count = count + element.quantity;
    });
    return count;
  }
}
export default CartStore;
