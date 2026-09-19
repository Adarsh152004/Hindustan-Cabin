import { Roboto } from "next/font/google";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // Light se Black tak saare weights
  display: "swap",
});

export const metadata = {
  title: "Hindustan Cabin | Portable Cabins & Containers",
  description: "Premium portable cabins, security cabins, and cargo containers manufacturer in Mumbai. GST registered with fixed-price quotes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[112px] xl:pt-[112px] pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}