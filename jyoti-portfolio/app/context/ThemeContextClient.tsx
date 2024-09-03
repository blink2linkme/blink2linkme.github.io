// context/ThemeContextClient.tsx

"use client"; // Ensure this is a client component

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
        if (isDarkTheme) {
            document!.querySelector("body")!.classList.add("dark-theme");
            document!.querySelector("body")!.classList.remove("light-theme");
        } else {
            document!.querySelector("body")!.classList.add("light-theme");
            document!.querySelector("body")!.classList.remove("dark-theme");
        }
    } 



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
