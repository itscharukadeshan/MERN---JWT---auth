/** @format */

import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Heder() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>MERN | JWT Auth</a>
      </div>

      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <div className='flex flex-row'>
              <FaSignInAlt className='text-white' />
              <Link to='/login'>Sing In</Link>
            </div>
          </li>
          <li>
            <div className='flex flex-row'>
              <FaSignOutAlt className='text-white' />
              <Link to='/register'>Sing Up</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Heder;
