import { useState, createContext, ReactNode, useContext } from "react";

// Định nghĩa kiểu context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Tạo context với kiểu đã định nghĩa
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Định nghĩa props cho ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Gán kiểu rõ ràng cho value
  const value: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook để sử dụng ThemeContext
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
