import mediaRunningReducer from "./mediaRunning/mediaRunning";
import products from "./mediaRunning/product";
import getProducts from "./mediaRunning/getProduct";


const rootReducers = {
  mediaRunning: mediaRunningReducer,
  products: products,
  getProducts: getProducts,
};

export default rootReducers;
