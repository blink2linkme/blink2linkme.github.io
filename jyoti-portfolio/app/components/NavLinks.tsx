import Link from "next/link";
import menus from "../config/menu.json";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavLinks() {
    const pathName = usePathname();
    return (
        <nav className="flex items-center space-x-6">
           {
            menus.map((menu, index) => <Link key={index} href={menu.path ?? ''} className={`hover:text-blue-500 dark:hover:text-blue-400${pathName == menu.path ? ' active:bg-violet-700 underline': ''}`}>{menu.name}</Link>)
           }
            <ThemeSwitcher />
        </nav>
       
    );
}