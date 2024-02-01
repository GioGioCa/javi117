import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Javi 117",
  description: "Pagina web de Javi 117",
  manifest: "/manifest.json",
  icons: {
    apple:"/icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}