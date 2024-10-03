import React from 'react';
import '../App.js';

const Project = () => {
  const projects = [
    {
      title: 'MCQ Test',
      description: 'This is a Windows-based advanced Java project featuring user signup and login, subject-specific exams, and real-time score checking. This project highlights my expertise in Java and building robust desktop applications.',
      image: '/mcqtest.png', 
    },
    {
      title: 'Saloon & Spa',
      description: 'This is a React project. This project demonstrates my skills in full-stack web development, creating a user-friendly platform for saloon and spa services. The application ensures seamless interaction and efficient service management.',
      image: '/saloon.png', 
    },
    {
      title: 'Disease Prediction Assistant',
      description: 'This is a Python machine learning project that trains models using three algorithms and selects the best performer to predict diseases based on user input symptoms. This project demonstrates my skills in machine learning and Python programming.',
      image: '/disease.png', 
    },
  ];

  return (
    <div id="project" className="p-4 bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4 text-purple-600 mt-3 relative underline-short">PROJECTS</h1>
      <div className="flex flex-wrap justify-center mt-11 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-2xl transform hover:scale-110 transition duration-300 group">
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2 group-hover:text-red-600">{project.title}</div>
              <p className="text-gray-800 text-base text-justify group-hover:text-black group-hover:font-medium">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
