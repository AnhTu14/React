import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import cartApi from "@/api/cart";
export const postCart = createAsyncThunk(
  "cart/postCart",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);
    try {
      const res = await cartApi.postCart(payload);
      if (res.success) {
        console.log("res.cart", res.cart);
        return res.cart;
      } else {
        return rejectWithValue(res.message || "Something went wrong.");
      }
    } catch (error) {
      // Trả về lỗi nếu có ngoại lệ trong quá trình gọi API
      return rejectWithValue(error.message || "Failed to post card.");
    }
  }
);
const hanldeAddListCart = (state, listProduct) => {
  // Tạo một bản sao mới của state.products
  const listProductCart = state.products.map((product) => ({ ...product }));

  listProduct.forEach((product) => {
    const existingProductIndex = listProductCart.findIndex(
      (productCart) => productCart.id === product.id
    );
    if (existingProductIndex !== -1) {
      // Tạo một bản sao của sản phẩm để cập nhật countCart
      const updatedProduct = {
        ...listProductCart[existingProductIndex],
        countCart: listProductCart[existingProductIndex].countCart + 1,
      };
      listProductCart[existingProductIndex] = updatedProduct;
    } else {
      listProductCart.push(product);
    }
    const listIdProduct = listProductCart.map(({ id, countCart }) => ({
      id,
      count: countCart,
    }));
    localStorage.setItem("listIdProduct", JSON.stringify(listIdProduct));
  });

  return {
    ...state,
    products: listProductCart,
  };
};
const handleUpdateProduct = (state, producUpdate) => {
  const { id, countCart } = producUpdate;
  // Sao chép state
  const listProductCart = state.products.map((product) => ({ ...product }));
  const existingProductIndex = listProductCart.findIndex(
    (product) => product.id === id
  );
  if (existingProductIndex !== -1) {
    // Tạo một bản sao của sản phẩm để cập nhật countCart
    const updatedProduct = {
      ...listProductCart[existingProductIndex],
      countCart: parseInt(countCart) || 1,
    };
    listProductCart[existingProductIndex] = updatedProduct;
    const listIdProduct = listProductCart.map(({ id, countCart }) => ({
      id,
      count: countCart,
    }));
    console.log("listIdProduct1111", listIdProduct);
    localStorage.setItem("listIdProduct", JSON.stringify(listIdProduct));
  }

  return {
    ...state,
    products: listProductCart,
  };
};
const handleDeleteProduct = (state, productId) => {
  state.products = state.products.filter((product) => product.id !== productId);
  const listIdProductUpdate = state.products.map(({ id, countCart }) => ({
    id,
    count: countCart,
  }));
  if (listIdProductUpdate)
    window.localStorage.setItem(
      "listIdProduct",
      JSON.stringify(listIdProductUpdate)
    );
  return state;
};

const initialState = {
  products: [],
};
const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {},
    updateCart: (state, action) => {
      const producUpdate = action.payload;
      return handleUpdateProduct(state, producUpdate);
    },
    deleteCart: (state, action) => {
      const productId = action.payload;
      return handleDeleteProduct(state, productId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCart.fulfilled, (state, action) => {
        console.log("action", action);
        const listProduct = action.payload;
        if (listProduct) {
          return hanldeAddListCart(current(state), listProduct);
        }
      })
      .addCase(postCart.rejected, (state, action) => {
        state.error =
          action.payload || "An error occurred while posting the card.1";
      });
  },
});

const { reducer, actions } = cart;
export const { addCart, updateCart, deleteCart } = actions;
export default reducer;
