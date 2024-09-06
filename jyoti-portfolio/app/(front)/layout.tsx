// app/(front)/layout.tsx

"use client"; // Ensure this is a client component

import React from 'react';
import { ThemeProvider } from '../context/ThemeContextClient'; // Adjust path as necessary
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeSwitcher from "../components/ThemeSwitcher";

const FrontLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default FrontLayout;

