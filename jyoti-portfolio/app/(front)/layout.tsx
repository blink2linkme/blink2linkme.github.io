// app/(front)/layout.tsx

"use client"; // Ensure this is a client component

import React from 'react';
import { ThemeProvider } from '../context/ThemeContextClient'; // Adjust path as necessary
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'

const FrontLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="16x16" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div className="bg-white dark:bg-gray-800 dark:text-white">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default FrontLayout;

