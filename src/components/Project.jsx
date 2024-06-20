import React from 'react'
import img1 from "../assets/img/img1.jfif";
import img2 from "../assets/img/img2.jfif";
import img5 from "../assets/img/img5.jfif";
import img6 from "../assets/img/img6.jfif";

function Card({ title, text, img, index, ...prop }) {
  return (
    <div
      data-aos="zoom-in"
      className={`p-5 ${prop.className} md:p-0 bg-gray-100  h-auto shadow-darkBlue shadow-md mx-auto`}
    >
      <img src={img} className="w-full" alt="" />
      <span className="inline-block  p-3">
        <h1 className="text-[min(8vh,3rem)] mx-auto text-left md:p-5 font-bold">
          0{index}.{title}
        </h1>
        <p className="text-pretty md:p-5">{text}</p>
      </span>
    </div>
  );
}

export default function Project() {
  return (
    <section id='services' className=" p-3 min-h-screen pb-10 overflow-hidden w-[90%] mx-auto">
      <h1
        data-aos="slide-left"
        className="w-full text-center text-5xl mt-10 mb-3 font-bold"
      >
        My projects
      </h1>
      <p
        data-aos="slide-left"
        className="xl:w-[800px] w-[90%] font-semibold text-base text-center mb-7 text-pretty mx-auto"
      >
        My work encompasses a broad spectrum of skills and expertise. Whether
        it's effective communication, unwavering reliability, a commitment to
        quality, or fostering family values, I strive to excel in every aspect.
      </p>

      <div className="grid grid-cols-1  xl:grid-cols-2 w-full py-6 gap-10">
        <Card
          className=" flex md:flex-row md:h-[400px] w-full flex-col"
          title="HIGHTY"
          text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque,"
          img={img1}
          index="1"
        />
        <Card
          className="md:w-2/3 w-full block"
          title="SURF"
          text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque,amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque"
          img={img6}
          index="2"
        />

        <Card
          className="md:w-2/3 w-full block"
          title="SURF"
          text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque,amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque"
          img={img5}
          index="3"
        />
        <Card
          className=" flex md:flex-row md:h-[400px] w-full flex-col"
          title="HIGHTY"
          text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in
              animi atque natus voluptates tempora libero neque,"
          img={img2}
          index="4"
        />
      </div>
    </section>
  );
}
