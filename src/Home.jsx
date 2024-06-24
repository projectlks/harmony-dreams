import logo from "./assets/img/logo.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import right from "./assets/img/right.png";

import React from "react";
import Something from "./components/Something";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";

function MenuValue({ value }) {
  return (
    <a
      href={`#${value.toLowerCase()}`}
      className="hover:text-redColor md:w-auto md:rounded-md w-[300px] text-gray-100 hover:bg-darkBlue px-3 py-2 cursor-pointer transition duration-300 ease-in-out"
    >
      {value}
    </a>
  );
}

function App() {
  const [isShow, setIsShow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let value = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    if (screenWidth > 768) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    Aos.init({
      offset: 200, // Example offset value
      duration: 1500
    });
  }, []);

  return (
    <section >
      <nav className="flex fixed top-1 left-0 right-0 border w-[90%] mx-auto z-[1000] shadow-md animate-top-to-bottom justify-between bg-opacity-50 items-center rounded-md bg-black p-4">
        <div data-aos="slide-right" className="flex items-center">
          <img src={logo} alt="Harmony Dreams Logo" className="h-10 mr-2" />
          <span className="text-xl belleza-regular flex first-letter:text-2xl text-gray-100 font-bold">
            <h1 className="first-letter:text-2xl ">HARMONY </h1>
            <h1 className="text-redColor first-letter:text-2xl ml-1">DREAMS</h1>
          </span>
        </div>
        <div>
          <ul
            className={`font-bold animate-right-to-left absolute md:static md:bg-transparent bg-blue-400 p-3 md:p-0 right-0 top-full flex-col md:flex-row md:space-x-4 text-lg ${
              isShow ? "flex" : "hidden"
            }`}
          >
            {value.map((value, index) => (
              <MenuValue key={index} value={value} />
            ))}
          </ul>
          {/* Hamburger menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 animate-zoom text-gray-200 md:hidden inline-block"
            onClick={() => {
              setIsShow((prev) => !prev);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>

      <section
        id="home"
        className="w-full scroll-smooth flex bg-[url('./assets/img/bg.jpg')]  bg-backgroundImage bg-center bg-cover bg-fixed bg-no-repeat relative transition-all overflow-hidden mx-auto min-h-screen"
      >
        <div className="flex  w-full md:p-10 py-[200px] md:py-[200px] p-4 text-gray-200 min-h-screen bg-black bg-opacity-60 items-center flex-col xl:flex-row justify-center text-center h-full transition-opacity duration-1000">
          <span className="inline-block  w-full xl:w-1/2 ">
            <h1 className="text-[min(12vw,2.5rem)] first-letter:text-[min(12vw,5rem)] font-bold mb-4 animate-left-to-right">
              Welcome to Harmony Dreams
            </h1>
            <p className="text-2xl mb-8  animate-fadeIn animate-right-to-left delay-200">
              Dreams your future with us.
            </p>
          </span>

          <div className="w-full animate-zoom xl:w-1/2">
            <div className="card m-auto bg-red-800 overflow:hidden w-3/5 shine-overlay">
              <img
                className="card-bg top-0 absolute left-0 "
                src={right}
                alt="image"
              />
              <div className="shine"></div>
            </div>
          </div>
        </div>
      </section>
      <Something />
      <AboutMe />
      <Project />
      <Contact />
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              © 2024 Your Company. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="###" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="###" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
