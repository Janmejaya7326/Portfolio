import React, { useState, useEffect } from 'react';

const NavBar = ({ currentSection, handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll distance as needed
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 h-24 fixed w-full top-0 z-10 flex justify-between items-center transition-shadow duration-300 ${showShadow ? 'shadow-xl' : ''}`}>
      <div className="flex items-center ml-2 h-full mt-3">
        <img src="jklogo.png" alt="Logo" className="object-contain h-16 w-16" />  {/* Adjust width and height as needed */}
      </div>
      <div className="md:hidden pr-4">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex md:items-center md:space-x-4 pr-8 text-lg font-bold">
        {['Home', 'About', 'Skill', 'Project', 'Experience', 'Contact'].map((section) => (
          <li key={section}>
            <button
              className={`text-black hover:text-red-500 transition duration-300 ${
                currentSection === section.toLowerCase() ? 'underline' : ''
              }`}
              onClick={() => handleScroll(section.toLowerCase())}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 text-black p-4 flex flex-col z-30">
            <div className="flex justify-between items-center mb-8">
              <div className="text-lg font-medium">Mr.Janmejaya</div>
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="space-y-4 text-lg font-bold">
              {['Home', 'About', 'Skill', 'Project', 'Experience', 'Contact'].map((section) => (
                <li key={section}>
                  <button
                    className={`text-black hover:text-red-400 transition duration-300 ${
                      currentSection === section.toLowerCase() ? 'underline' : ''
                    }`}
                    onClick={() => {
                      handleScroll(section.toLowerCase());
                      setIsOpen(false);
                    }}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
