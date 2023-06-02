/** @format */

import React from "react";
import Hero from "../components/Hero";
import Home from "../components/Home";
import { useSelector } from "react-redux";

export const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <>
      <Home />
    </>
  ) : (
    <Hero />
  );
};

export default HomeScreen;
