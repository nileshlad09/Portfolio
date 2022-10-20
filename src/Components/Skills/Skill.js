import React from "react";
import "./skill.css";
const Skill = () => {
  const frontEnd = [
    {
      id: "HTML5",
      img: require("../../Img/technology/html-5.svg").default,
    },
    {
      id: "CSS3",
      img: require("../../Img/technology/css3.svg").default,
    },
    {
      id: "JavaScript",
      img: require("../../Img/technology/javascript.svg").default,
    },
    {
      id: "React.js",
      img: require("../../Img/technology/react.svg").default,
    },
    {
      id: "Bootstrap",
      img: require("../../Img/technology/bootstrap.svg").default,
    },
    {
      id: "MaterialUI",
      img: require("../../Img/technology/material-ui.svg").default,
    },
    { id: "Node.js", img: require("../../Img/technology/nodejs.svg").default },
    {
      id: "Express.js",
      img: require("../../Img/technology/expressjs.svg").default,
    },
    {
      id: "MongoDB",
      img: require("../../Img/technology/mongodb.svg").default,
    },
    {
      id: "VS Code",
      img: require("../../Img/technology/vscode.svg").default,
    },
    {
      id: "GitHub",
      img: require("../../Img/technology/github.svg").default,
    },
    {
      id: "Git",
      img: require("../../Img/technology/git.svg").default,
    },
    {
      id: "C",
      img: require("../../Img/technology/Cprogramming.svg").default,
    },
    {
      id: "C++",
      img: require("../../Img/technology/CPP.svg").default,
    },
    {
      id: "MySQL",
      img: require("../../Img/technology/familierwith/mysql.svg").default,
    },
  ];
  return (
    <div className="SkillSection" id="skills">
        <div className="row">
          <div data-aos="fade-up" className="skills2 col-lg-6 col-md-12 col-sm-12">
            <h1>Skills</h1>
            <div className="skillbox">
              {frontEnd.map((icon) => {
                return (
                  <div className="icons " key={icon.id}>
                    <img src={icon.img} alt="" width={"40px"} />
                    <span>{icon.id}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="techImg col-lg-5 col-md-12 col-sm-12">
            {/* <img src={tech} alt="" /> */}
          </div>
        </div>
      </div>
  );
};

export default Skill;
