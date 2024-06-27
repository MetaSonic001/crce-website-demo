"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  const handleMouseEnter = (name) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Delay to allow moving from the main link to the dropdown
    setHideTimeout(timeout);
  };

  return (
    <header className="bg-white border-b z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
        <div className="flex items-center space-x-4">
          <img src="/fr crce logo.jpeg" alt="Logo" className="h-12" />
        </div>
        <nav className="hidden lg:flex flex-grow justify-center space-x-6 text-sm font-medium">
          {[
            { name: "HOME", href: "#" },
            {
              name: "ABOUT US",
              sublinks: [
                { name: "About CRCE", href: "/AboutUs/AboutCRCE" },
                { name: "From Director's Desk", href: "/AboutUs/" },
              ],
            },
            { name: "ACADEMICS" },
            {
              name: "DEPARTMENTS",
              sublinks: [
                { name: "Computer Engineering", href: "/computers/about" },
                {
                  name: "Electronics and Computer Science",
                  href: "/ecs/about",
                },
              ],
            },
            { name: "STUDENTS" },
            { name: "ADMISSION" },
            { name: "ONLINE PAYMENT" },
          ].map((item) => (
            <div
              className="relative group"
              key={item.name}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href || "#"}
                className="relative text-gray-700 hover:text-gray-900 before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-blue-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
              >
                {item.name}
              </Link>
              {item.sublinks && (
                <div
                  className={`absolute left-0 mt-1 ${
                    activeDropdown === item.name ? "block" : "hidden"
                  } bg-white border shadow-md rounded-lg w-max z-50`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul>
                    {item.sublinks.map((sublink) => (
                      <li key={sublink.name} className="border-b last:border-0">
                        <Link
                          href={sublink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
