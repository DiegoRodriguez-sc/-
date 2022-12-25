import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CardTheme from '../components/CardTheme'
import DashBoardChristmas from '../components/Christmas/DashBoardChristmas'
import Navbar from '../components/Navbar'
import NavButtons from '../components/NavButtons'
import ChoiceScreen from '../pages/ChoiceScreen'
import GameSantaScreen from '../pages/GameSantaScreen'
import SongCScreen from '../pages/SongCScreen'


const AppRouter = () => {

  const themeDefault = localStorage.getItem("tema") || "forest";
  const [theme, setTheme] = useState(themeDefault);
  const temas = [
    // "light",
    "dark",
    // "cupcake",
    // "bumblebee",
    // "emerald",
    // "corporate",
    "synthwave",
    "retro",
    // "cyberpunk",
    "valentine",
    "halloween",
    // "garden",
    "forest",
    "aqua",
    // "lofi",
    // "pastel",
    // "fantasy",
    // "wireframe",
    "black",
    "luxury",
    "dracula",
    // "cmyk",
    // "autumn",
    "business",
    // "acid",
    // "lemonade",
    "night",
    "coffee",
    // "winter",
  ];

  const handlePress = () => {
    document.querySelector("#press").click();
  };


  return (

    <>
     <BrowserRouter>
      <div className="drawer" data-theme={theme}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="hero min-h-screen bg-base-200">
            <Navbar handlePress={handlePress}/>
            <Routes>
                  <Route path="/" element={<DashBoardChristmas/>}/>
                  {/* <Route path="/song-christmas" element={<ChoiceScreen/> } /> */}
                  <Route path='/song-c' element={<SongCScreen/>}/>
                  <Route path="/game" element={<GameSantaScreen/>} />
            </Routes>
            <label htmlFor="my-drawer" id='press' className="hidden drawer-button"></label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

            <div className="flex flex-col w-full border-opacity-50">
              <h2 className="text-3xl font-bold text-center m-5">Pages</h2>
              <div className="grid h-auto card bg-base-300 rounded-box ">
                 <NavButtons handlePress={handlePress}/>
              </div>
              <div className="divider"></div>
              
              
              
              <h2 className="text-3xl font-bold text-center mt-2">Themes</h2>
              <div className="grid h-auto card bg-base-300 rounded-box">
                    {temas.map((t) => (
                      <CardTheme
                        key={t}
                        theme={t}
                        name={t}
                        setTheme={setTheme}
                        handlePress={handlePress}
                      />
                  ))}
              </div>
            </div>


            
          </ul>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default AppRouter