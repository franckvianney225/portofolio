import { useState, createContext, useContext, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  // Apply dark mode classes on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-black');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-black');
      document.body.classList.add('bg-white');
      // Ajout des classes pour le mode jour
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-black');
      document.documentElement.classList.remove('light-mode');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 dark:border-black/20 shadow-xl hover:bg-white/20 transition-all duration-300 z-[999] pointer-events-auto"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-white" />
      ) : (
        <Moon className="w-6 h-6 text-black" />
      )}
    </motion.button>
  );
}
