import React, { useRef, useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ww91c4a', 'template_il4woix', form.current, '4jX314JmqY_XUKT0y')
      .then((result) => {
          console.log(result.text);
          setEmail(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  if(email === true) {
    setTimeout(() => {setEmail(false)}, 3000)
  }

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
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="email-form">
        <label className="light-text">Email</label>
        <input type="text" className="email-input"></input>
        </div>
        <div className="email-form">
        <label className="light-text">Message</label>
        <input type="text" className="message-input"></input>
        </div>

        <button type="submit" className="button-blue">Send</button>
        {email && (<p className="blue-text sent-message">Email Sent!</p>)}
      </form>
    </div>
  );
};

export default Contact;
