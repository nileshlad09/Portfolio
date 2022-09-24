import React from "react";
import image from "../../Img/ContactMe/aboutme.png";
import "./about.css";
import resume from "../../Resume/NileshLadResume.pdf";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
   Aos.init({duration:1000})
  },[])
  return (
    <div className="aboutmeArea " id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 image" >
            <img src={image} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 aboutme">
            <h1 className="title-text text-uppercase introMEtitle" >
              let me introduce <span> myself</span>
            </h1>
            <p className="para"  >
              My name is Nilesh Lad and I am currently pursuing engineering(BE)
              from Vidyalankar Institute of Technology, Mumbai. Currently, I am
              in the 3rd year of my course under the branch of computer
              engineering.
              <br />
              <br />
              I started coding in the year 2021 and love to do competitive
              coding specifically using C and C++ programming languages. Adding
              to this I am focusing on 'MERN Stack' development currently i am
              learning Node.js .
              <br />
              <br />
              Apart from this I believe in teamwork, smart work and carry never
              give up attitude.
            </p>
            <div className="btnGroup">
              <button className="button secondary-button" >
                <a type="button" target="_blank" href={resume}>
                  Get Resume
                </a>
              </button>
              <Link
                smooth={true}
                duration={500}
                className="nav-link"
                to="project"
              >
                <button className="button secondary-button2">Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
