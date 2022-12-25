import React from "react";
import img from "../../helpers/img";
import Watch from "../Watch";
import Background from "./Background";

const DashBoardChristmas = () => {

  const gift = () =>{
    var source = img[Math.floor(Math.random() * 5) + 1];
    var a = document.createElement('a');
    a.download = true;
    a.target = '_blank';
    a.href= source;
    a.click();
  }

 
  
  return (
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">이 지 우</h1>
          <p className="pt-6">time left until your birthday 🎂</p>
          <p className="pb-6">Merry christmas 🎄🎅</p>
          <Watch />
          <br />
          <button onClick={gift}>🎁</button>
        <Background id="tsparticles" />
        </div>
      </div>
  );
};

export default DashBoardChristmas;
