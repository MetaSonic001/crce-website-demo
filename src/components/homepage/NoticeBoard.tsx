// src/components/NoticeBoard.jsx
import { ChevronsRight, Clock } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="bg-white rounded shadow text-lg ">
      <h2 className="text-xl h-16 text-white flex items-center justify-center rounded bg-indigo-600 w-full text-center  font-bold mb-4">Notice Board</h2>
      <ul className="space-y-2">
        <li className=' flex gap-2 flex-col border-b p-4 ' >

          <Clock size={20} color='black' />
          <a href="#" className="block text-gray-700">

            24 June 2024 - Higher Semester Admission Form 2024-25 (SE, TE, BE)
          </a>
        </li>
        <li className='flex flex-col gap-2 border-b p-4'  >
          <Clock size={20} color='black' />
          <a href="#" className="block text-gray-700">
            15 June 2024 - Commencement of Academic Term 2024-25
          </a>
        </li>
        <li className='flex flex-col gap-2 border-b p-4'  >

          <Clock size={20} color='black' />
          <a href="#" className="block text-gray-700">
            13 June 2024 - FEE Notice 2024-25 : SE, TE and BE
          </a>
        </li>
        <li className='flex gap-2 flex-col border-b p-4'  >

          <Clock size={20} color='black' />
          <a href="#" className="block text-gray-700">
            16 May 2024 - KT Exam June 2024 Timetables for All Branches
          </a>
        </li>
      </ul>
      <div className='p-4 '>
        <Link href={"#"} className={`font-medium flex flex-row items-center justify-center gap-2 w-fit text-indigo-600 `}>SEE ALL NOTICE<ChevronsRight size={26} color='white' /></Link>

      </div>
    </div>
  );
}

export default NoticeBoard;
