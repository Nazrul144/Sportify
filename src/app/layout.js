import localFont from "next/font/local";
import "./globals.css";
import { Roboto} from 'next/font/google'
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sportify",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-11/12 mx-auto" 
      >
        <Navbar/>
        <div >
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
