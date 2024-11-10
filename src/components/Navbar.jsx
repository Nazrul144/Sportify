"use client"
import React from 'react';
import { Roboto, Merriweather} from 'next/font/google'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { MdShoppingCart } from "react-icons/md";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

const lovely = Merriweather({
  weight: ['400', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})  

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
    const links = [
        {
            title: "Home",
            path: '/home'
        },
        {
            title: "All Product",
            path: '/all_products'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        }
    ]
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className={`font-bold lg:text-xl menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${roboto.className}`}>
        {
            links?.map(link=><Link href={link.path} className={`${pathName === link.path && "text-red-400"}`} key={link.path}>{link.title}</Link>)
        }
      </ul>
    </div>
    {/* <a className={`btn btn-ghost text-xl ${roboto.className}`}>Sport<span>ify</span></a> */}
    <span className={`text-purple-600 font-bold lg:text-lg ${lovely.className}`}>Sport</span><span className={`text-[#FF5733]
    font-bold lg:text-lg ${lovely.className}`}>ify</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`font-bold space-x-4 text-lg menu menu-horizontal px-1 ${roboto.className}`}>
        {
            links?.map(link=><Link href={link.path} className={`${pathName === link.path && "text-[#FF5733] border-b-[1px] border-[#FF5733]"}`} key={link.path}>{link.title}</Link>)
        }
    </ul>
  </div>
  <div className="navbar-end">
    <MdShoppingCart className='lg:mr-4 text-4xl' />
    <Button className={`lg:text-lg text-purple-600 font-bold ${roboto.className}`} variant="outline"><Link href={'/signin'}>Signin</Link></Button>
  </div>
</div>
    );
}

export default Navbar;
