import React from "react";

function Card({ title, paragraph, icon, ...props }) {
  return (
    <div data-aos="slide-left" className="w-full h-auto">
 <div
  {...props}
  className="flex flex-col h-full shadow-darkBlue transition-all shine-overlay w-[90%] mx-auto md:w-full border-2 border-midBlue hover:border-hidden bg-gradient-to-tr hover:from-backgroundColor hover:to-softBlue hover:shadow-md hover:scale-110 cursor-pointer rounded-md px-5 pb-10 py-8 items-center group select-none
        
  after:rounded-sm after:content-[''] after:inline-block after:inset-2
  after:absolute hover:after:border after:border-midBlue
  "
>
  <i
    className={`${icon} transition-all group-hover:bg-backgroundColor text-midBlue text-center w-auto p-5 bg-stone-300 border border-midBlue rounded-full text-4xl`}
  ></i>


        <h2 className="text-2xl text-darkBlue font-extrabold m-3">{title}</h2>
        <p className="text-center text-pretty">{paragraph}</p>
        <div className="shine "></div>
      </div>
    </div>
  );
}

export default function Something() {
  return (
    <section className="w-full p-3  overflow-hidden md:w-[90%] mx-auto">
      <h1
        data-aos="slide-left"
        className="w-full text-center text-5xl mt-10 mb-3 font-bold"
      >
        What we do?
      </h1>
      <p
        data-aos="slide-left"
        className="xl:w-[800px] w-[90%] font-semibold text-base text-center mb-7 text-pretty mx-auto"
      >
        Seeking a challenging position as Designer where we can utilize our
        technical skills and attention to detail to contribute to the creation
        of accurate and precise technical drawings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full py-6 gap-10">
        <Card
          icon="fa-regular fa-comments"
          title="Planning"
          paragraph="Careful consideration of aesthetics, functionality, and environmental harmony is essential in designing exterior house spaces."
        />
        <Card
          icon="fa-solid fa-shield-halved"
          title="Design"
          paragraph="The focus is on simplicity and functionality, incorporating clean lines, neutral palettes, and natural materials to achieve an elegant and cohesive outdoor space"
        />
        <Card
          icon="fa-solid fa-medal"
          title="Visualization"
          paragraph="Effective visualization not only communicates design concepts but also ensures that the final result aligns with the client's vision and functional requirements."
        />
        <Card
          icon="fa-solid fa-people-group"
          title="Animation"
          paragraph="We presentate with dynamic movement and interactive elements, showcasing how clean lines, neutral colors, and natural materials combine for a harmonious outdoor environment."
        />
      </div>
    </section>
  );
}
