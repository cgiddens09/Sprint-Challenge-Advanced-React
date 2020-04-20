import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggler = e =>{
      e.preventDefault();
      setDarkMode(!darkMode);
  };

  
    return (
        <nav className="navbar">
        <h1>Players</h1>
        <div className="dark-mode__toggle">
            <div
            onClick={toggler}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
        </nav>
  );
    

    


  
};

export default Navbar;