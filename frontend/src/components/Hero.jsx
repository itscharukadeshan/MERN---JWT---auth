/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
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
          <div className='py-6 flex flex-row gap-3 justify-center'>
            <Link to='/login'>
              <button className='btn btn-outline btn-success'>Sing In</button>
            </Link>
            <Link to='/register'>
              <button className='btn btn-outline btn-ascent'>Sing up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
