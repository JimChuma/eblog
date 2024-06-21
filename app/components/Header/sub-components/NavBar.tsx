import Link from "next/link";

export default function NavBar() {
    return <div className="nav-bar">
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </div>
}