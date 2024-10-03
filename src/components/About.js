import React from 'react';

const About = () => {
  return (
    <div id="about" className="p-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-200 min-h-screen flex items-center justify-center text-gray-900">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center p-6">
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative">
            <img src="/RAHUL.png" alt="Janmejaya" className="rounded-full w-64 h-72 object-cover border-4 border-teal-600" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-50"></div>
          </div>
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h1 className="text-5xl text-left font-bold mb-4">About <span className="text-teal-700">Me</span></h1>
          <div className="mb-4"> {/* Ensure spacing for mobile view */}
            <h2 className="text-2xl text-left font-semibold text-purple-600 mb-2">Full Stack Developer!</h2>
          </div>
          <p className="text-lg leading-relaxed font-medium text-justify hover:scale-105">
            Hello! I'm Janmejaya Khandual, and I am from Jagatsinghpur (Odisha). Currently, I am pursuing my Master of Computer Applications (MCA) from GIFT Autonomous College, Bhubaneswar,
            where I have honed my skills and deepened my knowledge in the field of Computer Science. 
            I have consistently maintained a CGPA of 7.5, showcasing my dedication and commitment to academic excellence.
            Throughout my academic journey, I have immersed myself in various technologies and programming languages.
            While I may not have real-world working experience, my extensive exposure to the software field through projects, 
            internships, and coursework has prepared me well. I am adept at problem-solving and have a keen eye for detail, which are crucial skills for any developer.
            I believe that diversity in projects and work environments will not only enhance my skill set but also make me a versatile developer.
            I am a fast learner, a good team player, and always open to new challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
