import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggler = e =>{
      e.preventDefault();
      setDarkMode(!darkMode);
  };

  return (
    <nav>
        <h1>Players</h1>
        <button onclick={toggler} >Dark Mode</button>
    </nav>

    


  );
};

export default Navbar;