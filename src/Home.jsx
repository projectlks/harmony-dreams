import logo from "./assets/Harmony Dreams.jpg";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import img from './assets/img/img1.jfif'

import React from 'react'
import Something from "./components/Something";

 function MenuValue({value}) {
  return (
    <a
      href={`#${value.toLowerCase()}`}
      className="hover:text-blue-700 md:w-auto md:rounded-md w-[300px] text-gray-100 hover:bg-blue-300 px-3 py-2 cursor-pointer transition duration-300 ease-in-out"
    >
      {value}
    </a>
  );
}
 



function App() {
const [isShow, setIsShow] = useState(true)
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);
let value = ["Home", "About", "Services", 'Contact'];



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
     if (screenWidth > 500) {
       setIsShow(true);
     } else {
       setIsShow(false);
     }
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [screenWidth]);

  useEffect(()=>{

   Aos.init({
     offset: 200, // Example offset value
     duration: 1500
   });
  },[])

  return (
    <div>
      <nav className="flex fixed top-1 left-0 right-0  border w-[90%] mx-auto z-[1000] shadow-md animate-top-to-bottom justify-between bg-opacity-50 items-center rounded-md bg-black  p-4">
        <div data-aos="slide-right" className="flex items-center">
          <img src={logo} alt="Harmony Dreams Logo" className="h-10 mr-2" />
          <span className="text-xl flex first-letter:text-2xl text-gray-100 font-bold">
            <h1 className="first-letter:text-2xl ">Harmony</h1>
            <h1 className="text-blue-700 first-letter:text-2xl ml-1">Dreams</h1>
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
            className="size-6 md:hidden inline-block"
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
        className="w-full flex bg-[url('./assets/img/img4.jfif')] bg-backgroundImage  bg-center bg-cover bg-fixed  bg-no-repeat  relative transition-all overflow-hidden  mx-auto min-h-screen "
      >
        <div className="flex w-full md:p-10 py-[200px] md:py-[200px] p-4 text-gray-200 bg-black bg-opacity-60 items-center flex-col  md:flex-row justify-center text-center h-full transition-opacity duration-1000">
          <span className="inline-block w-full md:w-1/2">
            <h1 className="text-5xl first-letter:text-7xl font-bold mb-4 animate-left-to-right">
              Welcome to Harmony Dreams
            </h1>
            <p className="text-2xl mb-8 first-letter:text-4xl animate-fadeIn animate-right-to-left delay-200">
              Your dream vacation is just a click away
            </p>
            {/* <button className="hover:bg-opacity-100 transition-all bg-blue-700 bg-opacity-50 border text-black border-blue-700 animate-zoom hover:text-white px-6 hover:px-10 py-2 rounded-md text-lg font-semibold hover:font-semibold ">
              Get Started
            </button> */}
          </span>
          <div className="w-full md:w-1/2 ">
            <span className="inline-block  m-auto bg-gray-200 w-[70%] p-3 animate-zoom rounded shadow-lg overflow-hidden">
              <img
                src={img}
                className="w-full figure transition-transform duration-300 ease-in-out hover:scale-110"
                alt="img"
              />
            </span>

          
          </div>
        </div>
      </section>
<Something/>
      {/* about */}
      <section
        id="about"
        className="w-full overflow-x-hidden md:mt-40 flex-col md:flex-row flex"
      >
        <div
          data-aos="slide-right"
          className="md:w-1/2 w-full h-screen md:border-l-2 p-10"
        >
          <div className="w-full h-full bg-gray-800 animate-pulse"></div>
        </div>
        <div data-aos="slide-left" className="md:w-1/2 w-full p-10 md:h-screen">
          <h1 className="text-5xl w-full my-10 text-center font-extrabold">
            About Me
          </h1>
          <p className="w-full pl-6 text-pretty font-bold text-gray-800 mb-6">
            Seeking a challenging position as a Designer where I can utilize my
            technical skills and attention to detail to contribute to the
            creation of accurate and precise technical drawings. With a strong
            background in design principles and a commitment to excellence, I am
            adept at using various design software to produce high-quality work.
            My experience in translating concepts into visually compelling and
            functionally sound designs ensures that I can meet and exceed
            project expectations.
          </p>
          <p className="w-full pl-6 font-bold text-gray-800 mb-6">
            I aim to collaborate with a dynamic team to develop innovative
            projects that push the boundaries of creativity and precision. My
            keen eye for detail and passion for design drive my dedication to
            achieving excellence in every project. I am eager to leverage my
            expertise in design and technical drawing to support the goals of a
            forward-thinking organization and contribute to its success.
          </p>
        </div>
      </section>

      {/* something */}
      <section className="w-full h-auto xl:h-[700px] overflow-y-hidden my-10 grid mx-auto gap-6 mb-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:w-[80%]">
        <div
          data-aos="slide-up"
          className="w-[90%] md:col-span-2 xl:col-span-1 mx-auto h-[500px] animate-pulse bg-red-700"
        ></div>
        <div
          data-aos="slide-up"
          className="w-[90%] mt-20 mx-auto h-[500px] animate-pulse bg-red-700"
        ></div>
        <div
          data-aos="slide-up"
          className="w-[90%] mt-40 mx-auto h-[500px] animate-pulse bg-red-700"
        ></div>
      </section>
    </div>
  );
}

export default App;
