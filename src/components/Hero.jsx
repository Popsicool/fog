import React from 'react'
import { motion } from 'framer-motion'
import bird from "../assets/videos/birds.mp4"
import fogLogo from "../assets/images/fog_logo.jpg"
import "../styles/hero.css"


export const Hero = () => {
  // let vd = document.getElementById("heroVideo")
  // if (vd){
  //   vd.playbackRate = 0.2;
  // }

  return (
    <motion.section className='hero'>
        <video id="heroVideo" src={bird} autoPlay muted loop poster={fogLogo}></video>
        <p className="fog-header">FOG Agricultural</p>
        <p className="fog-header">Services</p>
        <p className='cAgric'>WE SEE AGRICULTURAL PROBLEMS, WE SOLVE THEM!</p>
        <button>About us</button>
    </motion.section>
  )
}
