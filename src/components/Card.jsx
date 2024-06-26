import React from "react";

function Card({ title, text, index, children, ...props }) {
  return (
    <div
      data-aos="zoom-in"
      className={`p-5 ${props.className} mb-[150px] md:p-0 bg-[#AEAEAE] bg-opacity-50 shadow-darkBlue shadow-md mx-auto`}
    >
      {children}
      <span className="inline-block w-full xl:shadow-md xl:bg-[#AEAEAE] xl:bg-opacity-50 xl:shadow-darkBlue p-3">
        <h1 className="text-2xl md:px-5 md:text-[30px] text-start mx-auto font-bold">
          0{index}.{title}
        </h1>
        <p className="text-pretty md:p-5">{text}</p>
      </span>
    </div>
  );
}

export default Card;
