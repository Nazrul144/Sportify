import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import image from "../../public/contactUs.svg"
import Image from "next/image";
import { Roboto,  Lobster } from "next/font/google";
import { MdOutlineAttachEmail } from "react-icons/md";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div>
      {/*Heading Title*/}
      <div className="lg:mt-12">
      <h1 className={` text-2xl text-center text-[#FF5733] ${lobster.className}`}>Get in touch</h1>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white px-6">
          <MdOutlineAttachEmail className="text-xl" />
          </span>
        </span>
      </div>

      {/*Contact us form*/}
      <section className="lg:flex lg:gap-32 items-center">
        <div className="lg:w-2/5">
         <h1 className={`text-center font-bold text-purple-600 text-xl ${lobster.className}`}>Send a message!</h1>
          <form className={`space-y-2 rounded-lg lg:px-12 lg:py-12 shadow-xl ${roboto.className}`}>
            <input
              className="px-4 py-2 border-[1px] w-full space-y-2 border-gray rounded-md"
              type="text"
              placeholder="Your Name"
            />

            <input className="px-4 py-2 border-[1px] w-full border-gray rounded-md" type="email" placeholder="Your Email" />

            <input className="px-4 py-2 border-[1px] w-full border-gray rounded-md" type="number" placeholder="Your Phone" />

            <select className="px-4 py-2 border-[1px] border-gray w-full rounded-md" name="" id="">
              <option value="">Football</option>
              <option value="">Cricket</option>
              <option value="">Badminton</option>
              <option value="">Volleyball</option>
              <option value="">Hockey </option>
            </select>
            <textarea className="w-full lg:h-32 p-2 border-[1px] rounded-md border-gray" name="" id="" type="text" placeholder="Your Message"></textarea>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </form>
        </div>
        <div className="lg:w-3/5 ">
          <Image className="opacity-50"
          src={image}
          width={"100%"}
          height={500}
          alt="Image"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
