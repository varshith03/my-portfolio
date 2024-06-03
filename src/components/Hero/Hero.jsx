import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, staggerChildren: 0.3 },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 50,
      delay: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    x: "110%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>S Varshith</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Full Stack Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{
                scale: 1.1,
                background: "white",
                color: "black",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#PROJECTS">See My latest Works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{
                scale: 1.1,
                background: "white",
                color: "black",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#CONTACT">Contact</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="sliding-text"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Coder Designer Problem Solver
        </motion.div>
        <motion.div
          className="image-container"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <img src="https://res.cloudinary.com/dg3vsquxp/image/upload/v1717390366/website%20images/portfolio/hero_mattcb.png" alt="My Photo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
