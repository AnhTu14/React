import { RouterProvider } from "react-router-dom";
import router from "./routes/index.js"; // Import router từ folder routes
import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "@/themes/theme.ts";
import { CssBaseline } from "@mui/material";
import "./index.scss";

function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
