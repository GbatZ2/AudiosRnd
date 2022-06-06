import React, { useContext } from "react";
import { AudioContext } from "../../Context/AudioContext";
import "./Controller.css";

export default function Controller() {
  const { setTime } = useContext(AudioContext);

  return (
    <div className="controllerCard">
      <button onClick={() => setTime(true)}>Random</button>
    </div>
  );
}
