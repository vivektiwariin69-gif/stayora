import React from "react";
import "./Contact.css";
import { IoSend } from "react-icons/io5";

function Contact() {
  return (
    <div id="contact">
      <form action="https://formspree.io/f/xdaveder" method = "POST">

        <h1 id="contacttitle">Contact Us 📩</h1>

        <p id="contactsubtitle">
          Have a question, suggestion, or property inquiry? We'd love to hear from you.
        </p>

        <div className="list">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="name"
            placeholder="Enter your full name"
            required

          />
        </div>

        <div className="list">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="list">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="list">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="list">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        <button id="contactbtn">
          Send Message <IoSend />
        </button>

      </form>
    </div>
  );
}

export default Contact;