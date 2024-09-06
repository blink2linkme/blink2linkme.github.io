"use client";
import { useContext } from "react";
import NavLinks from "./NavLinks";
import SocialMedia from "../components/SocialMedia";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-800">
            <div className="container mx-auto rounded p-6 flex items-center justify-between shadow ring-1 ring-slate-900/5">
                <div className="sm:w-1/3">
                    <Image src="https://i.pravatar.cc/500" height={500} width={500} alt="Profile" className="rounded" />
                </div>
                <div className="sm:w-2/3 ml-4">
                    <h1 className="text-slate-900 dark:text-white mt-5 text-3xl font-bold tracking-tight text-right">Hello, I'm Jyoti!</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 text-xl font-semibold">A full stack developer with over a decade of experience in designing solutions that drive innovation for industry and society</p>
                    <div className="relative min-w-full border-t-2 mt-4 border-slate-400 before:content-[''] before:absolute before:left-0 before:-top-1.5 before:min-w-2 before:min-h-2 before:rounded-full before:bg-slate-400"></div>
                    <div className="w-full h-auto py-8 flex items-center justify-end gap-4 flex-wrap">
                        <SocialMedia />
                    </div>
                </div>
            </div>
            <NavLinks />
        </header>
    );
}