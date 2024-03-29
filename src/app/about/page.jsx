import React from "react";
import stylesAbout from "../styles/about.module.css";
import Image from "next/image";

//Components

export const mensaje = () => {
  return (
    <div className={stylesAbout.container}>
      <div className={stylesAbout.content}>
        <h1 className={stylesAbout.titulo}>Hola soy Javier117!!!</h1>
        <p className={stylesAbout.parrafo}>
          Jugador profesional en Apex con una gran habilidad para caer e irme
          pal lobby. De día soy ingeniero y de noche me gusta hacer stream de
          juegos variados, como mi serie de Llegando a Diamante en Halo Wars 2
          y unas partidas del APEXtoso siempre ayudan. Me gustan los juegos de
          estrategia (RTS), gestión, entre muchos otros.
        </p>
      </div>
      <div className={stylesAbout.image}>
        <Image
          src={"/img/aboutIMG.jpeg"}
          width={100}
          height={100}
          alt="Inge"
          priority={50}
        ></Image>
      </div>
    </div>
  );
};
const About = () => {
  return <main className={stylesAbout.aboutMain}>{mensaje()}</main>;
};

export default About;
