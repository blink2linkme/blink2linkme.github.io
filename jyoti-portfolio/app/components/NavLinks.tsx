import Link from "next/link";
import menu from "../config/menu.json";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathName = usePathname();
    return (
        <nav className="p-6">
            <ul className="flex justify-center sm:justify-end">
                {
                    menu.map((m, i) =>
                        <li key={i} className={`${
                            i > 0 ? 'border-l-2 border-gray-300 dark:border-slate-600' : ''
                          } ${
                            pathName === m.path ? 'active-link' : ''
                          }`}>
                            <Link href={m.path} className="link dark:text:slate-200 text:gray-700 text-lg active-link:font-black px-3 transition-all duration-500 hover:-translate-y-2 line-height-10 hover:font-bold hover:scale-150 text-underline">{m.name}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}