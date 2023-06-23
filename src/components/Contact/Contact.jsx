import React from "react";
import "./contact.scss";
import mapabudhabi from "../../assets/images/mapabudhabi.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="main-title">
          <p>Contact</p>
        </div>
        <div className="inter-contact">
          <div className="content">
            <h1>Get In Touch👋</h1>
            <div className="email">
              <h2>Email: </h2>
              <p>yasmineiismail@gmail.com</p>
              <h2>Phone Number: </h2>
              <p>+971 50 146 1058</p>
            </div>
          </div>
          <div className="contact-map">
            <img src={mapabudhabi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
