import React from 'react';
import { Roboto, Merriweather, Lobster } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@mui/material";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});



const Header = () => {
    return (
        <div>
             <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-[#f63e15] bg-clip-text text-transparent sm:text-5xl">
              Discover and Explore
              <strong className="font-extrabold bg-gradient-to-r from-[#f63e15] to-purple-800 bg-clip-text text-transparent sm:block">
                {" "}
                Sports Equipment{" "}
              </strong>
            </h1>

            <p className={`mt-4 text-sm text-gray-700 ${roboto.className}`}>
              Explore a wide range of sports equipment at Sportify. Discover the perfect gear, shop with ease, and elevate your
              sports experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 ">
              <Input className="w-80 relative px-6 lg:px-8" type="text" placeholder="Search Sports Equipment" />
              <IoIosSearch className='absolute text-xl lg:top-[645px] lg:left-[680px] left-10 top-[420px]'  />
              <Button
                href="#"
                className="block w-full rounded px-6 py-2 text-sm font-medium text-black shadow hover:text-purple-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                <div className="flex items-center gap-1">
                  <h1>
                    <IoFilter className="text-xl" />
                  </h1>
                  <h1>Filter</h1>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Header;
