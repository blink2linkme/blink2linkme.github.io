import SocialMedia from "../components/SocialMedia";

const currentYear = new Date(Date.now()).getFullYear();
export default function Footer() {
    return (
        <footer className="container mx-auto pt-5 inset-x-0 bottom-0">
            <p className="text-center py-0 text-slate-900 dark:text-white">
                Let&apos;s connect -- <a href="mailto:hello@jyoti.name.np">jyotikc017@gmail.com</a>
            </p>
            <div className="w-full h-auto py-4 flex items-center justify-center gap-4 flex-wrap">
                <SocialMedia />
            </div>
            <span className="text-center block py-4 text-slate-900 dark:text-white">
                &copy; <a href="https://jyoti.name.np/">Jyoti K C</a> { currentYear }, All rights reserved.
            </span>
        </footer>
    );
}