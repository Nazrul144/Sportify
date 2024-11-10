import React from 'react';
import { Roboto} from 'next/font/google'
import Link from 'next/link';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
  })

const Navbar = () => {
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
        className={`font-bold text-xl menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${roboto.className}`}>
        {
            links?.map(link=><Link href={link.path} className='font-bold'>{link.title}</Link>)
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Sportify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`font-bold space-x-4 text-2xl menu menu-horizontal px-1 ${roboto.className}`}>
        {
            links?.map(link=><Link href={link.path} className='font-bold'>{link.title}</Link>)
        }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
}

export default Navbar;
