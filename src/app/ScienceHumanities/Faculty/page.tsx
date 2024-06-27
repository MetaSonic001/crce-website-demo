import FacultyCard from '../../../components/FacultyCard';

interface FacultyMember {
  name: string;
  title: string;
  degree: string;
  interests: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
    {
        title: 'Professor & HOD',
        name: 'Dr. Sujata Deshmukh',
        degree: 'Ph.D.(Tech.) in Info.Tech ',
        interests: 'Data Mining, Machine Learning, Blockchain',
        image: '/computerdept/sujata.png',
      },
      {
        title: 'Professor',
        name: 'Dr. Sunil Surve',
        degree: 'Ph.D.(Electronics Engineering)',
        interests: 'Artificial Intelligence, Machine Learning, Robotics, Cyber Security',
        image: '/computerdept/surve.png',
      },
      {
        title: 'Associate Professor',
        name: 'Dr. Brijmohan Daga',
        degree: 'Ph.D.(Computer Science Engineering)',
        interests: 'Software engineering and Artificial Intelligence',
        image: '/computerdept/daga.png',
      },
      {
        title: 'Associate Professor',
        name: 'Ms. Merly Thomas',
        degree: 'Ph.D. (Computer Engg.)(Pursuing)',
        interests: 'Computer Networks, Security & Distributed Computing ',
        image: '/computerdept/merly.png',
      },
      {
        title: 'Associate Professor',
        name: 'Dr. Ashok M. Kanthe',
        degree: 'Ph.D.(Computer Technology)',
        interests: 'Wireless Network Security, Cyber Security, Machine Learning ',
        image: '/computerdept/kanthe.png',
      },
      {
        title: 'Associate Professor',
        name: 'Mrs. Monica Khanore',
        degree: 'Ph.D. (Electronics Engineering)',
        interests: ' Telecommunications, Blockchain Technology and Computer Networks',
        image: '/computerdept/monica.png',
      },
      {
        title: 'Associate Professor',
        name: 'Ms. Kalpana Deorukhkar',
        degree: 'Ph.D. (Computer Engineering)(Pursuing)',
        interests: 'Natural Language Processing, Data Structures, Advance Algorithm',
        image: '/computerdept/kalpana.png',
      },
      {
        title: 'Associate Professor',
        name: 'Ms. Roshni Padate',
        degree: 'Ph.D. (Computer Engineering)(Pursuing)',
        interests: 'Image Processing, Data Warehouse and Mining ,Machine Learning, Deep Learning, Artificial Intelligence',
        image: '/computerdept/roshni.png',
      },
];

const FacultyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Department of Science & Humanites - Faculty Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facultyMembers.map((member, index) => (
          <FacultyCard
            key={index}
            name={member.name}
            title={member.title}
            degree={member.degree}
            interests={member.interests}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;