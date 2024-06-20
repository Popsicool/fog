import React from "react";
import { motion } from "framer-motion";
import pol from "../assets/images/pol1.jpg";
import check from "../assets/images/check.svg";
import check2 from "../assets/images/check2.svg";
import { Link } from "react-router-dom";
import fogLogo from "../assets/images/fog_logo.jpg";
import sectionAnimate from "./SlidingVariants";
import bird from "../assets/videos/birds.mp4";
import "../styles/heroSection1.css";
import {EggSvg} from "./EggSvg"

export const HomeSection1 = () => {
  return (
    <motion.div>
      <motion.div className="home-section-1"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}>
        <div className="img-wrap">
          <img src={pol} alt="point of lay birds" />
        </div>

        <div className="middle">
          <p>
            Your dependable <br />
            Agric companion
          </p>
          <p>
            We are your best plug when it comes to supplying of Quality Point of
            lay birds, Quality Point of Cage birds, Quality Day old chicks and
            all forms of agricultural inputs
          </p>
          <p>
            <img src={check} alt="check" />
            <span>Best Quality standard</span>
          </p>
          <p>
            <img src={check} alt="check" />
            <span>Timely delivery</span>
          </p>
          <p>
            <img src={check} alt="check" />
            <span>Good customer delivery</span>
          </p>
          <Link to="/services">
            <button>Discover more</button>
          </Link>
        </div>
        <div className="right">
          <p>
          <EggSvg /> <span>Day old chicks</span>
          </p>
          <p>
            <EggSvg /> <span>Point of lay</span>
          </p>
          <p>
          <EggSvg /> <span>Point of cage</span>
          </p>
          <p>
          <EggSvg /> <span>Agric inputs</span>
          </p>
        </div>
      </motion.div>
      <motion.div className="home-section-1b"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}>
        <div className="left">
          <div className="row">
            <p>
              <img src={check2} alt="check" /> <span>QUALITY FIRST</span>
            </p>
            <p>At FOG, we supply the best products to our customer</p>
          </div>
          <div className="row">
            <p>
              <img src={check2} alt="check" /> <span>TIMELY DELIVERY</span>
            </p>
            <p>
              One of our main principle is to ensure our delivery is met at the
              promised time
            </p>
          </div>
          <div className="row">
            <p>
              <img src={check2} alt="check" />{" "}
              <span>GOOD CUSTOMER RELATIONSHIP</span>
            </p>
            <p>
              We take our customer relationship with highest priority, they are
              the backbone of our family
            </p>
          </div>
          <div className="row">
            <p>
              <img src={check2} alt="check" /> <span>COLLABORATION</span>
            </p>
            <p>
              We are always open to partnership and collaboration from all part
              of the world
            </p>
          </div>
        </div>
        <div className="right">
          <p>Why choose us?</p>
          <h2>Your satisfaction is our concern.</h2>
          <div className="right-bottom">
            <div className="right-left">
                <p className="orange">2K +</p>
                <p className="xyz">Trusted customers</p>
                <hr />
                <p className="orange">40M +</p>
                <p className="xyz">Pieces of birds sold</p>
            </div>
            <div className="right-right">
              <video src={bird} muted controls poster={fogLogo}></video>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
