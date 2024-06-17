import React from "react";
import fIcon from "../assets/images/fIcon.svg";
import call from "../assets/images/call.svg";
import env from "../assets/images/env.svg";
import loc from "../assets/images/loc.svg";
import sub from "../assets/images/sub.svg";
import facebook from "../assets/images/facebook2.svg";
import twitter from "../assets/images/twitter2.svg";
import instagram from "../assets/images/instagram2.svg";
import { Link } from "react-router-dom";

import "../styles/footer.css";

const lst = [
  {
    text: "About",
    link: "/",
  },
  {
    text: "Service",
    link: "/services",
  },
  {
    text: "Gallery",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-column">
          <p>FOG</p>
          <p>Your dependable companion for all agric produce</p>
          <ul>
            <li><a href="#"><img src={facebook} alt="fb" /></a></li>
            <li><a href="#"><img src={instagram} alt="fb" /></a></li>
            <li><a href="#"><img src={twitter} alt="fb" /></a></li>
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
                House 6, Onile aro Goshen Estate, Ajibode, U.I Ibadan. Farm 1
                Address
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
        <form>
                <input type="text" placeholder="Your Email Address"/>
                <button>
                  <img src={sub} alt="sub" />
                </button>
              </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Copyright {new Date().getFullYear() } by FOG</p>
        <p>Built by <a href="#">Popsicool</a></p>
      </div>
    </footer>
  );
};
