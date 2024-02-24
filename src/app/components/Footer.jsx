import React from "react";

const Footer = () => {
    return (
    <footer className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5 relative">
        <p className="font-light md:pr-5 md:pb-5 md:pl-5">
            Copyright © 2024 Javier 117
        </p>
        <nav
            className="footer-nav"
            role="menu"
        >
            <ul className="flex items-center gap-5 md:absolute md:bottom-0 md:right-0 md:mb-5 md:mr-5 md:align-top md:transform md:-translate-y-1/2">
            <li className="mr-4">
                <a
                href="https://www.twitch.tv/javier0117"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-twitch text-3xl" />
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.youtube.com/@JAVIER-hg5hb"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-youtube text-3xl" />
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.instagram.com/javier_0117_/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-instagram text-3xl" />
                </a>
            </li>
            <li className="mr-4">
                <a
                href="https://www.tiktok.com/@javier0117_?_t=8hcYeqpIDe1&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fa-brands fa-tiktok text-3xl" />
                </a>
            </li>
            </ul>
        </nav>
        </div>
    </footer>
    );
};

export default Footer;
