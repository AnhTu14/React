import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "@/app/store.ts";
import "./index.scss";
import { ThemeProvider } from "@/context/themeContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
