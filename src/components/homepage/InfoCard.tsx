import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface InfoCardProps {
  title?: string;
  image?: string; // Optional property
  description?: string;
  linkText?: string; // Optional property
  linkUrl?: string; // Optional property
  sectionText?: string;
  linkType?: string;
  childHtml?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, image, description, linkText, linkUrl, sectionText, linkType, childHtml }) => {
  return (
    <div className="bg-white w-full flex-1 flex text-lg flex-col gap-3 p-4 rounded shadow hover:shadow-xl transition-all ease-in ">
      {sectionText && <div className="flex flex-row items-center">
        <div className="h-[1rem] bg-blue-800 w-1"></div>
        <span className="font-bold text-lg px-2">
          {sectionText}
        </span>
      </div>}
      {image && <img src={image} alt={title} className="w-full rounded" />}
      {title && <h3 className="text-lg font-bold ">{title}</h3>}
      {childHtml}
      {description && <p>{description}</p>}
      {linkText && linkUrl && (
        <Link href={linkUrl} className={`font-medium flex flex-row items-center justify-center gap-2 w-fit ${linkType === "button" ? "text-white bg-indigo-600 p-2 rounded" : "text-indigo-600"} `}>
          {linkText}
          <ChevronsRight size={26} color='white' />
        </Link>
      )}
    </div>
  );
}

export default InfoCard;
