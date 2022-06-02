import React, { useContext, useEffect, useState} from "react";
import { AudioContext } from "../../../Context/AudioContext";
import notes from "../../../assets/images/notes.png"
import download from "../../../assets/images/download.png"

import './AudioCard.css'


export default function AudioCard() {
  const { audios,time } = useContext(AudioContext);
  const [valor, setValor] = useState(null)
  const [timer, setTimer] = useState(null)


  const randomAudio = () => {
    setValor(Math.floor(Math.random() * audios.length));
    setTimer((Math.floor(Math.random() * 3060000)) + 650000)
    console.log(timer)
    
  }


  useEffect(() => {
    randomAudio()
  
  },[time])

  if (time) {
    setInterval(() => {
      setValor(Math.floor(Math.random() * audios.length));
      setTimer((Math.floor(Math.random() * 3060000)) + 650000)
      console.log(timer)
    }, timer);
}



  return (
    <div className="cardAudio">
      <figure className="figureNotes">
        <img src={notes} alt="notes icon" />
      </figure>

      <h2 className="audioTitle">Audios</h2>
        <audio id="audio" src={audios[valor]} autoPlay></audio>
        <a href={audios[valor]} download={audios[valor]} className="download">
        <figure className="figureDownload">
          <img src={download} alt="download button" />
        </figure>
      </a>
    </div>
  );
}
