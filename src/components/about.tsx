import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#fafafa] h-screen text-black w-full px-64 py-10">
      <div className="bg-white text-black flex-col px-32 mx-32 py-12 shadow-md hover:shadow-lg">
        <div className="flex-row flex space-x-3 items-center justify-center">
          <div className="flex-col space-y-6">
            <div className="flex flex-row items-center">
              {" "}
              <div className="h-[1rem] bg-blue-800 w-1"></div>
              <span className="font-bold px-2">
                About Our Journey through Time
              </span>
            </div>
            <p className="py-0 ">
              Located in a picturesque environment in the heart of Mumbai city,
              Fr. Conceicao Rodrigues College of Engineering (Fr. CRCE) is one
              of the renowned, premier, and sought-after private engineering
              colleges. The institute is dedicated to making a difference in
              engineering education, with its exclusive approach towards the
              ongoing momentum of trends in technology and holistic development.
            </p>
            <p className="py-0">
              Beginning with an orphanage (BalBhavan) and a trade school in
              carpentry, the Agnel Ashram (set up in 1957 at Bandra, Mumbai) has
              today grown into a full-fledged technical complex. The institute
              proudly bears the founder's name as a fitting tribute to his
              impassioned faith in highly-qualified and fully-trained engineers
              and technicians in the service of the nation.
            </p>
          </div>

          <div>
            <Image
              src="/college.jpg"
              height={1200}
              width={1000}
              alt="college_pic"
            />
          </div>
        </div>
        <p className="py-5">
          The institute started with only one program in Production Engineering
          in 1984 with an intake capacity of 60 students. In 1987, the program
          in Electronics Engineering was started with an intake capacity of 60
          students, followed by Computer Engineering in 1991 with an intake
          capacity of 60 students. In 2001, the program in Information
          Technology was started with an intake capacity of 30 students, which
          was later increased to 60 in 2010. The college started offering
          Master’s Degree in Electronics Engineering and Mechanical Engineering
          in the year 2005, each having an intake capacity of 18. Doctoral
          programs in Electronics Engineering and Mechanical Engineering
          commenced in 2014 and 2015, respectively. From the year 2019, a new
          undergraduate degree program in Mechanical Engineering has been
          started with an intake capacity of 60. Also, the BE undergraduate
          program in Electronics Engineering has been changed to Electronics and
          Computer Science. The undergraduate program in Information Technology
          has been merged with Computer Engineering. From the year 2020, the
          college is offering a new undergraduate program in the emerging area
          of ‘AI & Data Science’. Also, the doctoral program in Computer
          Engineering started in the year 2023.
        </p>
        <p className="py-5">
          The institute has been consistently ranked highly in major surveys
          like TOI, INDIA TODAY, Career 360, The Week, and Education World, to
          name a few. The college is ranked by NIRF in 2017 and 2020. Based on
          the Outcome-Based Education (OBE) parameters and criteria, three
          programs (Computer, Electronics, and Production Engineering) of the
          institute have been accredited by the National Board of Accreditation
          (NBA-India) since 2017-2018. The college is also NAAC accredited with
          grade 'A'.
        </p>
      </div>
    </div>
  );
}
