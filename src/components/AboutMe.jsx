import React from 'react'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full overflow-x-hidden  md:w-[90%] mx-auto  md:mt-40 flex-col md:flex-row items-center flex"
    >
      <div className=" md:w-1/2  p-20 w-full h-auto  ">
        <div
          data-aos="slide-right"
          className="relative 
       after:rounded-md  after:content-[''] after:inline-block  after:inset-5
        after:absolute after:border-2 after:border-cyan-400 w-full"
        >
          <img
            className="bg-contain rounded-lg   shadow-black shadow-sm"
            src="https://media.istockphoto.com/id/1192512817/photo/pretty-young-cross-armed-female-engineer-in-blue-workwear-and-safety-helmet.jpg?s=1024x1024&w=is&k=20&c=R3Q5vtsBMNGzG5RTigcv89a6OzkcIpiC3iatxgcDtgQ="
            alt="this is photo"
          />
        </div>
      </div>

      <div data-aos="slide-left" className="md:w-1/2  w-full md:p-10 p-7">
        <h1 className="text-5xl w-full my-10 text-center font-extrabold">
          About Me
        </h1>
        <p className="w-full text-pretty font-bold text-gray-800 mb-6">
          I am a dedicated designer with a passion for precision and creativity.
          I seek to leverage my technical skills and attention to detail in a
          challenging position, contributing to innovative and accurate
          technical drawings.
        </p>
        <p className="w-full font-bold text-gray-800 text-pretty mb-6">
          My goal is to collaborate with a dynamic team, pushing the boundaries
          of design through innovative projects. My keen eye for detail fuels my
          commitment to excellence.
        </p>
      </div>
    </section>
  );
}
