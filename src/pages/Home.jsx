import React from 'react';
import { Roboto, Merriweather, Lobster } from "next/font/google";
import { Input } from "@/components/ui/input"

const lobster = Lobster({
    weight: ["400"],
    subsets: ["latin"],
  });
  
  const roboto = Roboto({
    weight: ["400", "300"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });
  

const Home = () => {
    return (
        <div>
           <h1>This is home page</h1>
           <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-[#f63e15] bg-clip-text text-transparent sm:text-5xl">
        Discover and Explore 
        <strong className="font-extrabold bg-gradient-to-r from-[#f63e15] to-purple-800 bg-clip-text text-transparent sm:block"> Sports Equipment </strong>
      </h1>

      <p className={`mt-4 text-sm text-gray-700 ${roboto.className}`}>
      Explore a wide range of sports equipment at Sportify. Discover the perfect gear, shop with ease, and elevate your sports experience.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 ">
      <Input className="w-80" type="text" placeholder="Search" />
        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Home;
