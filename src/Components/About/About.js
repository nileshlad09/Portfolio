import React from "react";
import "./about.css";
import about from "../../Img/ContactMe/aboutme.png";
import { Link } from "react-scroll";
import resume from '../../Resume/NileshLadResume.pdf'
const About = () => {
  return (
    <div className="AboutSection" id="about">
      <div className="row">
        <div className="introimg col-lg-5 col-md-12 col-sm-12">
          <img src={about} alt="" />
        </div>
        <div className="intro col-lg-6 col-md-12 col-sm-12">
          <h1>LET ME INTRODUCE <br />
          <span> MYSELF </span></h1>
          <p>
            My name is Nilesh Lad and I am currently pursuing engineering(BE)
            from Vidyalankar Institute of Technology, Mumbai. Currently, I am in
            the 3rd year of my course under the branch of computer engineering.
            <br />
            <br />
            I started coding in the year 2021 and love to do competitive coding
            specifically using C and C++ programming languages. Adding to this I
            am focusing on 'MERN Stack' development currently i am learning
            Node.js .
            <br />
            <br />
             Apart from this I believe in teamwork, smart work and
            carry never give up attitude.
          </p>
          <div className="btnBox">
              <button className="btn btn1"><a href={resume} target="_blank">Resume</a> </button>
              <button className="btn btn2"><Link to="projects">Projects</Link></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
