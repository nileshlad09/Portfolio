import React from "react";
import profilImg from "../../Img/bg2.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import resume from "../../Resume/NileshLadResume.pdf";
import "./banar.css";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
const Banar = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web developer", "coder", "student"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };

    
  }, []);

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <div className="banarArea2" id="home">
      <section className="banarArea">
        <div className="container">
          <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-12 intro">
              <div>
                <h3 className="title-text">Hey,</h3>
                <h1 className="title-text text-uppercase">
                  I am <span>nilesh</span>
                </h1>
                <p className="text-uppercase para">
                  <span ref={el}></span>
                </p>
                <div className="btnGroup">
                  <button className="button secondary-button">
                    <a type="button" target="_blank" href={resume}>
                      Get Resume
                    </a>
                  </button>
                  <Link
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    to="about"
                  >
                    <button className="button secondary-button2">
                      About Me
                    </button>
                  </Link>
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
            <div className="col-lg-6 col-md-6 col-sm-12 profileImg " >
              <img src={profilImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banar;
