
import { createContext, useContext, useEffect } from "react";

type ThemeContextType = {
  theme: "dark";
  setTheme: (theme: "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = "dark";
  const setTheme = () => {}; // No-op function since we're only using dark theme

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any other theme classes
    root.classList.remove("light");
    // Add dark theme class
    root.classList.add("dark");
    
    // Save theme to localStorage (for consistency with previous implementation)
    localStorage.setItem("theme", theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
