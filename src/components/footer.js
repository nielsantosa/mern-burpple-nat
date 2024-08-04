import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-lg font-bold">
            My App
          </Link>
        </div>
        <ul className="flex space-x-4">
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
        <div>
          <p>&copy; 2023 My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;