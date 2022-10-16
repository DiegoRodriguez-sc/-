import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = ({handlePress}) => {
    let navigate = useNavigate();
  //redirection
  const r = {
    Home: () => {
      navigate("/");
    },
    Town: () => {
      navigate("/town");
    },
    PumpKin: () => {
      navigate("/pumpkin");
    },
  };

  const redirectLink = (e) => {
    r[e.target.textContent]();
    handlePress();
  };

  return (
    <>
      <button className="btn m-2" onClick={redirectLink}>
        Home
      </button>
      {/* <button className="btn m-2" onClick={redirectLink}>
        Town
      </button> */}
      <button className="btn m-2" onClick={redirectLink}>
        PumpKin
      </button>
    </>
  );
};

export default NavButtons;
