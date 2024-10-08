import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateUser: "",
  authLoading: true,
  isAuthenticated: false,
  user: null,
};

const authCtm = createSlice({
  name: "authCtm",
  initialState: initialState,
  reducers: {
    setAUTH: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      return { ...state, authLoading: false, isAuthenticated, user };
    },
    logOut: (state, action) => {
      return initialState;
    },
  },
});

const { reducer, actions } = authCtm;
export const { setAUTH, logOut } = actions;
export default reducer;
