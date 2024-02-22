import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import stylesContact from '@/app/styles/Contact.module.css';
import imgVan from '../../../public/img/Profiles/Van/van.jpeg';
import imgJavi from '../../../public/img/Profiles/Javi/javi.jpg';
const RedesSocialesStreamer = () => {
return (
    <section>
        <div className={stylesContact.container}>
            <h1 className={stylesContact.titulo}>Streamer</h1>
            <Image src={imgJavi} alt="Imagen" className={stylesContact.image} />
        </div>
        <ul className={stylesContact.lista}>
        <li>
            <Link href="https://www.tiktok.com/@javier0117_?_t=8hcYeqpIDe1&_r=1">
            <i className="fab fa-tiktok"></i> Tiktok</Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/javier_0117_/">
            <i className="fab fa-instagram"></i> Instagram</Link>
        </li>
        <li>
            <Link href="https://twitter.com/Javier_0117_">
            <i className="fab fa-twitter"></i> Twitter</Link>
        </li>
        <li>
            <Link href="https://www.twitch.tv/javier0117">
            <i className="fab fa-twitch"></i> Twitch</Link>
        </li>
        <li>
            <Link href="https://www.youtube.com/@JAVIER-hg5hb">
            <i className="fab fa-youtube"></i> Youtube</Link>
        </li>
        </ul>
    </section>
    );
};

const RedesSocialesEditores = () => {
return (
    <section>
    <div className={stylesContact.container}>
        <h1 className={stylesContact.titulo}>Editor</h1>
        <Image src={imgVan} alt="Imagen" className={stylesContact.image} />
    </div>
        <ul className={stylesContact.lista}>
        <li className={stylesContact.lista.li}>
            <Link href="https://github.com/GioGioCa?tab=overview&from=2024-02-01&to=2024-02-21">
            <i className="fab fa-github"></i> GitHub</Link>
        </li>
        <li>
            <Link href="www.linkedin.com/in/ing-giovanni-gomez">
            <i className="fab fa-linkedin"></i> LinkedIn</Link>
        </li>
        </ul>
    </section>
    );
};

const RedesSociales = () => {
    return (
        <section className={stylesContact.redes}>
            <RedesSocialesStreamer />
            <RedesSocialesEditores />
        </section>
        );
    };

export default RedesSociales;
