"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/solid';


interface NavItem {
  name: string;
  href?: string;
  sublinks?: NavItem[];
}

const Navbar:React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
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


  const renderDropdown = (items: NavItem[], level: number = 0) => (
    <ul className={`absolute ${level === 0 ? 'left-0' : 'left-full'} top-0 mt-1 bg-white border shadow-md rounded-lg w-max z-50`}>
      {items.map((subitem) => (
        <li key={subitem.name} className="border-b last:border-0 relative group/subitem">
          <Link
            href={subitem.href || "#"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
          >
            {subitem.name}
            {subitem.sublinks && <ChevronDownIcon className="h-4 w-4 ml-2 transform -rotate-90" />}
          </Link>
          {subitem.sublinks && (
            <div className="hidden group-hover/subitem:block">
              {renderDropdown(subitem.sublinks, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "ABOUT US",
      sublinks: [
        { name: "About CRCE", href: "/AboutUs/AboutCRCE" },
        { name: "From Director's Desk", href: "/AboutUs/DirectorsDesk" },
        { name: "Principal - Dr. Surendra Singh Rathod", href: "/AboutUs/Principal" },
      ],
    },
    { name: "ACADEMICS" },
    {
      name: "DEPARTMENTS",
      sublinks: [
        { 
          name: "Computer Engineering", 
          href: "/computers",
          sublinks: [
            { name: "About", href: "/computers/about" },
            { name: "HOD", href: "/computers/HOD" },
            { name: "Faculty", href: "/computers/Faculty" },
          ]
        },
        {
          name: "Artifical Intelligence and Data Science",
          href: "/AIDS",
          sublinks: [
            { name: "About", href: "/AIDS/about" },
            { name: "HOD", href: "/AIDS/HOD" },
            { name: "Faculty", href: "/AIDS/Faculty" },
          ]
        },
        {
          name: "Electronics and Computer Science",
          href: "/ECS",
          sublinks: [
            { name: "About", href: "/ECS/about" },
            { name: "HOD", href: "/ECS/HOD" },
            { name: "Faculty", href: "/ECS/Faculty" },
          ]
        },
        {
          name: "Mechanical Engineering",
          href: "/Mechanical",
          sublinks: [
            { name: "About", href: "/Mechanical/about" },
            { name: "HOD", href: "/Mechanical/HOD" },
            { name: "Faculty", href: "/Mechanical/Faculty" },
          ]
        },
        {
          name: "Humanities and Science",
          href: "/ScienceHumanities",
          sublinks: [
            { name: "About", href: "/ScienceHumanities/about" },
            { name: "HOD", href: "/ScienceHumanities/HOD" },
            { name: "Faculty", href: "/ScienceHumanities/Faculty" },
          ]
        },
      ],
    },
    { name: "STUDENTS" },
    { name: "ADMISSION" },
    { name: "ONLINE PAYMENT" },
  ];

  return (
    <header className="bg-white border-b z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
        <div className="flex items-center space-x-4">
          <img src="/fr crce logo.jpeg" alt="Logo" className="h-12" />
        </div>
        <nav className="hidden lg:flex flex-grow justify-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <div
              className="relative group"
              key={item.name}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href || "#"}
                className="relative text-gray-700 hover:text-gray-900 before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-blue-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 flex items-center"
              >
                {item.name}
                {item.sublinks && <ChevronDownIcon className="h-4 w-4 ml-1" />}
              </Link>
              {item.sublinks && activeDropdown === item.name && (
                <div
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {renderDropdown(item.sublinks)}
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
