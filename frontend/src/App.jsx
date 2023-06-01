/** @format */

import React from "react";
import Heder from "./components/Heder";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Heder />
      <Outlet />
    </div>
  );
};

export default App;
