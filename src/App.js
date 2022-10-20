import "./App.css";
import About from "./Components/About/About";
import Banar from "./Components/Banar/Banar";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-scroll";


function App() {

  return (
    <>
      <Banar />
      <About />
      <Skill />
      <Project />
      <Footer />
      <div className="sidenavbar">
        <Link smooth={true} duration={500} className="nav-link" to="home">
          <span className="dot"></span>
        </Link>
        <Link smooth={true} duration={500} className="nav-link" to="about">
          <span className="dot"></span>
        </Link>
        <Link smooth={true} duration={500} className="nav-link" to="skills">
          <span className="dot"></span>
        </Link>
        <Link smooth={true} duration={500} className="nav-link" to="project">
          <span className="dot"></span>
        </Link>
      </div>
      <div className="gotoTop">
        <Link smooth={true} duration={500} className="nav-link" to="home">
          <i className="far fa-arrow-alt-circle-up"></i>
        </Link>
      </div>
    </>
  );
}

export default App;
