import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlights Challenge",
  description: "Desarrollado por GasparJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <Providers>
        <Navbar />
        <Banner />
          {children}
          <Footer />
      </Providers>
        </body>
    </html>
  );
}
