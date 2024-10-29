import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/page/Auth/authSlice";
import productReducer from "@/page/product/productSlice";
import cartReducer from "@/page/Cart/cartSlice";
const rootReducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
