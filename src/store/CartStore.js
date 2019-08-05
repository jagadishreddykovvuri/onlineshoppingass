import { observable, computed, reaction, action } from "mobx";
import productStore from "./Instance";
class CartStore {
  @observable cartProducts = new Map();
  mapToObj = inputMap => {
    let obj = {};
    inputMap.forEach(function(value, key) {
      obj[key] = value;
    });
    return obj;
  };
  obj_to_map = obj => {
    const mp = new Map();
    Object.keys(obj).forEach(k => {
      mp.set(parseInt(k), obj[k]);
    });
    return mp;
  };
  @action.bound onGetCartItems() {
    const getcart = JSON.parse(localStorage.getItem("cartItems"));
    if (getcart) {
      this.cartProducts = this.obj_to_map(getcart);
    }
  }
  @action.bound setCartProducts() {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(this.mapToObj(this.cartProducts))
    );
  }
  @action.bound onAddProductToCart(id) {
    if (this.cartProducts.get(id)) {
      this.cartProducts.set(id, this.cartProducts.get(id) + 1);
    } else {
      this.cartProducts.set(id, 1);
    }
    this.setCartProducts();
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
