import { RouterProvider } from "react-router-dom";
import router from "./routes/index.js"; // Import router từ folder routes
import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "@/themes/theme.ts";
import { CssBaseline } from "@mui/material";
import { useTheme } from "./context/themeContext.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAUTH, logoutSuccess } from "@/page/Auth/authSlice.js";
import "./index.scss";
import authApi from "./api/auth.js";

function App() {
  const { theme } = useTheme();
  const themeMode = theme === "light" ? light : dark;
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const fetchUserData = async () => {
        try {
          const res = await authApi.getUser();
          dispatch(
            setAUTH({
              user: res.user,
            })
          );
        } catch (error) {
          console.error("Token không hợp lệ hoặc hết hạn:", error);
        }
      };

      fetchUserData();
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
