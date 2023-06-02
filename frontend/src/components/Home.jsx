/** @format */

import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJsonwebtokens,
  SiRedux,
} from "@icons-pack/react-simple-icons";

function Home() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center flex flex-col'>
        <div className=' max-w-xl'>
          <h1 className='text-5xl font-bold'>MERN | JWT Authentication </h1>
          <p className='py-6'>
            This is the basic home page created using Daisy Ui and Tailwind for
            the{" "}
            <a
              className=' text-cyan-300'
              href='https://www.youtube.com/watch?v=R4AhvYORZRY'>
              MERN Crash Course | JWT Authentication, Redux Toolkit, Deployment
              & More
            </a>{" "}
            Tutorial by{" "}
            <a
              className='text-cyan-300'
              href='https://www.youtube.com/@TraversyMedia'>
              Traversy Media
            </a>
            .
          </p>
        </div>
        <div className='pt-12'>
          <pre className='flex flex-row gap-2 justify-between'>
            <SiMongodb color='#149860' size={50} />
            <SiExpress color='#c2c2c2' size={50} />
            <SiReact color='#0087bd' size={50} />
            <SiNodedotjs color='#00ad29' size={50} />
            <SiJsonwebtokens color='#a8a8a8' size={50} />
            <SiRedux color='#5a2ef8' size={50} />
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Home;
