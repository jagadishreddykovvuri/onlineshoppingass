import ProductStore from "../ProductStore";
import CartStore from "../CartStore";
import Authenticationuser from "../Authenticationuser";
const productStore = new ProductStore();
const cartStore = new CartStore();
const authenticationuser = new Authenticationuser();
export { productStore as default, cartStore, authenticationuser };
