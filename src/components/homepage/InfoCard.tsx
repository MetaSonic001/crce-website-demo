import React from 'react';

interface InfoCardProps {
  title: string;
  image?: string; // Optional property
  description: string;
  linkText?: string; // Optional property
  linkUrl?: string; // Optional property
}

const InfoCard: React.FC<InfoCardProps> = ({ title, image, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {image && <img src={image} alt={title} className="w-full rounded mb-4" />}
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p>{description}</p>
      {linkText && <a href={linkUrl} className="text-blue-500">{linkText}</a>}
    </div>
  );
}

export default InfoCard;
