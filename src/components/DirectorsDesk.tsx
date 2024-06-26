// src/components/DirectorsDesk.tsx
import React from 'react';

interface DirectorsDeskProps {
  image: string;
  title: string;
  name: string;
  paragraphs: string[];
}

const DirectorsDesk: React.FC<DirectorsDeskProps> = ({ image, title, name, paragraphs }) => {
  return (
    <main className="container mx-auto py-10 px-6" style={{ backgroundColor: 'white' }}>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 border-l-4 border-blue-600 pl-2 mb-6">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={image}
            alt={name}
            className="w-40 h-52 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
          />
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-800 font-semibold">{name}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DirectorsDesk;
