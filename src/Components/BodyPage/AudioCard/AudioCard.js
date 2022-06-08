import React, { useContext, useEffect, useState} from "react";
import { AudioContext } from "../../../Context/AudioContext";
import notes from "../../../assets/images/notes.png"
import download from "../../../assets/images/download.png"

import './AudioCard.css'


export default function AudioCard() {
  const { audios,time,setValor,setTimer,timer,valor,setTime } = useContext(AudioContext);




  useEffect(() => {
  
    setValor(Math.floor(Math.random() * audios.length))
    setInterval(() => {
      
      setTimer(Math.floor(Math.random() * 3200000) + 800000)
      setTime(!time)
    }, timer);


  },[time])


 







  

  

  





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
