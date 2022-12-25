import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = ({handlePress}) => {
    let navigate = useNavigate();
  //redirection
  const r = {
    Home: () => {
      navigate("/");
      location.reload();
    },
    Song: () => {
      navigate("/song-christmas");
      location.reload();
    },
    Game: () => {
      navigate("/game");
      location.reload();
    },
  };

  const redirectLink = (e) => {
    r[e.target.textContent]();
    handlePress();
  };


  const stopMusic = () =>{
    navigate("/song-christmas")
    location.reload();
  }

  return (
    <>
      <button className="btn m-2" onClick={redirectLink}>
        Home
      </button>
      {/* <button className="btn m-2" onClick={redirectLink}>
        Town
      </button> */}
      <button className="btn m-2" onClick={redirectLink}>
        Song
      </button>
      {/* <button className="btn m-2" onClick={redirectLink}>
        Game
      </button> */}
      <button className="btn glass" onClick={stopMusic}>music stop</button>
    </>
  );
};

export default NavButtons;
