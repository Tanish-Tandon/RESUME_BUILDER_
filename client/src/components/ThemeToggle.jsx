// import React from 'react';
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-500 dark:text-slate-400 outline-none"
    >
      {darkMode ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
    </button>
  );
};

export default ThemeToggle;