
import React from 'react'

function ContactToConnected({ title, num1, num2, icon, link1, link2 }) {
  return (
    <div
      className="flex flex-col items-center   md:flex-row h-full  px-0 md:space-x-3 xl:px-4"
    >
      <i
        className={`xl:text-5xl  md:text-4xl justify-center text-center text-3xl mb-3 ${icon}`}
      ></i>
      <span className="flex flex-col justify-center  items-center">
        <h1 className="text-base md:text-xl w-full text-start hidden md:block font-bold">
          {title}
        </h1>
        <a className="inline-block" href={link1}>
          <div className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline  hover:text-midBlue">
            {num1}
          </div>
        </a>
        <a className="inline-block " href={link2}>
          <div className="md:text-sm text-xs w-full text-start tracking-tighter md:tracking-normal hover:underline hover:text-midBlue">
            {num2}
          </div>
        </a>
      </span>
    </div>
  );
}  

export default function Footer() {


  return (
    <footer className="bg-[#D9D9D9] overflow-x-hidden  text-[#737373] border-t border-[#737373] w-full py-5">
      <h1
        data-aos="slide-right"
        className="w-full text-center text-8xl font-bold"
      >
        Thank
      </h1>
      <p data-aos="flip-left" className="w-full text-center text-xl font-bold">
        for scrolling all the way down here
      </p>

      <h1
        data-aos="slide-left"
        className="w-full text-center text-8xl font-bold mb-10"
      >
        You
      </h1>

      <div
    
        className="relative   border items-center py-5 400:px-3 300:px-1 360:px-2 600:px-5  flex justify-between h-auto md:h-[130px] md:px-5 xl:px-10 w-[95%] md:w-[80%] mx-auto mb-10 rounded-md border-[#737373]"
      >
        {/* text */}
        <div className="absolute -top-[32px] flex justify-center left-0 right-0">
          <p
            data-aos="flip-left"
            className=" px-4 py-2 text-lg md:text-2xl text-center whitespace-nowrap bg-[#D9D9D9] inline-block"
          >
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
  );
}
