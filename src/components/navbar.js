import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            My App
          </Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
                Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;