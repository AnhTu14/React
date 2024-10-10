import { RouterProvider } from "react-router-dom";
import router from "./routes/index.js"; // Import router từ folder routes
import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "@/themes/theme.ts";
import { CssBaseline } from "@mui/material";
import { useTheme } from "./context/themeContext.js";
import "./index.scss";

function App() {
  const { theme } = useTheme();
  const themeMode = theme === "light" ? light : dark;
  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
