import ClipsTwitch from "./components/ClipsTwitch";
import ClipsYoutube from "./components/ClipsYoutube";
import ClipsTiktok from "./components/ClipsTiktok";
// Add the 'use client' directive at the top of the file

export default function Home() {
  const userId = "javier0117";
  // Replace with the user ID of the user you want to get clips from
  return (
    <main className="main-container">
      <div className="contenedorPrincipal">
        <div>
          <p>hola</p>
        </div>
        <section
          id="twitchArea"
          class="section"
        >
          <h1 className="twitchClips">Clips de Twitch de Javi - 117</h1>
          <ClipsTwitch />
        </section>
        <section
          id="youtubeArea"
          class="section"
        >
          <h1 className="youtubeClips">Clips de Youtube de Javi - 117</h1>
          <ClipsYoutube />
        </section>
        <section
          id="tiktokArea"
          class="section"
        >
          <h1 className="tiktokClips">Tiktoks de Javi - 117</h1>
          <ClipsTiktok />
        </section>
        </div>
    </main>
  );
}

