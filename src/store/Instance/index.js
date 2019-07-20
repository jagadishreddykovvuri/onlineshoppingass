import ProductStore from "../ProductStore";
import CartStore from "../CartStore";
import CartModel from "../Model/CartModel";
const productStore = new ProductStore();
const cartStore = new CartStore();
const cartModel = new CartModel();
export { productStore as default, cartStore, cartModel };
