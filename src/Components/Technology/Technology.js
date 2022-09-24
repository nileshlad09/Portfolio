import React from "react";
import "./technology.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Technology = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
   },[])
  const frontEnd = [
    {
      id: "html",
      img: require("../../Img/technology/html-5.svg").default,
    },
    {
      id: "css",
      img: require("../../Img/technology/css3.svg").default,
    },
    {
      id: "js",
      img: require("../../Img/technology/javascript.svg").default,
    },
    {
      id: "react",
      img: require("../../Img/technology/react.svg").default,
    },
    {
      id: "boot",
      img: require("../../Img/technology/bootstrap.svg").default,
    },
  ];
  const backEnd = [
    { id: "node", img: require("../../Img/technology/nodejs.svg").default },
    {
      id: "express",
      img: require("../../Img/technology/expressjs.svg").default,
    },
    {
      id: "mongo",
      img: require("../../Img/technology/mongodb.svg").default,
    },
  ];
  const tools = [
    {
      id: "vsc",
      img: require("../../Img/technology/vscode.svg").default,
    },
    {
      id: "github",
      img: require("../../Img/technology/github.svg").default,
    },
  ];
  const familiar = [
    {
      id: "c",
      img: require("../../Img/technology/Cprogramming.svg").default,
    },
    {
      id: "cpp",
      img: require("../../Img/technology/CPP.svg").default,
    },
    {
      id: "py",
      img: require("../../Img/technology/familierwith/python.svg").default,
    },
    {
      id: "java",
      img: require("../../Img/technology/familierwith/java.svg").default,
    },
    {
      id: "mysql",
      img: require("../../Img/technology/familierwith/mysql.svg").default,
    },
  ];

  return (
    <div className="container technologyArea2" >
      <div className="technologyArea" id="skills">
        <h1 className="title-text">Skills</h1>
        <div className="row">
          <div className="section col-lg-7 col-md-5 col-sm-12" >
            <h3 className="Techtitle">FrontEnd</h3>
            <div className="box1">
              {frontEnd.map((icon) => {
                return (
                  <div className="icons" key={icon.id}>
                    <img src={icon.img} alt="" width={"40px"} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section col-lg-4 col-md-5 col-sm-12">
            <h3 className="Techtitle">Backend</h3>
            <div className="box1">
              {backEnd.map((icon) => {
                return (
                  <div className="icons" key={icon.id}>
                    <img src={icon.img} alt="" width={"40px"} />
                  </div>
                );
              })}
            </div>
          </div>
                  </div>

        <div className="row">
        <div className="section col-lg-4 col-md-5 col-sm-12" >
            <h3 className="Techtitle">Tools</h3>
            <div className="box1">
              {tools.map((icon) => {
                return (
                  <div className="icons" key={icon.id}>
                    <img src={icon.img} alt="" width={"40px"} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="section col-lg-7 col-md-5 col-sm-12" >
            <h3 className="Techtitle">Others</h3>
            <div className="box1">
              {familiar.map((icon) => {
                return (
                  <div className="icons" key={icon.id}>
                    <img src={icon.img} alt="" width={"40px"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
