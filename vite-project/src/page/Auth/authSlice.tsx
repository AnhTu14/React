import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: string;
  email: string;
  name: string;
  [key: string]: any;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAUTH: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken || null;
      state.user = action.payload.user || null;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
    },
  },
});
const { reducer, actions } = auth;
export const { setAUTH, loginSuccess, logoutSuccess } = actions;
export default reducer;
