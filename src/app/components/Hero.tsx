"use client";
import Image from "next/image";

import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="text-white body-font bg-black pt-40 pb-40 ">
      <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="fade-right"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
           
              HELLO!
            
            <br className="hidden lg:inline-block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-fuchsia-600">I'm IRAJ FATIMA</span>
            
            <p>Front-end Web Developer</p>
          </h1>
          <div className="w-[100px] h-[2px] bg-purple-700"></div>
          <p className="mb-8 leading-relaxed">
            I'm a passionate web developer dedicated to crafting seamless
            digital experiences. With expertise in modern technologies, I
            transform ideas into engaging, user-friendly applications. Let's
            collaborate to bring your vision to life and make the web a more
            beautiful place. Explore my portfolio and connect with me!
          </p>
          <div className="flex justify-center">
            <a href="/myCV.pdf">
              <button
                className="transtion group  flex h-10 w-42 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[2.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                data-aos="zoom-in"
              >
                <div className="flex px-4 py-3 h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                  Download CV
                  <AiOutlineCloudDownload className="text-xl ml-2" />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full mx-auto w-[300px] h-[300px] shadow-xl shadow-gray-600"
            data-aos="fade-left"
            alt="hero"
            width={500}
            height={500}
            src={"/profile.jpg"}
          />
        </div>
      </div>
    </section>
  );
}
