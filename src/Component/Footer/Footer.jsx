import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>StayFinder 🏠</h2>
          <p>
            Find your perfect stay, apartment, villa, or rental
            property with ease and confidence.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          

          <Link to={""}><div className=" ha12 ham3">Home</div></Link>
          <Link to={"/Listing"}><div className=" ha12 ham3">List your home</div></Link>
          <Link to={"/contact"}><div className=" ha12 ham4">Contact us</div></Link>
          <Link to={"/Login"}>
        <div className=" ha12 ham1">Login</div></Link> 
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>📍 Greater Noida, India</p>
          <p><MdEmail /> vivektiwari.in69@gmail.com</p>
          <p>📞 +91 9990858178</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 StayFinder. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;