"use client";
import React, { useState } from "react";
import { Roboto, Merriweather, Lobster } from "next/font/google";
import image from "../../public/about.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import joy from "../../public/joy.jpeg";
import nazrul from "../../public/cover1.png";
import fahad from "../../public/fahad.jpeg";
import Link from "next/link";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const About = () => {
  const [stepsCount, setStepsCount] = React.useState(5);
  const [stepsGap, setStepsGap] = React.useState(7);

  const [showFulltext, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFulltext);
  };

  return (
    <div>
      <section className="lg:space-y-8 lg:mt-12 ">
        <h1 className={`font-bold text-center text-3xl ${lobster.className}`}>About Us</h1>
        <div className="lg:flex gap-4 items-center">
          <div className="lg:w-3/5">
            <p className={`text-justify  ${roboto.className}`}>
              Welcome to Sportify! We’re dedicated to bringing high-quality sports gear to athletes and enthusiasts alike. Born
              out of a passion for sports, Sportify offers a wide range of products – from footballs and cricket gear to jerseys
              and more. Our mission is to inspire and equip people of all skill levels to achieve their best on the field, court,
              or track. We pride ourselves on providing reliable, durable, and performance-driven products to enhance your sports
              experience.
              {showFulltext && (
                <>
                  At Sportify, we believe sports are more than just games – they’re a path to discipline, teamwork, and
                  resilience. Whether you're training for competition or enjoying a casual game with friends, we want to be your
                  trusted partner, helping you find the tools that empower you to excel. Our team is constantly researching and
                  updating our inventory to bring you the latest innovations in sports gear, designed for both comfort and high
                  performance. Join the Sportify family and elevate your game with quality products that are crafted with athletes
                  in mind. Let’s push limits together and turn every goal, point, and finish line into a celebration of dedication
                  and achievement!
                </>
              )}
            </p>
            <Button className="rounded-full" variant="outline" onClick={toggleText}>
              {showFulltext ? "Less read" : "Read more"}
            </Button>
          </div>
          <div className="lg:w-3/5">
            <Image src={image} />
          </div>
        </div>
      </section>
      {/*Our Story*/}
      <section className="lg:space-y-4 lg:mt-12">
        <h1 className={`text-3xl font-bold text-center ${lobster.className}`}>Our Story</h1>
        <p className={`text-center lg:w-9/12 mx-auto ${roboto.className}`}>
          Sportify was founded out of a love for sports and the desire to make high-quality equipment accessible to everyone. What
          started as a small idea has grown into a trusted source for sports gear across multiple disciplines. From football and
          cricket to custom jerseys and beyond, we are committed to helping athletes and enthusiasts alike find the gear they need
          to excel.
        </p>
      </section>
      {/*Our Products*/}
      <section className="lg:space-y-4 lg:mt-12">
        <h1 className={`text-3xl font-bold text-center ${lobster.className}`}>Our Products</h1>
        <p className={`text-center lg:w-9/12 mx-auto ${roboto.className}`}>
          We offer a carefully curated selection of sports equipment, apparel, and accessories to meet every athlete's needs.
          Whether you're looking for durable cricket gear, footballs designed for peak performance, or jerseys that combine style
          and function, Sportify has you covered. Every product is chosen with quality and reliability in mind, so you can shop
          with confidence.{" "}
          <Link href={"#"} className="font-bold border-[1px] border-gray-200 px-2 text-sm rounded-lg">
            To view
          </Link>
        </p>
      </section>
      {/*Progress Bar*/}
      <section className="lg:mt-12 bg-gradient-to-b from-[#ccccff] to-[#ffcccc]) rounded-md">
        <div className="lg:flex items-center lg:gap-72">
            <div>
            <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <ul class="mt-4 space-y-2">
            <li>
              <a href="#" class="block h-full rounded-lg border border-gray-700 px-6 py-10 hover:border-pink-600">
               <h1 className="text-center font-bold lg:text-6xl text-[#FF5733]">100%</h1>

                <p class="mt-1 text-center text-sm lg:text-lg font-medium text-gray-300">
                  Customer retention rate
                </p>
              </a>
            </li>

            <li>
            <a href="#" class="block h-full rounded-lg border border-gray-700 px-6 py-10 hover:border-pink-600">
               <h1 className="text-center font-bold lg:text-6xl text-[#FF5733]">5+</h1>

                <p class="mt-1 text-center text-sm lg:text-lg font-medium text-gray-300">
                  Yours In Business
                </p>
              </a>
            </li>
            <li>
            <a href="#" class="block h-full rounded-lg border border-gray-700 px-6 py-10 hover:border-pink-600">
               <h1 className="text-center font-bold lg:text-6xl text-[#FF5733]">300+</h1>

                <p class="mt-1 text-center text-sm lg:text-lg font-medium text-gray-300">
                  Customers
                </p>
              </a>
            </li>
          </ul>
        </article>
            </div>
            <div>
                <h1 className={`lg:text-8xl font-bold bg-gradient-to-r from-[#FF5733] to-purple-700 bg-clip-text text-transparent ${roboto.className}`}>OUR CORE</h1>
                <h1 className={`lg:text-8xl font-bold bg-gradient-to-r from-purple-700 to-[#FF5733] bg-clip-text text-transparent  ${roboto.className}`}>COMPETENCIES</h1>
            </div>
        </div>
      </section>
      {/*Customer review*/}
      <section>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className={`text-3xl font-bold text-center ${lobster.className}`}>Read trusted reviews from our customers</h2>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <Image alt="Image" src={joy} className="size-14 rounded-full object-cover" />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className={`font-semibold text-center text-gray-900 text-lg ${roboto.className}`}>Joy Baidya</p>
                  </div>
                </div>

                <p className={`font-medium text-gray-700 text-justify ${roboto.className}`}>
                  I recently purchased a football and a set of training gear from Sportify, and I’m extremely impressed with the
                  quality! The ball feels great to kick, and the gear is durable enough for intense training sessions. What I
                  really appreciated was how quickly the delivery was. Sportify has definitely earned my trust, and I’ll be back
                  for more equipment soon.
                </p>
              </blockquote>

              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <Image alt="Image" src={nazrul} className="size-14 rounded-full object-cover" />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className={`font-semibold text-center text-gray-900 text-lg ${roboto.className}`}>Nazrul Islam</p>
                  </div>
                </div>

                <p className={`font-medium text-gray-700 text-justify ${roboto.className}`}>
                  I stumbled upon Sportify and decided to give it a try, and I’m so glad I did! I ordered a pair of running shoes
                  and a jersey, and both exceeded my expectations. The jersey fits perfectly, and the shoes provide great comfort
                  during my workouts. The customer service was also fantastic – they really know their products. Highly recommend.
                </p>
              </blockquote>

              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <Image alt="Image" src={fahad} className="size-14 rounded-full object-cover" />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className={`font-semibold text-center text-gray-900 text-lg ${roboto.className}`}>Fahad Bin Galib</p>
                  </div>
                </div>

                <p className={`font-medium text-gray-700 text-justify ${roboto.className}`}>
                  Sportify is now my go-to store for all things cricket! I bought a bat, pads, and gloves, and the quality is
                  top-notch. I’ve used the bat in a few matches already, and it has a perfect balance and feel. What really sets
                  Sportify apart is their attention to detail in product selection – everything feels premium. I’ll be shopping
                  here for all my cricket gear from now on.
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
