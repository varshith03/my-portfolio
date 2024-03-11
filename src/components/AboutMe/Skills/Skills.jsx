import React from "react";
import "./Skills.scss";
import { tools } from "./tools.jsx";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: 250,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, staggerChildren: 0.1 },
  },
};

const Skills = () => {
  return (
    <div className="skills">
      <h2>TECH SKILLS</h2>
      <motion.div
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="skill-box1">
          <motion.div
            className="frontend"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Card style={{ fontSize: "20px", color: "black" }}>
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <hr className="custom-hr" />
                <Card.Text>
                  {tools.frontend.map((tool, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tool.imgSrc} alt={tool.imgAltText} />
                        <div>{tool.skillName}</div>
                      </a>
                    </motion.div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
        <div className="skill-box2">
          <motion.div
            className="backend"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Card style={{ fontSize: "20px", color: "black" }}>
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <hr className="custom-hr" />
                <Card.Text>
                  {tools.backend.map((tool, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tool.imgSrc} alt={tool.imgAltText} />
                        <div>{tool.skillName}</div>
                      </a>
                    </motion.div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          <motion.div
            className="hosting"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Card style={{ fontSize: "20px", color: "black" }}>
              <Card.Body>
                <Card.Title className="card-title">Hosting</Card.Title>
                <hr className="custom-hr" />
                <Card.Text>
                  {tools.hostingPlatforms.map((tool, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tool.imgSrc} alt={tool.imgAltText} />
                        <div>{tool.skillName}</div>
                      </a>
                    </motion.div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
        <div className="skill-box3">
          <motion.div
            className="frameworks"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Card style={{ fontSize: "20px", color: "black" }}>
              <Card.Body>
                <Card.Title>Frameworks</Card.Title>
                <hr className="custom-hr" />
                <Card.Text>
                  {tools.frameworks.map((tool, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tool.imgSrc} alt={tool.imgAltText} />
                        <div>{tool.skillName}</div>
                      </a>
                    </motion.div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          <motion.div
            className="version-control"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Card style={{ fontSize: "20px", color: "black" }}>
              <Card.Body>
                <Card.Title>Version-Control</Card.Title>
                <hr className="custom-hr" />
                <Card.Text>
                  {tools.versionControl.map((tool, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tool.imgSrc} alt={tool.imgAltText} />
                        <div>{tool.skillName}</div>
                      </a>
                    </motion.div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
