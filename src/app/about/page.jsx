export const mensaje = () => {
  return (
    <div  className="mensaje">
      <h1>Hola soy Javier!!!</h1>
      <p>
        Jugador profesional en Apex con una gran habilidad en
        caer e irme PAL lobby De día soy inge y de noche me gusta hacer stream
        de juegos variados como mi serie de llegando a diamante en halo wars,
        unas partidas del apextoso siempre ayudan, me gustan los juegos de
        estrategia (RTS ), Gestión.
      </p>
    </div>
  );
};
const About = () => {
  // Contenido de tu página About
  return (
    <main>
      <h1>About Page</h1>
      {/* Llamada a la función que devuelve el contenido */}
      {mensaje()}
      {/* Otros componentes o contenido */}
    </main>
  );
};

export default About;
