import "./app.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import NavigationBar from "./components/NavigrationBar/NavigationBar";
import Parallax from "./components/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <section id="HOME">
        <NavigationBar />
        <Hero />
      </section>
      <section>
        <Parallax type="aboutme" />
      </section>
      <section id="ABOUT ME">
        <AboutMe />
      </section>
      <section>
        <Parallax type="education" />
      </section>
      <section id="EDUCATION">
        <Education />
      </section>
      <section>
        <Parallax type="project" />
      </section>
      <Projects />
      <section id="CONTACT">
        <Contact />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
