import React from "react";
import Marquee from "react-fast-marquee";
import banner from "../../public/privacy_banner.jpeg";
import Image from "next/image";
import { Roboto, Merriweather } from "next/font/google";

const roboto = Roboto({
    weight: ["400", "300"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });

  const lovely = Merriweather({
    weight: ["400", "900"],
    subsets: ["latin"],
    style: ["normal", "italic"],
  });

const Privacy = () => {
  return (
    <div>

      <div className="banner">

        <section>
            <div className="flex justify-center relative">
                <Image className="opacity-50"
                src={banner}
                width={'100%'}
                height={200}
                alt="banner"
                />
            </div>
            <div className="absolute inset-0 justify-center items-center text-center top-32">
            <h1 className={`font-bold text-purple-700 text-2xl ${roboto.className}`}>Sportify Privacy Policy</h1>
            <h1 className={`text-purple-700 font-bold ${roboto.className}`}>What We Stand For</h1>
            </div>
        </section>

      </div>

      <Marquee className={`text-[#FF5733] font-bold ${lovely.className}`}>Welcome to Sportify – Your ultimate destination for all things sports! Explore the latest news, trends, and updates.</Marquee>
    </div>
  );
};

export default Privacy;
