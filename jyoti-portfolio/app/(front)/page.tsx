// app/(front)/page.tsx

"use client"; // Ensure this is a client component

import React from 'react';
import { useTheme } from '../context/ThemeContextClient'; // Adjust path as necessary

const FrontPage: React.FC = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>
                {isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <p>Welcome to the Front Page!</p>
        </div>
    );
};

export default FrontPage;
