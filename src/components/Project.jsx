import React from "react";
import File from "../assets/array/File";
import Card from "./Card";

export default function Project() {
  return (
    <section
      id="services"
      className="p-3 overflow-x-hidden pb-10 md:w-[70%] xl:w-[90%] w-[90%] mx-auto"
    >
      <h1
        data-aos="slide-left"
        className="w-full text-center text-5xl mt-10 mb-3 font-bold"
      >
        Our Projects
      </h1>
      <p
        data-aos="slide-left"
        className="xl:w-[800px] w-[90%] font-semibold text-base text-center mb-7 text-pretty mx-auto"
      >
        Explore our portfolio of modern minimalist exterior designs, showcasing
        our expertise in integrating clean lines, neutral colors, and natural
        materials to create harmonious and inviting outdoor spaces.
      </p>

      <div className="grid grid-cols-1 h-auto xl:grid-cols-2 w-full py-6 gap-10">
        {File.map((data, index) => (
          <Card
            className={`${
              data.imgDesign === "vertical"
                ? "flex md:flex-row w-full flex-col"
                : "md:w-2/3 w-full h-auto xl:h-[200px] block"
            }`}
            key={data.id}
            title={data.title}
            text={data.text}
            index={index + 1}
          >
            <img
              src={data.imgSrc}
              className={`${
                data.imgDesign === "vertical"
                  ? "w-full md:w-1/2 h-auto"
                  : "w-full h-auto"
              }`}
              alt={data.title}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
