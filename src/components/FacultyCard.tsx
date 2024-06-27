import Image from 'next/image';

interface FacultyCardProps {
  name?: string;
  title?: string;
  degree?: string;
  interests?: string;
  image?: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ name, title, degree, interests, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full max-w-xs mx-auto">
      <div className="relative w-full pt-[75%]">
        <Image 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={image || '/path-to-image/default.png'} 
          alt={`${name}'s photo`} 
          layout="fill"
        />
      </div>
      <div className="p-3 flex-grow">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-700 text-sm">{name}</p>
        <p className="text-gray-700 font-semibold text-sm">{degree}</p>
        <p className="text-gray-700 mt-2 text-sm"><span className="font-semibold">Areas of interest:</span> {interests}</p>
      </div>
      <div className="p-3 mt-auto">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm">
          Profile
        </button>
      </div>
    </div>
  );
};

export default FacultyCard;