import Image from "next/image";
import React from "react";
import Link from "next/link";
import img from "../../../public/boot_1.jpg"

const NewArrival = ({allPost}) => {
  const {name, email, phone, id, image} = allPost;
  console.log(image);
  return (
    <div>
      {/*Card*/}
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-100 bg-center bg-cover rounded-lg shadow-md"
        //   style="background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"
        
        >
            <Image className="rounded-sm h-full object-fill"
            src={image}
            width={450}
            height={650}
            alt="Image"
            />
        </div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 dark:text-white">{name}</h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
            <Link href={"/add_to_cart"} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-orange-500 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
