/** @format */

import React from "react";

export default function Hero() {
  return (
    <div class='hero min-h-screen bg-base-200'>
      <div class='hero-content text-center'>
        <div class=' max-w-xl'>
          <h1 class='text-5xl font-bold'>MERN | JWT Authentication </h1>
          <p class='py-6'>
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
          <div className='py-6 flex flex-row gap-3 justify-center'>
            <button className='btn btn-outline btn-success'>Sing In</button>
            <button className='btn btn-outline btn-warning'>Sing out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
