import React, { useState, useEffect } from "react";
import { Subheading } from "../components/Subheading";
import veg from "../assets/images/poster.jpg";
import doc from "../assets/images/doc.jpg";
import pol from "../assets/images/pol1.jpg";
import check from "../assets/images/check.svg";
import input from "../assets/images/input.jpg";
import consult from "../assets/images/consult.jpg";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/services.css";
import { images } from "../components/Pictures";

export const Services = () => {
  const [Images, setImages] = useState(images);
  const [filter, setFilter] = useState("");
  const updateFilter = (e) => {
    setFilter(e);
  };
  useEffect(() => {
    if (filter === "") {
      setImages(images);
      return;
    }
    setImages(images.filter((each) => each.category === filter));
  }, [filter]);
  return (
    <div className="services">
      <Subheading subt="Home / services" tit="Services" />
      <div className="services-hanging">
        <div className="service-card">
          <p></p>
          <img src={doc} alt="veg" />
          <p>Day old chicks</p>
        </div>
        <div className="service-card">
          <p></p>
          <img src={pol} alt="veg" />
          <p>Point of lay birds</p>
        </div>
        <div className="service-card">
          <p></p>
          <img src={input} alt="veg" />
          <p>Agricultural Inputs</p>
        </div>
        <div className="service-card">
          <p></p>
          <img src={consult} alt="veg" />
          <p>Consultation</p>
        </div>
      </div>
      <div className="what-we-do">
        <div className="left">
          <img src={veg} alt="picture" />
        </div>
        <div className="right">
          <p>What we do</p>
          <p>We supply all your agricultural needs</p>
          <ul>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>Properly vaccinated point of lay birds</span>
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>High quality point of cage birds</span>
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>
                Healthy Day old chicks broiler, turkey, noiler, pullet and
                guinea fowl
              </span>
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>All forms of livestock equipments</span>
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>
                Professional advice on farm planning and development to new and
                existing farms
              </span>
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />{" "}
              <span>
                Consultation service and agricultural Training for young and
                developing farms
              </span>
            </li>
          </ul>
          {/* <p className='ser-hanger'>Services</p> */}
        </div>
      </div>
      <div className="what-we-offer">
        <p>Our Products and services</p>
        <p>SEE WHAT WE HAVE TO OFFER</p>
        <div className="filters">
          <button
            className={filter === "" ? "active" : ""}
            onClick={() => updateFilter("")}
          >
            All
          </button>
          <button
            className={filter === "bird" ? "active" : ""}
            onClick={() => updateFilter("bird")}
          >
            Birds
          </button>
          <button
            className={filter === "input" ? "active" : ""}
            onClick={() => updateFilter("input")}
          >
            Inputs
          </button>
          <button
            className={filter === "consultancy" ? "active" : ""}
            onClick={() => updateFilter("consultancy")}
          >
            Consultancy
          </button>
        </div>
        <div className="pict-gallery">
          <AnimatePresence>
            {Images.map((each, idx) => (
              <motion.div
                className="img-wrap"
                key={idx}
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0.5, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={each.img} alt="gallery-image" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
