/** @format */

import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logOut } from "../slices/authSlice";
function Heder() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logOut());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          MERN | JWT Auth
        </Link>
      </div>

      <div className='flex-none'>
        {userInfo ? (
          <>
            <div className='dropdown dropdown-end '>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80' />
                </div>
              </label>

              <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
                <li>
                  <div className='justify-between uppercase font-bold py-2'>
                    {" "}
                    {userInfo.name}
                  </div>
                </li>
                <li>
                  <Link className='justify-between' to={"/profile"}>
                    Profile
                    <span className='badge'>New</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={logoutHandler}>Log out</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {" "}
            <ul className='menu menu-horizontal px-1'>
              <li>
                <div className='flex flex-row'>
                  <FaSignInAlt className='text-white' />
                  <Link to='/login'>Sign In</Link>
                </div>
              </li>
              <li>
                <div className='flex flex-row'>
                  <FaSignOutAlt className='text-white' />
                  <Link to='/register'>Sign Up</Link>
                </div>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Heder;
