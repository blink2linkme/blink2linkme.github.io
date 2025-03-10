import React from 'react';
import NavLinks from "./NavLinks";

const  Header = () => 
        <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto flex justify-between items-center py-6 px-6">
                <h1 className="text-2xl font-bold gradient-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100" className="inline-flex">
                        <path d="M 90 30 L 90 10 L10 10 L 10 90 L 90 90 L 90 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <text x="50%" y="50%" textAnchor="middle" stroke="currentColor" strokeWidth="1px" dy=".3em" fontSize="40" fill="none">J</text>
                    </svg>
                    <span className="text-lg bold">yoti</span>
                </h1>
                <NavLinks />
            </div>
        </header>
export default Header;