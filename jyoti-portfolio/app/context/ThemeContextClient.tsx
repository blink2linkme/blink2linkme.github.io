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
        setIsDarkTheme(prev => {
            const newTheme = !prev;
            if (typeof window !== 'undefined')
                localStorage.setItem('jTheme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('jTheme');
        if (savedTheme)
            setIsDarkTheme(savedTheme === 'dark');
        else
            setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement)
            if (isDarkTheme)
                htmlElement.classList.add('dark');
            else
                htmlElement.classList.remove('dark');
    }, [isDarkTheme]);

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
