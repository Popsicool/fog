import React from "react";
import { motion } from "framer-motion";
import call from "../assets/images/Icon.svg";
import email from "../assets/images/email.svg";
import map from "../assets/images/map.svg";
import { Link, useLocation } from "react-router-dom";
import fogLogo from "../assets/images/fog_logo.jpg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

import "../styles/navigation.css";

const links = [
  {
    link: "/",
    text: "Home"
  },
  {
    link: "/about",
    text: "About"
  },
  {
    link: "/services",
    text: "Service"
  },
  {
    link: "/articles",
    text: "Articles"
  },
  {
    link: "/contact",
    text: "Contact"
  },
  
]
export const Navigation = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <motion.header>
      <section className="nav-top">
        <div className="nav-top-left">
          <div className="logo-wrap">
            <img src={fogLogo} alt="fog-logo" />
          </div>

          <svg viewBox="0 0 500 500">
            <text x="-150%" y="50%" dy=".32em" className="logo-text-1">
              FOG agric
            </text>
           
          </svg>
        </div>
        <div className="nav-top-right">
          <ul>
            <li>
              <a href="https://www.facebook.com/FogAgricServices/" target="_blank">
                <div className="social-icon-wrap">
                  <img src={facebook} alt="facebook" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/p/CefgUy_K70K/?igshid=YmMyMTA2M2Y=" target="_blank">
                <div className="social-icon-wrap">
                  <img src={instagram} alt="facebook" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/fogagric" target="_blank">
                <div className="social-icon-wrap">
                  <img src={twitter} alt="facebook" />
                </div>
              </a>
            </li>
          </ul>
          <div className="tsc">
            <img src={call} alt="icon" />
            <div className="tsc-text">
              <p>Call center</p>
              <p>+2348062929576</p>
            </div>
          </div>
          <div className="tsc">
            <img src={email} alt="icon" />
            <div className="tsc-text">
              <p>Send Email</p>
              <p>fog.agricservices@gmail.com</p>
            </div>
          </div>
          <div className="tsc">
            <img src={map} alt="icon" />
            <div className="tsc-text">
              <p>Goshen Estate</p>
              <p>Ajibode, U.I Ibadan.</p>
            </div>
          </div>
        </div>
      </section>
      <nav>
        <ul>
          {links.map((item, index) => (
            <li key={index} >
              <Link className={new RegExp(`^${item.link}(/|$)`).test(path) ? "active" : "" } to={item.link}>{item.text}</Link>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </motion.header>
  );
};
