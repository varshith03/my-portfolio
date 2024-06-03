import "./PersonalDetails.scss";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -150,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const PersonalDetails = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  const goToContact = () => {
    const contactSection = document.getElementById("CONTACT");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="card-border"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
    >
      <div
        className="card-body"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="personal"
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          <motion.h1 variants={variants}>ABOUT ME</motion.h1>
          <motion.div className="imageContainer" variants={variants}>
            <img
              src="https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391236/website%20images/portfolio/dev-avatar_zb9jg8.png"
              alt=""
            />
          </motion.div>
          <motion.div className="text" variants={variants}>
            <motion.p variants={variants}>
              Web Developer with expertise in React.js, Node.js, Redux, HTML,
              CSS, and Next.js.Passionate programmer and avid learner, born and
              raised in Mangalore, Karnataka.
            </motion.p>
            <br />
            <motion.p variants={variants}>
              Currently working as a Software Developer Intern at INDSAC
              SOFTECH, where I continuously strive to enhance my skills and
              contribute to innovative projects. In my spare time, I enjoy
              exploring the latest trends in web development and expanding my
              knowledge through hands-on projects.
            </motion.p>
          </motion.div>
          <motion.div className="buttons" variants={variants}>
            <motion.button
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToContact}
            >
              Let's talk
            </motion.button>

            <motion.button
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/s-varshith/", "_blank")
              }
            >
              LinkedIn
            </motion.button>

            <motion.button
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.open("https://flowcv.com/resume/swk2omj4at", "_blank")
              }
            >
              My Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PersonalDetails;
