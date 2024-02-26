import ClipsTwitch from "./components/ClipsTwitch";
import ClipsYoutube from "./components/ClipsYoutube";
import ClipsTiktok from "./components/ClipsTiktok";
import Introduccion from "./components/Introduccion";
// Add the 'use client' directive at the top of the file

export default function Home() {
  return (
    <main className="main-container">
      <div className="contenedorPrincipal">
        <section>
          <Introduccion />
        </section>
        <section
          id="twitchArea"
          class="section"
        >
          <h1 className="clips twitchClips">Clips de Twitch de Javi - 117</h1>
          <ClipsTwitch />
        </section>
        <section
          id="youtubeArea"
          class="section"
        >
          <h1 className="clips youtubeClips">Videos de Youtube de Javi - 117</h1>
          <ClipsYoutube />
        </section>
        <section
          id="tiktokArea"
          class="section"
        >
          <h1 className="clips tiktokClips">Tiktoks de Javi - 117</h1>
          <ClipsTiktok />
        </section>
        </div>
    </main>
  );
}

