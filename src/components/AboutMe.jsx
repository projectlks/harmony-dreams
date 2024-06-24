import React from 'react'
import img from '../assets/img/aboutUS.png'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full border-y border-darkBlue overflow-x-hidden  md:w-[90%] mx-auto  md:mt-40 flex-col md:flex-row items-center flex"
    >
      <div className=" md:w-1/2  p-20 w-full h-auto  ">
        <div
          data-aos="slide-right"
      //     className="relative 
      //  after:rounded-md  after:content-[''] after:inline-block  after:inset-5
      //   after:absolute after:border-2 after:border-cyan-400 w-full"
      className='relative'
        >
          <img
          src={img}
            className="bg-contain rounded-lg   shadow-black shadow-sm"
            alt="this is photo"
          />
        </div>
      </div>

      <div data-aos="slide-left" className="md:w-1/2  w-full md:p-10 p-7">
        <h1 className="text-5xl w-full my-10 text-center font-extrabold">
          About us
        </h1>
        <p className="w-full text-pretty font-bold text-gray-800 mb-6">
          We specialize in creating modern minimalist exterior designs that
          emphasize clean lines, neutral colors, and natural materials. Our
          approach blends aesthetics with functionality to craft inviting
          outdoor spaces tailored to your vision and lifestyle.
        </p>
        <p className="w-full font-bold text-gray-800 text-pretty mb-6">
          We're Civil Engineerings and our designs will be close to structure.
          W'll do our best and we claim to make it improve.
        </p>
      </div>
    </section>
  );
}
