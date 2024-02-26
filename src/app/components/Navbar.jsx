import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="flex justify-end h-full mt-4 mx-auto relative">
            <nav className="flex h-full items-center white-text">
            <div className="mr-auto">
                <Link href='/'>
                <Image
                    src={"/img/header.png"}
                    width={100}
                    height={100}
                    alt="Logo"
                    priority={50}
                />
                </Link>
            </div>
            <div className="nav-links flex items-center justify-end space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            </nav>
        </header>
    );
}
