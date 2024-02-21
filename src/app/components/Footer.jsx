    import React from "react";

    const Footer = () => {
    return (
    <footer className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5">
        <p className="font-light">Copyright © 2024 Javier 117</p>
        <nav role="menu" style={{ opacity: 1 }}>
            <ul className="flex items-center gap-5">
            <li className="mr-4">
                <a
                href="https://www.twitch.tv/javier0117"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-twitch" /> Twitch
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.youtube.com/@JAVIER-hg5hb"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-youtube" /> YouTube
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.instagram.com/javier_0117_/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-instagram" /> Instagram
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.tiktok.com/@javier0117_?_t=8hcYeqpIDe1&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                >
                <><i className="fa-brands fa-tiktok" /> <span>Tiktok</span></>
                </a>
            </li>
            </ul>
        </nav>
        </div>
    </footer>
    );
    };

    export default Footer;
