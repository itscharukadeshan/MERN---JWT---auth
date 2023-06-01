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
    <div className='mockup-window border border-base-300'>
      <div className='flex justify-center px-4 py-16 bg-base-200'>
        <form onSubmit={submitHandler}>
          <div className='form-control py-3'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <label className='input-group'>
              <span>Email</span>
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
              <span>Password</span>
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
          <div className='py-4'>
            <button type='submit' className='btn btn-outline btn-success'>
              Sing In
            </button>
          </div>

          <p className='py-3'>
            Don't have an account <Link to={"/register"}>Register Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
