import Link from "next/link";
import menu from "../config/menu.json";
export default function NavLinks() {
    return (
        <ul>
            {menu.map((m, i) => <li key={i}><Link href={m.path}><i>{m.icon}</i>{m.name}</Link></li>)}
        </ul>
    );
}