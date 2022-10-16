import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Watch from "../Watch";

const DashBoard = ({ handlePress }) => {
  const [stage, setStage] = useState(null);
  let auto = false;

  const refStage = useRef(null);
  useEffect(() => {
    const stageR = refStage.current;
    setStage(stageR);
  }, []);

  //fire
  const fire = (m) => {
    const firework = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      ),
      trail = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      ring = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      hsl = "hsl(" + gsap.utils.random(0, 360, 1) + ",100%,50%)";

    stage.appendChild(firework);
    firework.appendChild(trail);
    firework.appendChild(ring);

    for (let i = 1; i < 5; i++) {
      const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
      gsap.set(t, {
        x: m.x,
        y: innerHeight,
        opacity: 0.25,
        attr: { "stroke-width": i, d: "M0,0 0," + innerHeight },
      });
      gsap.to(t, { y: m.y, ease: "expo" });
      trail.appendChild(t);
    }

    for (let i = 0; i < gsap.utils.random(5, 8, 1); i++) {
      const c = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      gsap.set(c, {
        x: m.x,
        y: m.y,
        attr: {
          class: "core",
          r: () => (i + 1) * 25,
          fill: "none",
          stroke: hsl,
          "stroke-width": gsap.utils.random(1.5, 3.4),
          "stroke-dasharray": "1 " + gsap.utils.random(15, 30, 1),
        },
      });
      ring.appendChild(c);
    }

    gsap
      .timeline({ onComplete: () => stage.removeChild(firework) })
      .to(
        trail.children,
        {
          duration: 0.2,
          attr: { d: "M0,0 0,0" },
          stagger: -0.08,
          ease: "expo.inOut",
        },
        0
      )
      .to(
        trail.children,
        {
          duration: 0.4,
          scale: () => gsap.utils.random(40, 80, 1),
          attr: { stroke: hsl },
          stagger: -0.15,
          ease: "expo",
        },
        0.4
      )
      .to(
        trail.children,
        { duration: 0.3, opacity: 0, ease: "power2.inOut", stagger: -0.1 },
        0.5
      )
      .from(
        ring.children,
        { duration: 1, scale: 0, stagger: 0.05, ease: "expo" },
        0.4
      )
      .to(ring.children, { opacity: 0, stagger: 0.1, ease: "sine.inOut" }, 0.7)
      .to(ring.children, { duration: 1, y: "+=30", ease: "power2.in" }, 0.7);
  };

  //automatic
  const autoPlay = () => {
    for (let i = 0; i < gsap.utils.random(3, 9, 1); i++) {
      gsap.delayedCall(i / 2, fire, [
        {
          x: gsap.utils.random(99, innerWidth - 99, 1),
          y: gsap.utils.random(99, innerHeight - 99, 1),
        },
      ]);
    }
    if (auto) {
      gsap.delayedCall(3.5, autoPlay);
    } else {
      gsap.killTweensOf(autoPlay);
    }
  };

  const toggleAuto = () => {
    auto = !auto;
    gsap
      .timeline({ defaults: { duration: 0.3, ease: "power2.inOut" } })
      .to(".knob", { x: () => (auto ? 18 : 0) }, 0);
    if (auto) {
      autoPlay();
    } else {
      gsap.killTweensOf(autoPlay);
      gsap.killTweensOf(fire);
    }
  };

  const m = { x: 0, y: 0 };

  window.onpointerdown = window.onpointermove = (e) => {
    m.x = e.clientX;
    m.y = e.clientY;
  };

  const handlepointer = (e) => {
    gsap.killTweensOf(autoPlay);
    gsap.killTweensOf(fire);
    auto = true;
    toggleAuto();
    fire(m);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">이 지 우</h1>
            <p className="py-6">time left until your birthday 🎂</p>
            <Watch />
          </div>
        </div>
      </div>
      <svg className="w-100 h-100" stroke="#fff" strokeLinecap="round">
        <g
          className="stage"
          onPointerUp={(e) => handlepointer(e)}
          ref={refStage}
        >
          <rect width="100%" height="100%" fill="rgba(0,0,0,0)" stroke="none" />
        </g>
        <g>
          <text x="10" y="35" onClick={handlePress} className="cursor-pointer">
            🍒
          </text>
        </g>

        
      </svg>
    </>
  );
};

export default DashBoard;
