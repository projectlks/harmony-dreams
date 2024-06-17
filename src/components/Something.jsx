import React from "react";

function Card({ title, paragraph, icon, ...props }) {
  return (
    <div data-aos="slide-left" className="w-full h-auto">
      <div
        {...props}
        className="flex flex-col h-full shadow transition-all shine-overlay w-[90%] mx-auto md:w-full bg-gradient-to-tl border-2 hover:border-none border-blue-400 hover:from-emerald-200 hover:to-blue-400 hover:bg-blue-200 hover:shadow-md hover:scale-110 cursor-pointer rounded-md px-5 pb-10 py-8 items-center"
      >
        <i
          className={`${icon} text-blue-500 text-center w-auto p-5 bg-stone-300 border border-black rounded-full text-4xl`}
        ></i>
        <h2 className="text-2xl font-extrabold m-3">{title}</h2>
        <p className="text-center text-pretty">{paragraph}</p>
        <div className="shine "></div>
      </div>
    </div>
  );
}

export default function Something() {
  return (
    <section className="w-full p-3 overflow-x-hidden md:w-[90%] mx-auto">
      <h1
        data-aos="slide-left"
        className="w-full text-center text-5xl mt-10 mb-3 font-bold"
      >
        What I Do?
      </h1>
      <p
        data-aos="slide-left"
        className="xl:w-[800px] w-[90%] font-semibold text-base text-center mb-7 text-pretty mx-auto"
      >
        My work encompasses a broad spectrum of skills and expertise. Whether
        it's effective communication, unwavering reliability, a commitment to
        quality, or fostering family values, I strive to excel in every aspect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full py-6 gap-10">
        <Card
          icon="fa-regular fa-comments"
          title="Communication"
          paragraph="Clear and effective communication is at the heart of everything we do. We ensure all parties are on the same page to achieve success."
        />
        <Card
          icon="fa-solid fa-shield-halved"
          title="Reliability"
          paragraph="Our commitment to reliability means you can count on us to deliver consistent, high-quality results every time."
        />
        <Card
          icon="fa-solid fa-medal"
          title="Quality First"
          paragraph="Quality is our top priority. We strive to exceed expectations by paying attention to the smallest details in every project."
        />
        <Card
          icon="fa-solid fa-people-group"
          title="Families"
          paragraph="We value families and work to create solutions that benefit everyone. Our family-first approach ensures inclusivity and care in all we do."
        />
      </div>
    </section>
  );
}
