import React from "react";
import "./banar.css";
import profile from "../../Img/Profile/profile.png";
import react from "../../Img/technology/react.svg";
import node from "../../Img/technology/nodejs.svg";
import mongodb from "../../Img/technology/mongodb.svg";
import { Link } from "react-scroll";
import resume from '../../Resume/NileshLadResume.pdf'
const Banar = () => {
  return (
    <div className="BanarSection" id="home">
      <div className="row">
        <div className="intro col-lg-5 col-md-6 col-sm-12">
          <div className="intro2">
            <button className="iam">Hey, I am</button>
            <h2>Nilesh R Lad</h2>
            <p>Web Developer</p>
            <div className="btnBox">
              <button className="btn btn1"> <a href={resume} target="_blank">Resume</a></button>
              <button className="btn btn2" > <Link to="about">About Me</Link> </button>
            </div>
            <div className="connectWithme">
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
        </div>
        <div className="profile col-lg-7 col-md-6 col-sm-12">
          <img className="profileimage" src={profile} alt="" />
          <div className="boxContainer">
            <div className="box box1">
              <img src={react} alt="" />
            </div>
            <div className="box box2">
              <img src={mongodb} alt="" />
            </div>
            <div className="box box3">
              <img src={node} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
