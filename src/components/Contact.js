import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="contact">

      {/* Text Side */}
      <div className="contact-area">
      <p id="contact-title">Let's Connect</p>
      <p id="contact-subtext" className="light-text">
        Have some big ideas? Need a motivated developer to join your project?
        Reach out!
      </p>
      <p className="blue-text">Email</p>
      <p className="text">ericaemorabito@gmail.com</p>
      <p className="blue-text">Phone</p>
      <p className="text">512-354-9239</p>
      </div>

      {/* Form Side */}
      <form className="contact-form">
        <div className="email-form">
        <label className="light-text">Email</label>
        <input type="text" className="email-input"></input>
        </div>
        <div className="email-form">
        <label className="light-text">Message</label>
        <input type="text" className="message-input"></input>
        </div>

        <button className="button-blue">Send</button>
      </form>
    </div>
  );
};

export default Contact;
