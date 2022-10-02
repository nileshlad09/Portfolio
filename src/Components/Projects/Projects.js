import React from "react";
// import movieLibraryImg from '../Img/Project/movielibrary.png'
import {projectData} from '../projectData'
import './projects.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
   },[])
  return (
    <div className="projectArea" id="project">
      <div className="projectArea2">
      <h1 className="title-text ">Recent Projects</h1>
      <div className="projects my-5">
        {projectData.map((pro)=>{
         return(  
         <div className={`card ${pro.filter}`} key={pro.id} style={{ width: "30rem" }} data-aos="zoom-in">
          <img src={pro.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title project-title">{pro.projectName}</h3>
            <div className="technology-used">
              <ul>
                <li>{pro.tech}</li>
              </ul>
            </div>
            <div className="btnGroup">
            <button  className="button secondary-button">
              <a href={pro.live}  target="_blank">Live</a>
            </button>
            <button  className=" button secondary-button2">
              <a href={pro.source}  target="_blank">GitHub</a>
            </button>
            </div>
          </div>
        </div>
         )
        })}
      </div>
    </div>
    </div>
  );
};

export default Projects;