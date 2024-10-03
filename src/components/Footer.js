import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-0">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Janmejaya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
