"use client";
import { useContext } from "react";
import NavLinks from "./NavLinks";
import SocialMedia from "./socialmedia";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header aria-label="header">
            <div>
                <div>
                    <ThemeSwitcher />
                </div>
                <img src="" />
                <p>I'm Jyoti K C</p>
                <p>A full stack developer with over a decade of experience in designing solutions that drive innovation for industry and society</p>
                <hr />
                <div>
                    <SocialMedia />
                </div>
            </div>
            <nav>
                <NavLinks />
            </nav>
        </header>
    );
}