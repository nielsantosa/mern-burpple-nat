import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            My Restaurants
          </Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/restaurants">
              Restaurants
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;