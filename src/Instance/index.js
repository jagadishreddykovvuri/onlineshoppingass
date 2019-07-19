import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";
const productStore = new ProductStore();
const cartStore = new CartStore();
export { productStore as default, cartStore };
