import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";
import CartModel from "../store/Model/CartModel";
const productStore = new ProductStore();
const cartStore = new CartStore();
const cartModel = new CartModel();
export { productStore as default, cartStore, cartModel };
