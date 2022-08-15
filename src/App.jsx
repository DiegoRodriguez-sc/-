import React, { useEffect, useState } from "react";
import Watch from "./components/Watch";

function App() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">이 지 우</h1>
          <p className="py-6">
            time left until your birthday
          </p>
          <Watch/>
        </div>
      </div>
    </div>
  );
}

export default App;
