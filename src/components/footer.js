import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-lg font-bold">
            My Restaurants
          </Link>
        </div>
        <ul className="flex space-x-4">
        </ul>
        <div>
          <p>&copy; 2024 My Restaurants - Nathaniel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;