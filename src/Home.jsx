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

function ContactToConnected ({title, num1, num2, icon, link1, link2}) {
  return (
    <div className="flex flex-col md:flex-row h-full items-center px-0 space-x-3 xl:px-4">
      <i
        className={`xl:text-5xl w-full  justify-center text-center text-3xl mb-3 ${icon}`}
      ></i>
      <span className="flex flex-col items-center">
        <h1 className="text-base md:text-xl w-full text-start hidden md:block font-bold">
          {title}
        </h1>
        <a className="block" href={link1}>
          <p className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline whitespace-nowrap hover:text-midBlue">
            {num1}
          </p>
        </a>
        <a className="block" href={link2}>
          <p className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline hover:text-midBlue">
            {num2}
          </p>
        </a>
      </span>
    </div>
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
    <section>
      <nav className="flex fixed top-1 left-0 right-0 border w-[90%] mx-auto z-[1000] shadow-md animate-top-to-bottom justify-between items-center rounded-md bg-[#D9D9D9] p-4">
        <div data-aos="slide-right" className="flex items-center">
          <img src={logo} alt="Harmony Dreams Logo" className="h-10 mr-2" />
          <span className="text-xl belleza-regular flex first-letter:text-2xl text-gray-100 font-bold">
            <h1 className="first-letter:text-2xl ">HARMONY </h1>
            <h1 className="  first-letter:text-2xl ml-1">DREAMS</h1>
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
        className="w-full scroll-smooth flex bg-[url('./assets/img/bg.jpg')] h-screen xl:bg-[url('./assets/img/Computerbg.png')] xl:bg-cover xl:bg-[#D9D9D9] bg-backgroundImage bg-center bg-cover bg-fixed bg-no-repeat relative transition-all overflow-hidden mx-auto min-h-screen"
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
            <div className=" m-auto shine-overlay bg-red-800 w-3/5  ">
              <img className=" w-full h-auto" src={right} alt="image" />
              <div className="shine"></div>
            </div>
          </div>
        </div>
      </section>
      <Something />
      <AboutMe />
      <Project />
      <Contact />

      <footer className="bg-[#D9D9D9] text-[#737373] w-full py-5">
        <h1 className="w-full text-center text-8xl font-bold">Thank</h1>
        <p className="w-full text-center text-xl font-bold">
          for scrollig all the way down here
        </p>
        <h1 className="w-full text-center text-8xl font-bold mb-10">You</h1>

        <div className="relative   border items-center py-5 400:px-2 360:px-0 600:px-3  flex justify-between h-auto md:h-[130px] md:px-5 xl:px-10 w-[95%] md:w-[80%] mx-auto mb-10 rounded-md border-[#737373]">
          {/* text */}
          <div className="absolute -top-[32px] flex justify-center left-0 right-0">
            <p className=" px-4 py-2 text-lg md:text-2xl text-center whitespace-nowrap bg-[#D9D9D9] inline-block">
              Looking forward to connect with You
            </p>
          </div>

          {/* phone */}

          <ContactToConnected
            icon="fa-solid fa-phone"
            title="Phone"
            num1="09 975 478 222"
            link1="tel:09975478222"
            num2="09 692 774 290"
            link2="tel:09692774290"
          />

          {/* email */}
          <ContactToConnected
            icon="fa-solid fa-envelope"
            title="Email"
            num1="harmonydreams13@gmail.com"
            link1="mailto:harmonydreams13@gmail.com"
          />
          {/* viber */}

          <ContactToConnected
            icon="fa-brands fa-viber"
            title="Viber"
            num1="09 975 478 222"
            link1="viber://contact?number=09975478222"
            num2="09 692 774 290"
            link2="viber://contact?number=09692774290"
          />
        </div>
      </footer>
    </section>
  );
}

export default App;
