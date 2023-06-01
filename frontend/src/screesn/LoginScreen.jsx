/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import ForumContainer from "../components/ForumContainer";

import React from "react";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className='flex justify-center p-10'>
      <div className='mockup-window border border-base-300 w-1/2'>
        <div className='flex justify-center p-10 bg-base-200'>
          <form
            onSubmit={submitHandler}
            className='flex flex-col justify-center'>
            <h3 className=' text-3xl font-mono font-bold text-gray-300 py-3 '>
              Sign In
            </h3>

            <div className='form-control py-3'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <label className='input-group'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className='input input-bordered'
                />
              </label>
            </div>
            <div className='form-control py-3'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <label className='input-group'>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className='input input-bordered'
                />
              </label>
            </div>
            <div className='py-6 flex justify-center'>
              <button type='submit' className='btn btn-outline btn-success'>
                Sign In
              </button>
            </div>

            <p className='py-3 flex justify-center pt-9'>
              Don't have an account
              <Link className='text-cyan-300 pl-2' to={"/register"}>
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
