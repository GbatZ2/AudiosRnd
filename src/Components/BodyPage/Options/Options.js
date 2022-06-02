import React from 'react'
import './Options.css'
import video from '../../..//assets/videos/video.mp4'
export default function Options() {
  return (
    <div className="options">
      <video src={video} autoPlay muted loop className="videoBg"></video>
      
    </div>
  )
}
