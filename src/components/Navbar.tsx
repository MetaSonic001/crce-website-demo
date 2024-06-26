import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
        <div className="flex items-center space-x-4">
          <img src="/fr crce logo.jpeg" alt="Logo" className="h-12" />
        </div>
        <nav className="hidden lg:flex flex-grow justify-center space-x-6 text-sm font-medium">
          {[
            "HOME",
            "ABOUT US",
            "ACADEMICS",
            "DEPARTMENTS",
            "STUDENTS",
            "ADMISSION",
            "ONLINE PAYMENT",
          ].map((name) => (
            <a
              key={name}
              href="#"
              className="relative text-gray-700 hover:text-gray-900 before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-blue-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
