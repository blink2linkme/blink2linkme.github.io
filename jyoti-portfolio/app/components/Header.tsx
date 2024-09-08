"use client";
import NavLinks from "./NavLinks";
import SocialMedia from "../components/SocialMedia";
import Image from 'next/image';
import Link from 'next/link';
import j from '../../public/j.svg'
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-800">
            <div className="container mx-auto">
                <nav className="border-solid border-gray-200 w-full border-b py-3 z-10 bg-inherit">
                    <div className="w-full flex flex-row justify-between">
                        <Link href="/" className="flex-items-center text-gray-500 rounded-lg focus:outline-none focus:ring-gray-200 dark:text-white dark:hover-bg-gray-700 dark:focus:ring-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className="inline-flex">
                                <path d="M 90 30 L 90 10 L10 10 L 10 90 L 90 90 L 90 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <text x="50%" y="50%" textAnchor="middle" stroke="currentColor" strokeWidth="1px" dy=".3em" fontSize="40" fill="none">J</text>
                            </svg>
                            <span className="text-2xl bold">yoti</span>
                        </Link>
                        <ThemeSwitcher />
                    </div>
                </nav>

                <div className="rounded p-6 flex flex-col sm:flex-row items-center justify-between shadow ring-1 ring-slate-900/5">
                    <div className="sm:w-1/3">
                        <Image src="https://i.pravatar.cc/500" height={500} width={500} alt="Profile" className="rounded" />
                    </div>
                    <div className="sm:w-2/3 sm:ml-4">
                        <h1 className="text-slate-900 dark:text-white mt-5 text-3xl font-bold tracking-tight text-center sm:text-right">Hello, I'm Jyoti!</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 text-xl font-semibold text-justify">A full stack developer with over a decade of experience in designing solutions that drive innovation for industry and society</p>
                        <div className="relative min-w-full border-t-2 mt-4 border-slate-400 before:content-[''] before:absolute before:left-0 before:-top-1.5 before:min-w-2 before:min-h-2 before:rounded-full before:bg-slate-400"></div>
                        <div className="w-full h-auto py-8 flex items-center justify-center sm:justify-end gap-4 flex-wrap">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <NavLinks />
            </div>
        </header>
    );
}