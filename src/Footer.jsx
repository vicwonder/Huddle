import React from "react";
import footerSection from "./Huddle_Images/bg-footer-top-desktop.svg";
import secMes from "./Huddle_Images/icon-messages copy.svg";
import phone from "./Huddle_Images/icon-phone.svg";
import email from "./Huddle_Images/icon-email.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <img src={footerSection} alt="footersvg" className="footerTop" />
      </div>
      <div className="contact-letters">
        <div className="contact">
          <div className="messText">
            <img src={secMes} alt="message" />
            <h1>Huddle</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultricies quis sem.
          </p>
          <div className="phone">
            <div className="phone-img">
              <img src={phone} alt="phonePic" />
            </div>
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="email">
            <div className="email-img">
              <img src={email} alt="emailPic" />
            </div>
            <p>example@huddle.com</p>
          </div>
          <div className="icons">
            <FaSquareFacebook />
            <FaInstagram />
            <FaTwitterSquare />
          </div>
        </div>
        <div className="letter">
          <h1>NEWSLETTER</h1>
          <p>
            To receive tips on how to grow your community. sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>
          <div className="input-but">
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
