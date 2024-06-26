import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
        <div className="flex items-center space-x-4">
          <img src="/fr crce logo.jpeg" alt="Logo" className="h-12" />
        </div>
        <nav className="hidden lg:flex flex-grow justify-center space-x-6 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-gray-900">HOME</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT US</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">ACADEMICS</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">DEPARTMENTS</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">STUDENTS</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">ADMISSION</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">ONLINE PAYMENT</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
