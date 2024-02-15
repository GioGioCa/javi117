import stylesAbout from '../styles/about.module.css';
import Image from 'next/image';

export const mensaje = () => {
  return (
    <div className={stylesAbout.container}>
      <div className={stylesAbout.content}>
        <h1>Hola soy Javier!!!</h1>
        <p className={stylesAbout.parrafo}>
          Jugador profesional en Apex con una gran habilidad en caer e irme PAL
          lobby De día soy inge y de noche me gusta hacer stream de juegos
          variados como mi serie de llegando a diamante en halo wars, unas
          partidas del apextoso siempre ayudan, me gustan los juegos de
          estrategia (RTS), Gestión.
        </p>
      </div>
      <div className={stylesAbout.image}>
        <Image
          src={"/img/aboutIMG.jpeg"}
          width={100}
          height={100}
          alt="Inge"
          priority={50}>
        </Image>
        </div>
    </div>
  );
};
const About = () => {
  // Contenido de tu página About
  return (
    <main className={stylesAbout.aboutMain}>
      {/* Llamada a la función que devuelve el contenido */}
      {mensaje()}
      {/* Otros componentes o contenido */}
    </main>
  );
};

export default About;
