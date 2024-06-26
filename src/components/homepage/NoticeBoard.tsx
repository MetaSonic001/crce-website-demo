// src/components/NoticeBoard.jsx
import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Notice Board</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">
            24 June 2024 - Higher Semester Admission Form 2024-25 (SE, TE, BE)
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">
            15 June 2024 - Commencement of Academic Term 2024-25
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">
            13 June 2024 - FEE Notice 2024-25 : SE, TE and BE
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded">
            16 May 2024 - KT Exam June 2024 Timetables for All Branches
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NoticeBoard;
