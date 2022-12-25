import React from 'react'
import { useState } from 'react'
import SongScreen from './SongScreen';

const ChoiceScreen = () => {
    const [musicScreen, setMusicScreen] = useState(false);
    const [songs, setsongs] = useState("");
    const [musicUpload, setmusicUpload] = useState(true);
    const [uploadM, setuploadM] = useState("")

    const data = {
        "Jingle Bell Rock":"https://res.cloudinary.com/dgxoj05dn/video/upload/v1671923722/Jingle_Bell_Rock_pnngi5.mp3",
        "Rockin' Around The Christmas Tree":"https://res.cloudinary.com/dgxoj05dn/video/upload/v1671924576/Rockin_Around_The_Christmas_Tree_gqvwp8.mp3",
        "Carol of the Bells":"https://res.cloudinary.com/dgxoj05dn/video/upload/v1671924579/Libera__Carol_of_the_Bell_New_kw3x71.mp3",
        "White Christmas": "https://res.cloudinary.com/dgxoj05dn/video/upload/v1671924578/White_Christmas_jjjgnb.mp3",
        "Think of Christmas 가사":"https://res.cloudinary.com/dgxoj05dn/video/upload/v1671924578/Think_of_Christmas%EA%B0%80%EC%82%AC_gumhq8.mp3",
        "Sound of Christmas lights": "https://res.cloudinary.com/dgxoj05dn/video/upload/v1671924583/Sound_of_Christmas_lights_q3l81d.mp3"
    }

    const music = (e) => {
        setsongs(data[e.target.textContent]);
        setmusicUpload(true);
        setMusicScreen(true);
    }

    const upload = () => {
        document.getElementById("upload").click();
    }
    const fileUpload = (e) => {
        const file = e.target.files[0];
        setuploadM(e.target.files[0]);
        setmusicUpload(false);
        setMusicScreen(true);
    }   

  return (
    <div className='w-full'>
    {
        !musicScreen ?
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Choose your music</h1>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>Jingle Bell Rock</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>Rockin' Around The Christmas Tree</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>Carol of the Bells</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>White Christmas</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>Think of Christmas 가사</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={music}>Sound of Christmas lights</button>
            <br />
            <button className='btn btn-outline btn-success' onClick={upload}>upload</button>
            <input type="file" id="upload" onChange={fileUpload} hidden />
        </div>
        :
        <div>
            <SongScreen song={songs} upload={uploadM} music={musicUpload}/>
        </div>
    }
      
    </ div>
  )
}

export default ChoiceScreen