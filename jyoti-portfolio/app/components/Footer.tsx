import SocialMedia from "../components/SocialMedia";

export default function Footer() {
    return (
        <footer className="container mx-auto bg-white dark:bg-gray-800">
            <p className="text-center py-10 text-slate-900 dark:text-white">
                Let's connect -- <a href="mailto:hello@jyoti.name.np">hello@jyoti.name.np</a>
            </p>
            <div className="w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
                <SocialMedia />
            </div>
            <span className="text-lg text-center block py-10 text-slate-900 dark:text-white">
                &copy; <a href="https://jyoti.name.np/">Jyoti K C</a> 2024, All rights reserved.
            </span>
        </footer>
    );
}