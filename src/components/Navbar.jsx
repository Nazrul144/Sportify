import React from 'react';
import { Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
    return (
        <div className={`bg-red-400 flex justify-between text-3xl ${roboto.className}`}>
            Sportify
            <ul className='flex space-x-4 '>
                <li>Home</li>
                <li>All Products</li>
                <li>Contact Us</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Navbar;
