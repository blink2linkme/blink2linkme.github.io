import Link from "next/link";
import menu from "../config/menu.json";
export default function NavLinks() {
    return (
        <nav className="bg-white dark:bg-gray-800 flex justify-end space-x-4">
            {menu.map((m, i) =>
                <li key={i}>
                    <Link href={m.path} className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"><i>{m.icon}</i>{m.name}</Link>
                </li>)}
        </nav>
    );
}