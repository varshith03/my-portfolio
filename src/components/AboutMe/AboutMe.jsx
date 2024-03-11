import "./AboutMe.scss";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

const AboutMe = () => {
  
  return (
    <div className="about-me">
      <div className="wrapper">
        <div className="box1">
          <PersonalDetails />
        </div>
        <div className="box2">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
