import React, { useState } from "react";
import fIcon from "../assets/images/fIcon.svg";
import call from "../assets/images/call.svg";
import env from "../assets/images/env.svg";
import loc from "../assets/images/loc.svg";
import sub from "../assets/images/sub.svg";
import facebook from "../assets/images/facebook2.svg";
import twitter from "../assets/images/twitter2.svg";
import sectionAnimate from "./SlidingVariants";
import { motion } from "framer-motion";
import instagram from "../assets/images/instagram2.svg";
import { Link } from "react-router-dom";

import "../styles/footer.css";

const lst = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Service",
    link: "/services",
  },
  {
    text: "Articles",
    link: "/articles",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageSent, setmessageSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setmessageSent(false)
    const formdata = new FormData();
    formdata.append("email", email);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://backend.fog-agric.com/subscribe", requestOptions)
      .then(res => {
        if (!res.ok){
          setLoading(false)
          return
        }
      })
      .then(data => {
        setLoading(false)
        setEmail("")
        setmessageSent(true)
      })
    };
  return (
    <motion.footer
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}
    >
      <div className="footer-top">
        <div className="footer-column">
          <p>FOG</p>
          <p>Your dependable companion for all agric produce</p>
          <ul>
            <li>
              <a href="#">
                <img src={facebook} alt="fb" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="fb" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="fb" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Explore</p>
          <hr />
          <ul>
            {lst.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <img src={fIcon} alt="icon" />
                  <span>{item.text}</span>
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <p>Contact</p>
          <hr />
          <ul>
            <li>
              <img src={call} alt="call" /> <span>+2348062929576</span>
            </li>
            <li>
              <img src={env} alt="call" />{" "}
              <span>Fog.agricservices@gmail.com</span>
            </li>
            <li>
              <img className="aa" src={loc} alt="call" />{" "}
              <span>
                House 6, Onile aro Goshen Estate, Ajibode, U.I Ibadan.
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={loading ? "spin" : ""} disabled={loading}>
              <img src={sub} alt="sub" />
            </button>
            <p className={messageSent ? "message-sent done" : "message-sent"}>
              Thank you for subscribing!
            </p>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Copyright {new Date().getFullYear()} by FOG</p>
        <p>
          Built by{" "}
          <a href="https://popsicool.fog-agric.com" target="_blank">
            Popsicool
          </a>
        </p>
      </div>
    </motion.footer>
  );
};
