import React from "react";

const QuickGlance = () => {
  return (
    <aside className="w-full lg:w-1/3 rounded-lg p-4">
      <div className="flex flex-row items-center mb-4">
        <div className="h-[1rem] bg-blue-800 w-1"></div>
        <span className="font-bold px-1 py-1">Quick Glance</span>
      </div>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="block bg-[#5b06f5] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            FE Admissions (2024-25)
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#a406f5] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            FE Admission Enquiry
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#a406f5] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            CRCE Prospectus 2024
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-green-800 text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            Campus Tour
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#f50609] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            NIRF
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#3f51b4] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            NISP
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#3f51b4] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            Alumni Spotlight
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-[#3f51b4] text-white py-2 px-4 rounded text-center font-semibold hover:bg-[#f9da4c] hover:text-black"
          >
            Students Bytes
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default QuickGlance;
