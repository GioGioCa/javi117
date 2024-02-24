import intro from "../../../public/img/intro.png";
import Image from "next/image";
import stylesIntro from "../styles/Introduction.module.css";

const welcomeMessage =
    "¡Bienvenidos a la aplicación web oficial para fans de Javi117!";
const msgIntro =
    "Este espacio está diseñado para que disfrutes de su contenido favorito de Twitch, YouTube y TikTok en un solo lugar, además de conocer más sobre Javi y conectarte con su comunidad.";

export default function Introduccion() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
        <div className="texto">
        <h1
            className="text-3xl md:text-5xl xl:text-6xl font-bold"
            style={{
            transform: "none",
            opacity: 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
            {welcomeMessage}
        </h1>
            <div className={stylesIntro.texto}>
                <p
                    className="mt-3 mb-10 text-gray-500 text-xl"
                    style={{
                    transform: "none",
                    opacity: 1,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                >
                    {msgIntro}
                </p>
            </div>
        </div>
        <div
        className={stylesIntro.image}
        style={{
            transform: "none",
            opacity: 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            display: "flex",
            width: "100%",
            height: "100%",
        }}
        >
        <Image
            src={intro}
            width={100}
            height={100}
            alt="Logo"
            priority={50}
            className="hidden md:block"
        />
        </div>
    </div>
);
}
