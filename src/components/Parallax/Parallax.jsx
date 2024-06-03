import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.scss";
import { useRef } from "react";

const rotate = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  },
};

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "aboutme"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #050564)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "education"
          ? "Something about my qualification ?"
          : type === "project"
          ? "Let's look at my work ?"
          : "Something about me ?"}
      </motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: xBg,
          backgroundImage: `url(${
            type === "aboutme"
              ? "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391235/website%20images/portfolio/planets_kbfb5k.png"
              : "https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391237/website%20images/portfolio/sun_mgyxzb.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="astronaut"
        variants={rotate}
        initial="initial"
        animate="animate"
      ></motion.div>
      <motion.div className="stars" style={{ x: xBg }}></motion.div>
    </div>
  );
};

export default Parallax;
