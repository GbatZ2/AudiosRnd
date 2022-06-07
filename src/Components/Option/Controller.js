import React, { useContext } from "react";
import { AudioContext } from "../../Context/AudioContext";
import "./Controller.css";

export default function Controller() {
  const { setTime ,setVisible} = useContext(AudioContext);

  const control = () => {
    setTime(true)
    setVisible(false)
}


  return (
    <div className="controllerCard">
      <button onClick={() => control()}>Random</button>
    </div>
  );
}
