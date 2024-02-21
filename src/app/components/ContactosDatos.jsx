import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import stylesContact from '@/app/styles/Contact.module.css';
import imgVan from '../../../public/img/Profiles/Van/van.jpeg';
import imgJavi from '../../../public/img/Profiles/Javi/javi.jpg';
const RedesSocialesStreamer = () => {
return (
    <section className='redes'>
      <div className={stylesContact.tituloImagen}>
        <h1>Streamer</h1>
        <Image src={imgJavi} alt="Imagen" />
      </div>
        <h2>Redes Sociales</h2>
        <ul className='ulist'>
        <li>
            <Link href="https://www.tiktok.com/@javier0117_?_t=8hcYeqpIDe1&_r=1">Tiktok</Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/javier_0117_/">Instagram</Link>
        </li>
        <li>
            <Link href="https://twitter.com/Javier_0117_">Twitter</Link>
        </li>
        <li>
            <Link href="https://www.twitch.tv/javier0117">Twitch</Link>
        </li>
        <li>
            <Link href="https://www.youtube.com/@JAVIER-hg5hb">Youtube</Link>
        </li>
        </ul>
    </section>
    );
};

const RedesSocialesEditores = () => {
  return (
      <section className='redes'>
        <div className={stylesContact.tituloImagen}>
          <h1>Editor</h1>
          <Image src={imgVan} alt="Imagen" />
        </div>
          <h2>Redes Sociales</h2>
          <ul className='ulist'>
          <li>
              <Link href="https://github.com/GioGioCa?tab=overview&from=2024-02-01&to=2024-02-21">GitHub</Link>
          </li>
          <li>
              <Link href="www.linkedin.com/in/ing-giovanni-gomez">LinkedIn</Link>
          </li>
          </ul>
      </section>
      );
  };

const RedesSociales = () => {
    return (
        <section className='redes'>
            <h2>Redes Sociales</h2>
            <RedesSocialesStreamer />
            <RedesSocialesEditores />
        </section>
        );
    };

export default RedesSociales;
