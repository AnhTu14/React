import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/page/user/userSlice";
const rootReducer = {
  auth: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
