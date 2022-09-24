import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footerArea">
      <div className="footerArealeft">
        <ul>
          <li><i className="fa-solid fa-envelope"></i> Gmail: nileshlad871@gmail.com</li>
          <li><i className="fa-solid fa-phone"></i>Phone No: +91 9702341172</li>
        </ul>
      </div>
      <div className="connectWithme2">
        <p className="para">Connect with me</p>
        <div className="socialmedia">
          <a
            href="https://www.linkedin.com/in/nilesh-lad-476216216/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nileshlad09"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a
            href="https://www.instagram.com/nileshlad09/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <a
            href="https://twitter.com/Nileshlad09"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
