import React from "react";
import './contactme.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contactme = () => {  
  useEffect(()=>{
    Aos.init({duration:1000})
   },[])
  return (
    <div className="contactmeCont"  id="contact">
      <div className="contactmeArea">
          <div className="contactme">
            <h1 className="title-text">Contact Me</h1>
            <form action="https://formspree.io/f/xnqrajld" method="POST">
              <div className="name" >
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="email">
                <input type="email" name="Useremail" placeholder="Email" />
              </div>
              <div className="message" >
                <input type="text" name="message" placeholder="message" />
              </div>
              <div>
              <button type="submit" data-aos="fade-up" >Submit</button>
              </div>
            </form>
          </div>
       </div>
      </div>
  );
};

export default Contactme;
