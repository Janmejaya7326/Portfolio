import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Memoized roles array
  const roles = useMemo(() => [
    "Web Developer",
    "React Developer",
    "Frontend Developer",
    "Python Developer",
    "Java Developer"
  ], []);

  // Function to cycle through roles
  const cycleRoles = useCallback(() => {
    setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
  }, [roles]);

  // Automatically cycle through roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(cycleRoles, 1700);
    return () => clearInterval(interval);
  }, [cycleRoles]);

  // Start the animation when the component mounts
  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div id="home" className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 min-h-screen flex items-center justify-center p-4 pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-8 space-y-4 md:space-y-0 md:space-x-8 text-gray-800">
        <div className="order-2 md:order-1 flex-1 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello, It's Me</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Janmejaya Khandual</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
            And I'm a{' '}
            <span className="text-purple-600">
              {roles[roleIndex]}
            </span>
          </h3>
          <p className="text-base md:text-lg text-justify mb-4 relative overflow-hidden hover:scale-105 transition-transform duration-300 font-bold">
            With a focus on continuous learning and staying at the forefront of emerging technologies, I am constantly striving to push the boundaries of what's possible in software engineering. From developing user-friendly interfaces to optimizing backend systems for peak performance, I am committed to delivering solutions that are both functional and elegant.
          </p>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/janmejaya.khandual" target="_blank" rel="noopener noreferrer" className={`text-teal-600 hover:text-teal-400 hover:scale-110 ${animationStarted ? 'icon-animation icon-animation-delay-200' : ''}`}><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.instagram.com/janmejaya_khandual?igsh=MXNlaWJtOHRkcDdmMQ==" target="_blank" rel="noopener noreferrer" className={`text-teal-600 hover:text-teal-400 hover:scale-110 ${animationStarted ? 'icon-animation icon-animation-delay-400' : ''}`}><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://wa.me/7326919304" target="_blank" rel="noopener noreferrer" className={`text-teal-600 hover:text-teal-400 hover:scale-110 ${animationStarted ? 'icon-animation icon-animation-delay-600' : ''}`}><i className="fab fa-whatsapp fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/janmejaya-khandual-012535267" target="_blank" rel="noopener noreferrer" className={`text-teal-600 hover:text-teal-400 hover:scale-110 ${animationStarted ? 'icon-animation icon-animation-delay-800' : ''}`}><i className="fab fa-linkedin fa-2x"></i></a>
          </div>
          <div className="mt-6">
            <a
              href="/Janmejaya Khandual.pdf" // Replace with the path to your CV PDF file
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-400 transition duration-300 inline-block hover:scale-110"
              style={{ fontSize: '1.2rem' }}
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end mt-2 md:mt-0">
          <div className="relative">
            <img
              src="/RAHUL.png" // Ensure this is the correct path to your image in the public folder
              alt="Janmejaya"
              className="rounded-full w-48 h-48 md:w-64 md:h-72 object-cover border-4 border-teal-600"
            />
            <div className="absolute inset-0 rounded-full border-4 border-teal-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
