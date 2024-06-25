import React from "react";
import Image from "next/image";

interface AboutProps {
  image: string;
  title: string;
  name: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

const About: React.FC<AboutProps> = ({
  image,
  title,
  name,
  p1,
  p2,
  p3,
  p4,
}) => {
  return (
    <div className="bg-[#fafafa] h-fit min-h-screen text-black w-full px-64 py-10">
      <div className="bg-white text-black  px-32 mx-32 py-12 shadow-md hover:shadow-lg">
        <div className="flex-row flex items-center pb-10">
          <div className="h-[1rem] bg-blue-800 w-1"></div>
          <span className="font-semibold text-xl px-2">{title}</span>
        </div>

        <div className="flex flex-row space-x-10">
          {" "}
          {/* Column 1: Image, Title, and Name */}
          <div className="flex-col space-y-6">
            <Image src={image} height={1400} width={1400} alt="college_pic" />
            <p className="font-semibold text-md">{name}</p>
          </div>
          {/* Column 2: Paragraphs */}
          <div className="flex-col space-y-5">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
