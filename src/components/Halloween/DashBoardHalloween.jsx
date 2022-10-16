import React from "react";
import Watch from "../Watch";
import "./halloween.css"

const DashBoardHalloween = ({ handlePress }) => {
  return (
    
      <div className="hero-content text-center">
        <div className="b-layers z-0 opacity-30">
          <div className="b1 z-0">
            <div className="blocks z-0">
              <div className="block block-4"></div>
              <div className="block block-5"></div>
              <div className="block block-6"></div>
            </div>
          </div>
          <div className="b2"></div>
          <div className="b3"></div>
          <div className="b4 z-0">
            <div className="bats">
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
              <div className="haloween-bat">
                <div className="h-left-wing">
                  <div className="l-wing"></div>
                </div>
                <div className="h-bat-body">
                  <div className="h-bt"></div>
                  <div className="h-bt"></div>
                </div>
                <div className="h-right-wing">
                  <div className="r-wing"></div>
                </div>
              </div>
            </div>
            <div className="moon"></div>
          </div>
        </div>
          <div className="max-w-md z-50 ">
            <h1 className="text-5xl font-bold z-50 ">이 지 우</h1>
            <p className="" onClick={handlePress}>time left until your birthday 🎂</p>
            <p>Happy halloween!! 🎃</p>
            <Watch />
          </div>
      </div>
  );
};

export default DashBoardHalloween;
