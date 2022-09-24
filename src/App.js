import "./CSS/App.css";
import "./CSS/global.css";
import "./CSS/responsive.css";
import Banar from "./Components/Banar/Banar";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contactme from "./Components/Contactme/Contactme";
import About from "./Components/About/About";
import Technology from "./Components/Technology/Technology";
import { Link } from "react-scroll";
function App() {
  return (
    <>
      <div className="background">
        <Navbar/>
        <Banar />
        <About />
        <Technology />
        <Projects />
        <Contactme />
        <Footer />
        <div className="gotoTop">
          <Link
            smooth={true}
            duration={500}
            className="nav-link"
            to="home"
          >
            <i className="far fa-arrow-alt-circle-up"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
