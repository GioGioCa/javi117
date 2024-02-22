import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
return (
    <header className="flex h-full mt-4 m-auto relative">
        <nav className="flex h-full mt-4 w-full m-auto relative">
            <Link href='/'>
                <Image
                        src={"/img/header.png"}
                        width={100}
                        height={100}
                        alt="Logo"
                        priority={50}
                        >
                </Image>
            </Link>
            <div className="nav-links absolute bottom-0 right-0">
                <Link href="/">Home </Link>
                <Link href="/about">About </Link>
                <Link href='/contact'>Contact </Link>
            </div>
        </nav>
    </header>
);
}