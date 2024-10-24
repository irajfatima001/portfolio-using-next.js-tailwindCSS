import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-grow text-center">
          <p className="text-5xl text-pink-600 font-serif my-10">Iraj Fatima</p>
        </div>

        <div className="flex-grow flex flex-col items-center mt-10 md:mt-0 md:items-start md:text-left">
          <p className="font-bold text-pink-600">Quick Links</p>
          <Link href="/" className="hover:text-fuchsia-500 m-2">Home</Link>
          <Link href="/about" className="hover:text-fuchsia-500 m-2">About</Link>
          <Link href="/contact" className="hover:text-fuchsia-500 m-2">Contact</Link>
        </div>

        <div className="flex-grow text-center mt-10 md:mt-0 mb-5">
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image src="/github.jpg" alt="GitHub" width={20} height={20} className="rounded-full m-2" data-aos="fade-right" />
              <p className="py-2" data-aos="slide-up">GitHub</p>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin2.jpg" alt="LinkedIn" width={20} height={20} className="rounded-full m-2" data-aos="fade-left" />
              <p className="py-2" data-aos="slide-up">LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
