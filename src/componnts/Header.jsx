import React, { useState } from "react";
import "../assets/Header.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "Dark" : "Light"}`}>
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
