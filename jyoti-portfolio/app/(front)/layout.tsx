// app/(front)/layout.tsx

"use client"; // Ensure this is a client component

import React from 'react';
import { ThemeProvider } from '../context/ThemeContextClient'; // Adjust path as necessary

const FrontLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <div>
                <h2>Front Layout</h2>
                {children}
            </div>
        </ThemeProvider>
    );
};

export default FrontLayout;

