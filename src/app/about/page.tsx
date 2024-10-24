import Header from "../components/Header";
import React from "react";
import Link from "next/link";
import Footer from  "../components/Footer"
import Image from "next/image";




const skillsData = [
  { name: "HTML", logo: "/HTML5.jpg", proficiency: 90 },
  { name: "CSS", logo: "/css3.jpg", proficiency: 85 },
  { name: "JavaScript", logo: "/java.jpg", proficiency: 80 },
  { name: "React.js", logo: "/React js.jpg", proficiency: 75 },
  { name: "Next.js", logo: "/next.jpg", proficiency: 70 },
  { name: "Tailwind CSS", logo: "/tailwindcss.jpg", proficiency: 80 },
  
];
export default function About() {
  return (
    <main>
      <Header />
      <div className="bg-black min-h-screen bg-gradient-to-r from-fuchsia-200">
        <div className="container mx-auto px-4 py-12 ">
          <h1 className="text-5xl font-bold text-center mb-6 mt-20 italic underline">
            About Me
          </h1>

          <section className="mb-8 ">
            <div className="bg-black mx-10 border-2 border-purple-700 text-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-110" data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center text-pink-900">Who I Am</h2>
              <p className="text-lg">
                Hi! I’m Iraj Fatima, a passionate web developer. I have a
                passion for creating beautiful, user-friendly websites that
                provide an excellent user experience. Whether it's a personal
                blog or a corporate website, I love bringing ideas to life
                through code.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-black mx-10 border-2 border-purple-700 text-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-110" data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center text-pink-900">My Journey</h2>
              <p className="text-lg">
                My journey began in 2023 when I discovered coding while working
                on a personal project. Intrigued by the possibilities of web
                development, I enrolled in a boot camp where I honed my skills
                in HTML, CSS, and JavaScript. Since then, I have worked on
                various projects, from small startups to larger enterprise
                applications, always striving to learn and grow in my field.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-black mx-10 border-2 border-purple-700 text-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-110" data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center text-pink-900">What I Do</h2>
              <p className="text-lg">
                I specialize in front-end development, with a focus on React and
                Next.js. My goal is to help clients achieve their visions
                through clean code and intuitive design. I believe in a
                collaborative approach, working closely with clients to ensure
                their ideas are realized while providing insights and
                suggestions for improvement.
              </p>
            </div>
          </section>

          
          <section>
            <div className="bg-black mx-10 border-2 border-purple-700 text-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-110" data-aos="fade-left">
          <div className=" flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-6 text-pink-900">My Skills</h1>
        <section>
          <div className="flex flex-wrap justify-center">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="mb-8 mx-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center relative group"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center text-white mb-4"
                    data-aos="fade-right"
                  >
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={100}
                      height={100}
                      className="h-10 w-10 mb-2 mr-3"
                    />
                    <span className="text-xl sm:text-sm md:text-2xl lg:text-3xl font-semibold">
                      {skill.name}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 bg-gray-200 rounded-full h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="bg-gradient-to-r from-fuchsia-800 to-indigo-500 h-2 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
      </section>
      <section>
            <div className="bg-black mx-10 border-2 border-purple-700 text-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-110" data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-4 flex justify-center text-pink-900">Let’s Connect</h2>
              <p className="text-lg">
                I’m always open to new opportunities and collaborations. If
                you’d like to work together or just want to say hi, feel free to
                reach out via email at abc@gmail.com.Let’s create something amazing together!
              </p>
              <div className="text-center">
              <Link href="/contact" >
              <button className="  bg-fuchsia-500 text-black rounded-lg px-4 py-2 mx-auto">Contact me</button></Link></div>
            </div>
          </section>


        </div>
      </div>
      <Footer/>
    </main>
  );
}
