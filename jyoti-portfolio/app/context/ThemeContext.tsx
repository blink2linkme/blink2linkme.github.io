"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        console.log(isDarkTheme);
        setIsDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context == undefined)
        throw new Error("useTheme must be used within a Theme Provider");
    return context;
}