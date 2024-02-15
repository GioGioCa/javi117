import ClipsTwitch from "./components/ClipsTwitch";
// Add the 'use client' directive at the top of the file

export default function Home() {
  const userId = "javier0117";
  // Replace with the user ID of the user you want to get clips from
  return (
    <main  className="main-container">
      <div>
          <h1 className="twitchClips">Clips de Twitch de Javi - 117</h1>
          <ClipsTwitch />
      </div>
      <div>
          <h1 className="youtubeClips">Clips de Youtube de Javi - 117</h1>
          <ClipsTwitch />
      </div>
      <div>
          <h1 className="tiktokClips">Tiktoks de Javi - 117</h1>
          <ClipsTwitch />
      </div>
  </main>

  );
}
