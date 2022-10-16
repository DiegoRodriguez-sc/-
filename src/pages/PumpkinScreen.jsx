import React, { useRef, useState } from "react";
import "../components/Halloween/pumpkin.css"
import { vale } from "../helpers/phrases";

const PumpkinScreen = () => {
  const ref = useRef(null);
  const [frase, setfrase] = useState("");
  let slice = ['_one','_two','_three'];


	const	pumpkin_feature = document.getElementsByClassName('featurep');
	let	c = 0;
  
  function changePumpkin() {

      if(document.body.classList.contains('rotate')) {
        document.body.classList.remove('rotate')
      } else {
        document.body.classList.add('rotate')
      }
      
      const run = setInterval(runPump, 100)
      let calabazaeyes = [];
      let calabazanoses = [];
      let calabazamouths = [];

      function runPump() {
        document.getElementById("pump").style.pointerEvents = "none";
        for(let i=0;i<pumpkin_feature.length;i++) {
          
          const f = slice[Math.floor(Math.random()*slice.length)]

          if(i==0 || i==3) {
            pumpkin_feature[i].className = 'featurep eyes'+f;
            calabazaeyes=[...calabazaeyes,f];
          }
          if(i==1 || i==4) {
            pumpkin_feature[i].className = 'featurep nose'+f;
            calabazanoses=[...calabazanoses,f];
          }
          if(i==2 || i==5) {
            pumpkin_feature[i].className = 'featurep mouth'+f;
            calabazamouths=[...calabazamouths,f];
          }

        }
        if( c == 20) {
          clearInterval(run)
          setfrase(vale[Math.floor(Math.random()*vale.length)]);
          if((calabazaeyes[calabazaeyes.length - 1] === calabazaeyes[calabazaeyes.length - 2]) 
          && (calabazanoses[calabazanoses.length - 1] === calabazanoses[calabazanoses.length - 2]) 
          && (calabazamouths[calabazamouths.length - 1] === calabazamouths[calabazamouths.length - 2])){
            //modal o algo 
            document.getElementById("same").click();
          }
          c = 0
          document.getElementById("pump").style.pointerEvents = "auto";
        } else {
          c++
        }
      }
  

      
  }

  return (
    <>
      <h2 className="self-end mb-60 text-3xl font-bold">Touch the pumpkins</h2>
      <div id="pump" className="contPump">
        <div className="pumpkinp cursor-pointer" onClick={changePumpkin}>
          <div className="featurep"></div>
          <div className="featurep"></div>
          <div className="featurep"></div>
        </div>
        <div className="pumpkinp cursor-pointer"  onClick={changePumpkin}>
          <div className="featurep"></div>
          <div className="featurep"></div>
          <div className="featurep"></div>
        </div>
      </div>
      
      <label htmlFor="my-modal-3" id="same" className="btn hidden modal-button">open modal</label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations baby 지우!</h3>
          <p className="py-4">{frase}</p>
        </div>
      </div>


    </>
  );
};

export default PumpkinScreen;
