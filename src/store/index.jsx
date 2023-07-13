import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/slice";
import checkoutReducer from "./checkout/slice";

export default configureStore({
  reducer: {
    product: productReducer,
    checkout: checkoutReducer,
  },
});
