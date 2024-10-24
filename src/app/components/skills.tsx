"use client"
import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skill = () => {
  return (
    <div id="skills">
      <section className="text-white body-font bg-black ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-pink-800 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-pink-800 text-lg title-font font-medium" data-aos="zoom-in">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl" data-aos="fade-down">
                    <div className="absolute bg-purple-500 h-1 rounded-xl w-[100%]" ></div>
                  </div>
                  <p className="font-bold text-pink-800 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-pink-800 text-lg title-font font-medium" data-aos="zoom-in">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl" data-aos="fade-up">
                    <div className="absolute bg-purple-500 h-1 rounded-xl w-[95%]" ></div>
                  </div>
                  <p className="font-bold text-pink-800 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-pink-800 text-lg title-font font-medium" data-aos="zoom-in">
                    JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl" data-aos="fade-down">
                    <div className="absolute bg-purple-500  h-1 rounded-xl w-[90%]" ></div>
                  </div>
                  <p className="font-bold text-pink-800 text-right">90%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-pink-800 text-lg title-font font-medium" data-aos="zoom-in">
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl" data-aos="fade-up">
                    <div className="absolute bg-purple-500 h-1 rounded-xl w-[80%]" ></div>
                  </div>
                  <p className="font-bold text-pink-800 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-pink-800 text-lg title-font font-medium" data-aos="zoom-in">
                 NEXT JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl" data-aos="fade-down">
                    <div className="absolute bg-purple-500 h-1 rounded-xl w-[95%]" ></div>
                  </div>
                  <p className="font-bold text-pink-800 text-right">95%</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;