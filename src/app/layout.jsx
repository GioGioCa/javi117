import { Inter } from "next/font/google";
import { Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import "./styles/globals.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <script>
          {`
            document.addEventListener("DOMContentLoaded", function() {
                var iframes = document.querySelectorAll("iframe");

                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].src += "&autoplay=false";
                }
            });
          `}
        </script>
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
