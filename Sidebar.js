import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; 

const Sidebar = ({ toggleTheme, isDarkMode, scrollToSection, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (!isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  
  const handleSectionClick = (sectionRef) => {
    scrollToSection(sectionRef); 
    if (!isLargeScreen) {
      setIsOpen(false); 
    }
  };

  return (
    <>
      {!isLargeScreen && (
        <span className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </span>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {!isLargeScreen && (
          <span
            className={`close-icon ${isDarkMode ? 'white' : 'black'}`}
            onClick={toggleSidebar}
          >
            <FaTimes />
          </span>
        )}

        { }
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />} { }
          {isDarkMode ? ' Light Mode' : ' Dark Mode'}
        </button>

        <ul>
          <li>
            <button onClick={() => handleSectionClick(sections.aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.getStartedRef)}>Get Started</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.buttonsRef)}>Buttons</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.colorsRef)}>Colors</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.barGraphsRef)}>Bar Graphs</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.pieChartsRef)}>Pie Charts</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.histogramsRef)}>Histograms</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick(sections.scatterPlotsRef)}>Scatter Plots</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
