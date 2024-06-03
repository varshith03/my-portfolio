import { useEffect, useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Chatty",
    img: "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391236/website%20images/portfolio/project_chatty_ufpxfi.png",
    desc: "Chatty is a feature-rich chat application that offers real-time messaging, responsive design, and support for various media types, providing users with a seamless and engaging communication experience.",
    code: "https://github.com/varshith03/Chatty-frontend",
    deployment: "https://chatty-webapp.vercel.app/",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.IO"],
  },
  {
    id: 2,
    title: "BookMyDoctor",
    img: "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717394764/website%20images/portfolio/2024-06-03_11_34_34_pks2oh.png",
    desc: "Developed and designed a modern, animated website/landing page for Neel Marketing Solutions, utilizing React and Framer Motion to enhance user experience and engagement.",
    code: "https://www.neelmarketingsolutions.in/",
    deployment: "https://www.neelmarketingsolutions.in/",
    skills: ["ReactJS", "Dora", "Framer Motion"],
  },
  {
    id: 3,
    title: "Weather App",
    img: "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391237/website%20images/portfolio/project_weather_woj26i.png",
    desc: "The Weather App allows users to check the current weather conditions for a specific city or obtain weather information based on their device's location.",
    code: "https://github.com/varshith03/weather-app-react",
    deployment: "https://miweatherapp.netlify.app/",
    skills: ["ReactJS"],
  },
  {
    id: 4,
    title: "White board App",
    img: "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391238/website%20images/portfolio/project_whiteboard_lja08x.png",
    desc: "Welcome to the Real-Time Whiteboard Sharing App! This application allows users to collaborate seamlessly on a virtual whiteboard, fostering real-time communication and creativity.",
    code: "https://github.com/varshith03/Real-Time-WhiteBoard-Sharing-App",
    deployment: "https://whiteboard-project.vercel.app/",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "Socket.IO"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="wrapper">
        <motion.div
          className="img-container"
          ref={ref}
          whileHover={{ scale: 1.5, x: "200px", zIndex: 2 }}
        >
          <img src={item.img} alt="project-photo" />
        </motion.div>
        <motion.div className="text-container" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="badge-container">
            {item.skills.map((skill, index) => (
              <div className="badge" key={index}>
                {skill}
              </div>
            ))}
          </div>
          <div className="button-container">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(item.deployment, "_blank")}
            >
              See Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(item.code, "_blank")}
            >
              See Code
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    // offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="PROJECTS" className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
