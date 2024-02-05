import { Inter } from "next/font/google";
import { Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import "./styles/globals.css";

//Components
import Navbar from "./components/Navbar";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Javi 117",
  description: "Pagina web de Javi 117",
  manifest: "/manifest.json",
  icons: {
    apple: "../../public/icon-192x192.png",
    android: "../../public/icon-192x192.png",
    favicon: "../../public/icon-192x192.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/../../public/favicon.ico"
        />
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
