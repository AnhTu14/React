import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/page/user/userSlice";
import productReducer from "@/page/product/productSlice";
const rootReducer = {
  auth: userReducer,
  product: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
