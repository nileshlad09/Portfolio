import React from 'react'
import './project.css'
import {projectData} from './ProjectData'
const Project = () => {

  return (
    <div className='ProjectSection' id='project'>
      <div className="projectArea2">
      <h1 className="title-text ">Recent Projects</h1>
      <div className="projects my-5">
        {projectData.map((pro)=>{
         return(  
         <div className={`card ${pro.filter}`} key={pro.id} style={{ width: "30rem" }} data-aos={`${pro.anim}`}>
          <img src={pro.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title project-title">{pro.projectName}</h3>
            <div className="technology-used">
              <ul>
                <li>{pro.tech}</li>
              </ul>
            </div>
            <div className="btnGroup">
            <button  className="btn btn1">
              <a href={pro.live} rel="noreferrer noopener" target="_blank">Live</a>
            </button>
            <button  className="btn btn2">
              <a href={pro.source} rel="noreferrer noopener"  target="_blank">GitHub</a>
            </button>
            </div>
          </div>
        </div>
         )
        })}
      </div>
    </div>
    </div>
  )
}

export default Project
