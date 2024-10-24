import Header from "../components/Header"; 
import React from "react";

import Footer from  "../components/Footer"

const Contact = () => {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 italic">Contact Me</h1>
        
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded border border-gray-700 bg-gray-900 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded border border-gray-700 bg-gray-900 text-white"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 rounded border border-gray-700 bg-gray-900 text-white"
              
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button className="flex justify-center bg-fuchsia-500 text-black rounded-lg px-4 py-2 w-full">
            Send Message
          </button>
        </form>

        
      </div>
      <Footer/>
    </main>
  );
};

export default Contact;
