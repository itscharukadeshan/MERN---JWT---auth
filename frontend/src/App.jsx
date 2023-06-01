/** @format */

import React from "react";
import Heder from "./components/Heder";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <Heder />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default App;
