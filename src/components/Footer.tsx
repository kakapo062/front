import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
