import React from 'react';
import Link from 'next/link';
import { ImBooks, ImHome } from 'react-icons/im';
import { MdSettings } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-500 text-white py-6 fixed inset-x-0 bottom-0">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8">
          <Link href="/">
            <span className="text-2xl cursor-pointer hover:text-emerald-700 transition-all duration-200">
              <ImHome />
            </span>
          </Link>
          <Link href="/bookshelf">
            <span className="text-2xl cursor-pointer hover:text-emerald-700 transition-all duration-200">
              <ImBooks />
            </span>
          </Link>
          <Link href="/settings">
            <span className="text-2xl cursor-pointer hover:text-emerald-700 transition-all duration-200">
              <MdSettings />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
