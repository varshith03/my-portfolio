import { useEffect, useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Weather App",
    img: "/project_weather.png",
    desc: "The Weather App allows users to check the current weather conditions for a specific city or obtain weather information based on their device's location.",
    code: "https://github.com/varshith03/weather-app-react",
    deployment: "https://miweatherapp.netlify.app/",
  },
  {
    id: 2,
    title: "White board App",
    img: "/project_whiteboard.png",
    desc: "Welcome to the Real-Time Whiteboard Sharing App! This application allows users to collaborate seamlessly on a virtual whiteboard, fostering real-time communication and creativity.",
    code: "https://github.com/varshith03/Real-Time-WhiteBoard-Sharing-App",
    deployment: "https://whiteboard-project.vercel.app/",
  },
  {
    id: 3,
    title: "BookMyDoctor",
    img: "/project_doctor.png",
    desc: "Created the BookMyDoctor platform to modernize healthcare appointment management. The system provides efficient scheduling, reduces wait times, and enhances patient satisfaction.",
    code: "https://github.com/varshith03/BookMyDoctor",
    deployment: "https://svaars.netlify.app/",
  },
  {
    id: 4,
    title: "Chatty(in development)",
    img: "/project_chatty.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    code: "https://github.com/varshith03/Chatty-frontend",
    deployment: "",
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
          <div className="button-container">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (window.location.href = item.deployment)}
            >
              See Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (window.location.href = item.code)}
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
