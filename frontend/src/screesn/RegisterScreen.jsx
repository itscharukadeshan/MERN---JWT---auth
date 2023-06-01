/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import ForumContainer from "../components/ForumContainer";

import React from "react";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className='flex justify-center p-10'>
      <div className='mockup-window border border-base-300 w-1/2'>
        <div className='flex justify-center p-10 bg-base-200'>
          <form onSubmit={submitHandler}>
            <h3 className=' text-3xl font-mono font-bold text-gray-300 pb-3 '>
              Sign Up
            </h3>

            <div className='form-control py-3'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <label className='input-group'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className='input input-bordered'
                />
              </label>
            </div>

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
            <div className='form-control py-3'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <label className='input-group'>
                <input
                  type='password'
                  placeholder='Confirm your password'
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className='input input-bordered'
                />
              </label>
            </div>
            <div className='py-6 flex justify-center'>
              <button type='submit' className='btn btn-outline btn-success'>
                Sign Up
              </button>
            </div>

            <p className='py-3 flex justify-center pt-9'>
              Already have an account
              <Link className='text-cyan-300 pl-2' to={"/login"}>
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;