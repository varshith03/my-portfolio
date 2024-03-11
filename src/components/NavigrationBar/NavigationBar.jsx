import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navigationBar.scss";
import SideBar from "../SideBar/SideBar";
import { useMediaQuery } from "react-responsive";
import { Tooltip as ReactTooltip } from "react-tooltip";

const variants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.2 + 0.3 }, //delay animation for each item using index passed
  }),
};

const circleVariants = {
  opened: {
    clipPath: "circle(1000px at 50% 50%)",
    transition: {
      duration: 1,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  hidden: {
    transition: { staggerChildren: 0.1 },
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const items = ["HOME", "ABOUT ME", "EDUCATION", "PROJECTS", "CONTACT"];
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          data-tooltip-id="my-tooltip"
        >
          <b>S VARSHITH</b>
          <ReactTooltip
            id="my-tooltip"
            place="right"
            className="tooltip"
            content="👋Hey There,What's up"
          />
        </motion.div>

        <div className="options">
          <motion.div
            className="menu-icon"
            animate={open ? "opened" : "closed"}
            onClick={toggleMenu}
            variants={circleVariants}
          >
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              className="svg-icon"
            />
            <motion.div className="bg"></motion.div>
          </motion.div>
          <motion.ul
            className={`menu ${showMenu ? "active" : ""}`}
            initial="hidden"
            animate={isMobile ? (showMenu ? "visible" : "hidden") : "visible"}
            variants={isMobile ? listVariants : undefined}
          >
            {items.map((item, index) => (
              <motion.li
                key={item}
                variants={isMobile ? itemVariants : variants}
                custom={index} //passing the index of item to animate variants
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setShowMenu(false);
                  setOpen(false);
                }}
              >
                <a href={`#${item}`} className="">
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
