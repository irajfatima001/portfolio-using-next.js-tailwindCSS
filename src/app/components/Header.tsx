"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
//import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-black text-white ">
      <nav className="flex justify-between items-center p-4 font-serif mr-10 font-bold ">
        <div className="text-2xl font-bold pl-5">
          <h1 className="text-3xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-fuchsia-600">MY PORTFOLIO</span></h1>
        </div>

        <div className="hidden md:flex space-x-8 ">
          <Link href="/" className=" text-xl hover:underline" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" className=" text-xl hover:underline" onClick={handleLinkClick}>About</Link>
          
          <Link href="/contact" className="text-xl hover:underline" onClick={handleLinkClick}>Contact</Link>
        </div>

        

        <button onClick={toggleMenu} className="md:hidden">
          <FaHamburger className="text-2xl" />
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-black text-white shadow-lg p-4 md:hidden z-10">
          <Link href="/" className="block py-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block py-2" onClick={handleLinkClick}>
            About
          </Link>
          
  
          <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
