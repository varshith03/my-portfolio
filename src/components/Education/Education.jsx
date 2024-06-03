import React, { useState } from "react";
import "./Education.scss";
import { motion } from "framer-motion";
// import "../../app.scss";

const variants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
  tapMeVisible: {
    opacity: 1,
  },
  tapMeHide: {
    opacity: 0,
    transition: {
      //   ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Education = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleFlip = () => {
    setIsAnimate(true);
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="education">
      <div className="wrapper">
        <motion.h1
          variants={variants}
          initial="tapMeVisible"
          animate="tapMeHide"
        >
          Tap the Card
        </motion.h1>
        <div className="flip-card" onClick={handleFlip}>
          <motion.div
            className="flip-card-inner"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 1, animateDirection: "normal" }}
            onAnimationEnd={() => setIsAnimate(false)}
          >
            <motion.div
              className="flip-card-front"
              variants={variants}
              initial="hidden"
              whileInView="animate"
            >
              <div className="text-container">
                <motion.h2 variants={variants}>Education</motion.h2>
                <motion.h3
                  variants={variants}
                  whileHover={{ color: `#2ede98` }}
                >
                  Master of Computer Applications 👨🏻‍🎓
                </motion.h3>
                <motion.h4
                  variants={variants}
                  whileHover={{ color: `#2ede98` }}
                >
                  Manipal Institute of Technology,Manipal 🏫
                </motion.h4>
                <motion.h5
                  variants={variants}
                  whileHover={{ color: `#2ede98` }}
                >
                  2022-2024 📅
                </motion.h5>
              </div>
              <div className="image-container">
                <img src="https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391236/website%20images/portfolio/mit_lr7agd.png" alt="" className="href" />
              </div>
            </motion.div>
            <div className="flip-card-back">
              <div className="text-container">
                <h2>Education</h2>
                <motion.h3 whileHover={{ color: `#2ede98` }}>
                  Bachelor of Computer Applications 👨🏻‍🎓
                </motion.h3>
                <motion.h4 whileHover={{ color: `#2ede98` }}>
                  St Aloysius College,Mangalore 🏫
                </motion.h4>
                <motion.h5 whileHover={{ color: `#2ede98` }}>
                  2019-2022 📅
                </motion.h5>
              </div>
              <div className="image-container">
                <img src="https://res.cloudinary.com/dg3vsquxp/image/upload/v1717391234/website%20images/portfolio/a1_bwnv8e.png" alt="" className="href" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
