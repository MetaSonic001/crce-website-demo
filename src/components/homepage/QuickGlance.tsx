// src/components/QuickGlance.jsx
import React from 'react';

const QuickGlance = () => {
  return (
    <aside className="w-1/4 bg-yellow-300 p-4">
      <h2 className="text-lg font-bold mb-4">Quick Glance</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block bg-purple-600 text-white p-2 rounded">
            FE Admissions (2024-25)
          </a>
        </li>
        <li>
          <a href="#" className="block bg-purple-400 text-white p-2 rounded">
            FE Admission Enquiry
          </a>
        </li>
        <li>
          <a href="#" className="block bg-purple-600 text-white p-2 rounded">
            CRCE Prospectus 2024
          </a>
        </li>
        <li>
          <a href="#" className="block bg-green-600 text-white p-2 rounded">
            Campus Tour
          </a>
        </li>
        <li>
          <a href="#" className="block bg-red-600 text-white p-2 rounded">
            NIRF
          </a>
        </li>
        <li>
          <a href="#" className="block bg-blue-600 text-white p-2 rounded">
            NISP
          </a>
        </li>
        <li>
          <a href="#" className="block bg-blue-600 text-white p-2 rounded">
            Alumni Spotlight
          </a>
        </li>
        <li>
          <a href="#" className="block bg-blue-600 text-white p-2 rounded">
            Students Bytes
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default QuickGlance;
