import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = ({ setOpen }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    setOpen((prev) => !prev);
  };

  return (
    <button onClick={toggleMenu}>
      <FontAwesomeIcon
        icon={showMenu ? faTimes : faBars}
        style={{ fontSize: "24px", color: "white" }}
      />
    </button>
  );
};

export default ToggleButton;
