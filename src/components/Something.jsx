import React from "react";

function Card({ title, paragraph, children, ...props }) {
  return (
    <div

      {...props}
      className="flex flex-col w-[90%] mx-auto md:w-full bg-blue-100 hover:bg-blue-200 transition-all hover:shadow-md  hover:scale-110 cursor-pointer rounded-md px-5 py-8 items-center"
    >
      <i className="p-4 rounded-full bg-gray-300">{children}</i>
      <h2 className="text-2xl font-bold m-3">{title}</h2>
      <p className="text-center text-pretty">{paragraph}</p>
    </div>
  );
}

export default function Something() {
  return (
    <section className="w-full overflow-x-hidden md:w-[90%] mx-auto">
      <h1
        data-aos="slide-left"
        className="w-full text-center text-5xl mt-10 mb-3 font-bold"
      >
        What I do?
      </h1>
      <p
        data-aos="slide-left"
        className="xl:w-[800px] w-[90%] font-semibold text-base text-center mb-7 text-pretty mx-auto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
        excepturi, officia optio odio omnis, eaque, repellat totam iste harum
        necessitatibus.
      </p>
      <div
        data-aos="slide-right"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full py-6 gap-10"
      >
        <Card
          title="Communication"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora suscipit quasi animi nulla molestias."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-10 text-blue-500 text-center w-full"
          >
            <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
            <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
          </svg>
        </Card>
        <Card
          title="Reliability"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora suscipit magnam culpa officia quasi animi nulla molestias."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Card>
        <Card
          title="Quality First"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed excepturi, officia optio odio omnis, eaque."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Card>
        <Card
          title="Families"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Card>
      </div>
    </section>
  );
}
