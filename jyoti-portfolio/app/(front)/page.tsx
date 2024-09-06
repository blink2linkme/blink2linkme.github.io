// app/(front)/page.tsx

"use client"; // Ensure this is a client component

import React from 'react';
// import { useTheme } from '../context/ThemeContextClient'; // Adjust path as necessary

const FrontPage: React.FC = () => {
    // const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className="container mx-auto rounded p-6 items-center justify-between shadow ring-1 ring-slate-900/5">
                <p className="text-center pt-10 text-slate-900 dark:text-white">
                    “If you stop learning, you stop growing."
                </p>
                <p className="italic text-center text-slate-900 dark:text-white">- Benjamin Franklin</p>
                <p className="pt-10 text-center text-slate-900 dark:text-white">I am a seasoned full-stack developer with expertise across a wide range of technical fields, <br />including data engineering, front-end development, mobile app development, and cloud computing</p>
            </div>
        </div >
    );
};

export default FrontPage;
