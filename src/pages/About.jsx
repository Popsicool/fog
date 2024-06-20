import React from "react";
import "../styles/about.css";
import veg2 from "../assets/images/veg2.jpg";
import tractor from "../assets/images/tractor.jpg";
import poster from "../assets/images/fog_logo.jpg";
import { Subheading } from "../components/Subheading";
import { Testimonies } from "../components/Testimonies";
import tecno from "../assets/images/team/tecno1.jpg";
import ako from "../assets/images/team/ako.jpg";
import tobi from "../assets/images/team/tobi.jpg";
import { motion } from "framer-motion";
import ona from "../assets/images/team/ona.jpg";
import pop from "../assets/images/team/pop.png";
import facebook from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter.svg"
import bird from "../assets/videos/intro.mp4"
import envelope from "../assets/images/env2.svg"
import sectionAnimate from "../components/SlidingVariants";
import pageVariant from "../components/PageVariants";
import willie from "../assets/images/team/willie.jpg";

const teams = [
  {
    name: "AINA ADEYEMI",
    position: "Sales and Operation manager",
    phone: "+2348062929576",
    image: tecno,
    twitter: "https://twitter.com/adeyemiaina5",
    linkedin: "https://www.linkedin.com/in/aina-adeyemi-6ab98ba3",
    email: "mailto:ainaadeyemi7@gmail.com",
  },
  {
    name: "AKODOGBO OLORUNWA",
    position: "Head of operations",
    phone: "+2348139326554",
    image: ako,
    twitter: "https://twitter.com/olorunwa_",
    linkedin: "https://www.linkedin.com/in/olorunwa-akodogbo-7575bb161",
    email: "mailto:olorunwaakodogbo@gmail.com",
  },
  {
    name: "DR ONAOLAPO AYOTOMILOLA",
    position: "Veterinary Doctor",
    phone: "+2348130300717",
    image: ona,
    twitter: "https://twitter.com/adeyemiaina5",
    linkedin: "https://www.linkedin.com/in/dr-ayotomilola-onaolapo-89a774264",
    email: "mailto:onaolapo.ayotomilola@gmail.com",
  },
  {
    name: "OBILADE OLUWATOBI",
    position: "Field Manager",
    phone: "+2348164742664",
    image: tobi,
    twitter: "https://twitter.com/adeyemiaina5",
    linkedin: "https://www.linkedin.com/in/aina-adeyemi-6ab98ba3",
    email: "mailto:ainaadeyemi7@gmail.com",
  },
  {
    name: "AKINOLA SAMSON",
    position: "Software Engineer",
    phone: "+2348069482021",
    image: pop,
    twitter: "https://twitter.com/Samson_Akinola1",
    linkedin: "https://www.linkedin.com/in/popsicool",
    email: "mailto:akinolasamson1234@gmail.com",
  },
  {
    name: "AFOLABI WILSON",
    position: "Sales Rep/ Farm Consultant",
    phone: "+2349012983606",
    image: willie,
    twitter: "https://twitter.com/AfolabiWilson",
    linkedin: "https://www.linkedin.com/in/afolabi-wilson-2310475a",
    email: "mailto:wafolabi1@gmail.com",
  },
];

export const About = () => {
  return (
    <motion.section className="about"
    variants={pageVariant}
    initial="start"
      animate="end"

    >
      <Subheading subt="Home / about" tit="About" />
      <section className="section1">
        <div className="section1-left">
          <div className="abs1"></div>
          <div className="abs2">
            <img src={veg2} alt="veg 2" />
          </div>
          <div className="tractor-wrap">
            <img src={tractor} alt="tractor" />
          </div>
        </div>
        <div className="section1-right">
          <p>Get to know us</p>
          <p>WE ARE FOG</p>
          <p>OUR GOAL IS TO SUPPLY QUALITY ALWAYS</p>
          <p>
            FOG Agricultural Services is an agricultural organization
            established in 2019 by a young passionate Agripreneur named Aina
            Adeyemi, on a mission to bridge the gap in shortage of food
            distribution, connecting farmers to customers, sourcing for quality
            agricultural products to intending and practicing farmers, providing
            a lasting solution to farmers and enlightening them on modern
            agricultural practices, in order to ensure continuous availability
            of safe and wholesome agricultural outputs for the nation.
          </p>
        </div>
      </section>
      <div className="video-wrap">
        <video src={bird} poster={poster} controls>Your browser does not support video</video>
      </div>
      <motion.section className="team-section" 
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}>
        <p>Team Members</p>
        <p>THE BRAINS BEHIND FOG</p>
        <div className="team-members">
          {teams.map((staff, index) => (
            <div className="team-card" key={index}>
              <div className="img-wrap">
                <img src={staff.image} alt={staff.name} />
              </div>
              <div className="info-box">
                <p>{staff.name}</p>
                <p>{staff.position}</p>
                <div className="icons">
                  <a href={staff.linkedin} target="_blank"><img src={facebook} alt="fb"/></a>
                  <a href={staff.twitter} target="_blank"><img src={twitter} alt="fb"/></a>
                  <a href={staff.email} target="_blank"><img src={envelope} alt="fb"/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <Testimonies />
    </motion.section>
  );
};
