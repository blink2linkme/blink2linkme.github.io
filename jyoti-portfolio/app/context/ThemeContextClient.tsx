// context/ThemeContextClient.tsx

"use client"; // Ensure this is a client component

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    const initializeDark = () => {
        if (isDarkTheme) {
            document!.querySelector("html")!.classList.add("dark");
        } else {
            document!.querySelector("html")!.classList.remove("dark");
        }
    };

    useEffect(() => initializeDark());

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
