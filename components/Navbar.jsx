import Link from "next/link";

export default function navbar() {
    return (
        <nav>
            <Link href="/Home">Home</Link>
            <Link href="/About">About</Link>
        </nav>
    );
}
