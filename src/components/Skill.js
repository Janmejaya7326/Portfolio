import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaJs, FaGit, FaAndroid, FaPython } from 'react-icons/fa';
import '../App.css';

const skills = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'React', icon: FaReact },
  { name: 'Django', icon: '/Django-Logo.png' },  // Image path for Django
  { name: 'Git', icon: FaGit },
  { name: 'Android', icon: FaAndroid },
];

const professionalSkills = [
  { name: 'Creativity', level: 90 },
  { name: 'Communication', level: 85 },
  { name: 'Problem Solving', level: 85 },
  { name: 'TeamWork', level: 90 },
  { name: 'Leadership', level: 90 },
];

const Skill = () => {
  return (
    <div id="skill" className="p-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 flex flex-col text-gray-900 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-12 mt-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-center flex items-center">
            <span className="text-gray-800">My <span className="text-teal-700">Skills</span></span>
          </h1>
        </div>
        <h2 className="text-2xl font-bold mb-4 underline mt-4">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center hover:scale-125 transition-transform duration-300">
              {/* Conditionally render either an icon component or an image */}
              {typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.name} className="text-6xl mb-2 text-gray-800 blink-animation hover:text-red-600" style={{ width: '4rem', height: '4rem', opacity: '0.7' }} />
              ) : (
                <skill.icon className="text-6xl mb-2 text-gray-800 blink-animation hover:text-red-600" style={{ width: '4rem', height: '4rem', opacity: '0.7' }} />
              )}
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-800 p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 underline">Professional Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mb-2 sm:mb-8">
              <div className="relative mb-1">
                <div className="w-24 h-24 flex justify-center items-center">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-gray-700" style={{ clip: 'rect(0, auto, auto, auto)' }}>
                    <div className="w-full h-full rounded-full border-8 border-cyan-400" style={{ clip: 'rect(auto, auto, auto, auto)', transform: `rotate(${3.6 * skill.level}deg)` }}></div>
                  </div>
                  <span className="absolute text-xl">{skill.level}%</span>
                </div>
              </div>
              <span className="mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
