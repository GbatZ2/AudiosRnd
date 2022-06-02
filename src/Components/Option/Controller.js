import React, { useContext } from 'react'
import {AudioContext} from '../../Context/AudioContext'
import './Controller.css'


export default function Controller() {

    const { setTime,time } = useContext(AudioContext)


  return (
      <div className="controllerCard">
          <button onClick={()=>setTime(!time)} >Random</button>        
      </div>
  )
}
