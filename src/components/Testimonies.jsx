import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/testimonies.css";
import uzoma from "../assets/images/uzoma.png";
import jerry from "../assets/images/jerry.png";
import ernest from "../assets/images/ernest.png";
import star from "../assets/images/star.svg";
import sectionAnimate from "./SlidingVariants";

const testimonials = [
  {
    name: "Mr Uzoma",
    text: "FOG is my eveyday go to company. No better reliable and trustworthy source than FOG",
    picture: uzoma,
    post: "CEO Simdis Farms",
  },
  {
    name: "Mr Jerry",
    text: "Fog Agric services is a reliable source I do get my agricultural needs. Their service is top notch with fast and excellent delivery",
    picture: jerry,
    post: "CEO Jerryjo Farms",
  },
  {
    name: "Mr Ernest Uzebor",
    text: "When it comes to Fast, reliable, trustworthy and efficient delivery, I give it to FOG agricultural services",
    picture: ernest,
    post: "CEO Beta Agro and Allied Services",
  },
];
export const Testimonies = () => {
  const [pos, setPos] = useState(0);
  const intervalRef = useRef(null);
  const changePos = (i) => {
    setPos(i);
    resetInterval();
  };
  const resetInterval = () => {
    if (intervalRef.current) {
      // clearInterval(intervalRef.current);
    }
    // intervalRef.current = setInterval(() => {
    //   setPos(prevPos => (prevPos + 1) % testimonials.length);
    // }, 5000);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPos(prevPos => (prevPos + 1) % testimonials.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [testimonials.length]);
  return (
    <motion.section className="testimonies-section"
    variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}
      >
      <p className="custRev">Customers' Review</p>
      <p className="whatPs">What people say?</p>
      <div className="test-bg"></div>
      {testimonials.map((testimony, index) => (
        <div className={pos === index ? "rev-cards active" : "rev-cards"} key={index}>
          <div className="review-section">
            <div className="review">
              <div className="stars">
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
              </div>
              <p>
                {testimony.text}
              </p>
            </div>
            <div className="review-pict">
              <img src={testimony.picture} alt="uzoma" />
            </div>
          </div>
          <p className="reviewer-name">{testimony.name}</p>
          <p className="reviewer-description">{testimony.post}</p>
        </div>
      ))}
          <div className="dots">
            <span className={pos === 0 ? "active-dot" : ""} onClick={() => changePos(0)}></span>
            <span className={pos === 1 ? "active-dot" : ""} onClick={() => changePos(1)}></span>
            <span className={pos === 2 ? "active-dot" : ""} onClick={() => changePos(2)}></span>
          </div>




    </motion.section>
  );
};
