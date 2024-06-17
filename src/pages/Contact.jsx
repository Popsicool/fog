import React from "react";
import { Subheading } from "../components/Subheading";
import sub from "../assets/images/sub.svg";
import "../styles/contact.css";
export const Contact = () => {
  return (
    <div className="contact">
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
      <div className="contact-down">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15825.954437703762!2d3.8146535999999998!3d7.411048200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1689954050789!5m2!1sen!2sng"
          className="map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-form">
            <p>Contact us</p>
            <p>Write a Message</p>
            <form>
                <div className="inp-top">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                </div>
                <textarea placeholder="Write a Message" required></textarea>
                <button>Send a Message <img src={sub} alt="sub" /></button>
            </form>
        </div>
      </div>
    </div>
  );
};
