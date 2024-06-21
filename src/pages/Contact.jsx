import React, {useState} from "react";
import { Subheading } from "../components/Subheading";
import sub from "../assets/images/sub.svg";
import sectionAnimate from "../components/SlidingVariants";
import pageVariant from "../components/PageVariants";
import "../styles/contact.css";
import { motion } from "framer-motion";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setmessageSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setmessageSent(false)
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("message", formData.message);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://backend.fog-agric.com/contact", requestOptions)
      .then(res => {
        if (!res.ok){
          setLoading(false)
          return
        }
      })
      .then(data => {
        setLoading(false)
        setFormData({
          email: "",
          name: "",
          message:""
        })
        setmessageSent(true)
      })
    };
  return (
    <motion.div className="contact"
    variants={pageVariant}
    initial="start"
      animate="end">
      <Subheading subt="Home / contact" tit="Contact" />
      <div className="contact-cards">
        <div className="contact-card">
          <p>Contact</p>
          <p>Call: (+234) 8062929576</p>
          <p>Whatsapp:(+234) 8062929576</p>
          <p>fog.agricservices@gmail.com</p>
          <p>support@fog-agric.com</p>
        </div>
        <div className="contact-card">
          <p>Address</p>
          <p>
            Head office: House 6, Onile aro Goshen Estate, Ajibode, U.I Ibadan.
          </p>
          <p>Farm address 1: Edun village, lalupon, Iwo road, Ibadan.</p>
          <p>Farm address 2: Iyalode road 7, olohunda akobo Ibadan.</p>
        </div>
        <div className="contact-card">
          <p>Working hours</p>
          <p>Our Offices are open by:</p>
          <br />
          <p>9am-5pm on Business days</p>
          <br />
          <p>10am-2pm on saturdays</p>
        </div>
      </div>
      <motion.div className="contact-down"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 1 }}>
        <iframe
          title="location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=House%206,%20Onile%20aro%20Goshen%20Estate,%20Ajibode,%20U.I%20Ibadan.+(FOG%20Agricultural%20services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-form">
            <p>Contact us</p>
            <p>Write a Message</p>
            <form onSubmit={handleSubmit}>
                <div className="inp-top">
                    <input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    />
                    <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    />
                </div>
                <textarea placeholder="Write a Message" required
                onChange={handleChange}
                name="message"
                value={formData.message}
                ></textarea>
                <button className={loading ? "spin" : ""} disabled={loading}> Send a Message <img src={sub} alt="sub" /></button>
                <p className= {messageSent ? "message-sent done" : "message-sent"}>Message sent!</p>
            </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
