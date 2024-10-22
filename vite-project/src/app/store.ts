import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/page/Auth/AuthSlice";
import productReducer from "@/page/product/productSlice";
const rootReducer = {
  auth: authReducer,
  product: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
