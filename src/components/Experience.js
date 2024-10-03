import React from 'react';
import '../App.js';

const experiences = [
  {
    company: 'OCAC',
    date: '19-06-2023 - 27-07-2023',
    description: 'Experience at Odisha Computer Application Centre (OCAC) of Full stack JAVA software Development Developed a window-based application named MCQ Test using Java programming language. Implemented both frontend and backend functionalities to ensure a seamless user experience. Designed and integrated features using Java Swing for the graphical user interface (GUI). Utilized Oracle database for backend data management and ensured data integrity. Collaborated with a team to deliver high-quality software solutions within project timelines. Troubleshooted and debugged issues, ensuring optimal performance and functionality. Engaged in the entire software development lifecycle, from concept and design to testing and deployment.',
    logo: '/ocac.png', // replace with the actual path to the OCAC logo
  },
  {
    company: 'Web_Bocket',
    date: '15-11-2023 - 20-01-2024',
    description: 'My journey at Web Bocket was nothing short of transformative as I delved deep into the realms of modern web development, honing my skills in MongoDB, Express.js, React.js, and Node.js (MERN). Learning from industry professionals engaged in real-world projects provided me with hands-on experience and invaluable insights.',
    logo: '/webbocket.png', 
  },
  {
    company: 'Interface Software',
    date: '15-02-2024 - 05-06-2024',
    description: 'Experience in Interface Software is where I undertook my major project, learning Python with machine learning to develop an innovative application. This project provided me with invaluable insights into teamwork and the intricacies of project development. Collaborating closely with my peers, I engaged in the entire software development lifecycle, from concept and design to implementation and testing. Thus, this experience significantly enhanced my skills in machine learning, Python programming, and effective team communication.',
    logo: '/interface.png',  
  },
];

const Experience = () => {
  return (
    <div id="experience" className="p-4 bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4 text-purple-600 mt-24 relative underline-short">EXPERIENCE</h1>
      <div className="flex flex-col items-center mt-6 gap-2 text-left">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-lg w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start transform hover:scale-110 transition-transform duration-300 group">
            <img src={exp.logo} alt={`${exp.company} logo`} className="w-20 h-20 rounded-full mr-6 mb-4 md:mb-0" />
            <div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-red-600">{exp.company} ({exp.date})</h2>
              <p className="text-gray-800 text-base text-justify group-hover:text-black group-hover:font-medium">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
