import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { motion } from "framer-motion";
import "./sideBar.scss";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
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
const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
