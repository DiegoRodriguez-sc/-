import React from "react";
import Watch from "../Watch";
import Background from "./Background";

const DashBoardChristmas = () => {
  
  return (
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">이 지 우</h1>
          <p className="pt-6">time left until your birthday 🎂</p>
          <p className="pb-6">Merry christmas 🎄🎅</p>
          <Watch />
        <Background id="tsparticles" />
        </div>
      </div>
  );
};

export default DashBoardChristmas;
