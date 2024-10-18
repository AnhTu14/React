import { createSlice } from "@reduxjs/toolkit";
interface ProductState {
  categories: Array<any>; // Mảng chứa các đối tượng với cấu trúc bất kỳ
}
const initialState: ProductState = {
  categories: [],
};
const product = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});
const { reducer, actions } = product;
export const { addCategory } = actions;
export default reducer;
