import { useState, createContext, ReactNode, useContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
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

export { ThemeProvider, useTheme, ThemeContext };
