import React from 'react'
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";


function Card({ title, text, index, children, ...prop }) {
  return (
    <div
      data-aos="zoom-in"
      className={`p-5 ${prop.className} mb-[150px] md:p-0 bg-[#AEAEAE] bg-opacity-50 shadow-darkBlue shadow-md mx-auto`}
    >
      {children}
      <span className="inline-block w-full xl:shadow-darkBlue xl:shadow-md bg-inherit p-3">
        <h1 className="text-[min(5vh,3rem)] w-[90%]  text-start mx-auto   font-bold">
          0{index}.{title}
        </h1>
        <p className="text-pretty md:p-5">{text}</p>
      </span>
    </div>
  );
}

export default function Project() {

  const File = [
    {
      id: 1,
      title: "Minimalist",
      text: "The use of vertical aluminium slats, large glass panels, and sleek concrete elements reflects the blending of functionality and style prevalent in Vietnamese urban design.",
      imgSrc: img2,
      imgDesign: "vertical"
    },
    {
      id: 2,
      title: "Modern",
      text: "The building features clean lines, large windows, and a combination of materials that give it a contemporary appearance.",
      imgSrc: img1
    },

    {
      id: 3,
      title: "Contemporary",
      text: "Modern design embraces clean lines and simplicity, focusing on essential elements that contribute to a clutter-free environment.",
      imgSrc: img3
    },

    {
      id: 4,
      title: "Functional",
      text: "Spaces are designed with functionality and efficiency in mind, optimizing every square foot to serve a purpose without unnecessary ornamentation.",
      imgSrc: img5,
      imgDesign: "vertical"
    },
    {
      id: 5,
      title: "Sustain",
      text: "Furniture and decor are selected for their functional elegance, often characterized by clean geometric shapes and a focus on quality craftsmanship rather than ornate details",
      imgSrc: img6,
      imgDesign: "vertical"
    },
    {
      id: 6,
      title: "Chic",
      text: "Modern elegance with clean lines, geometric shapes, and a minimalist approach to landscaping.",
      imgSrc: img4
    }
  ];
  return (
    <section
      id="services"
      className=" p-3 overflow-x-hidden pb-10 w-[90%] mx-auto"
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
                ? "flex md:flex-row   w-full flex-col"
                : "md:w-2/3  w-full h-auto xl:h-[200px] block"
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
