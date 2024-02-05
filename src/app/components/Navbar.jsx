import Link from "next/link";
import Image from "next/image";
/* <Link href={'/'}>
                <Image width={32} height={32} src='/../../../public/img/header.png' alt='img-logo'></Image>
            </Link> */
            // <img class="h-auto w-auto sm:h-10" src="../../../public/icon-192x192.png" alt='logo'></img>

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