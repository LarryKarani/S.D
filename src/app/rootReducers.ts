import mediaRunningReducer from "./mediaRunning/mediaRunning";
import products from "./mediaRunning/product";

const rootReducers = {
  mediaRunning: mediaRunningReducer,
  products: products,
};

export default rootReducers;
