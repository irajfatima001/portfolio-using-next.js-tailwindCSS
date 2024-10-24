"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about">
      <section className="text-white body-font bg-black pb-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            data-aos="fade-zoom" 
          >
            <Image
              className="object-cover object-center rounded-full mx-auto w-[300px] h-[300px] shadow-xl shadow-gray-500"
              alt="hero"
              src={"/profile.jpg"}
              width={300}
              height={500}
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-left"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
               I'm  a passionate web developer with a love for
              creating intuitive and dynamic user experiences. I
              specialize in front-end development, using technologies like HTML,
              CSS, JavaScript, and frameworks such as React.js and Next.js.
            </p>

            <div className="flex justify-center">
              <Link href={"/about"}>
                <button
                  className="inline-flex bg-fuchsia-500 text-black rounded-lg px-4 py-2"
                  data-aos="zoom-in"
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
