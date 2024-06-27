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
        name: 'Dr. Sapna Prabhu',
        title: 'Professor & Head',
        degree: 'Ph.D.',
        interests: 'Microprocessor system design, Embedded systems, Internet Of Things, Biomedical instrumentation, Computer Architecture',
        image: '/path-to-image/sapna-prabhu.png',
      },
      {
        name: 'Dr. Deepak Bhoir',
        title: 'Professor & Controller of Examination',
        degree: 'Ph.D.',
        interests: 'Instrumentation, Biomedical Instrumentation, Virtual Instrumentation, VLSI Design, MEMS, Automation',
        image: '/path-to-image/deepak-bhoir.png',
      },
      {
        name: 'Ms. Shilpa Patil',
        title: 'Assistant Professor',
        degree: 'M.E.',
        interests: 'Digital Electronics, Power Electronics',
        image: '/path-to-image/shilpa-patil.png',
      },
      {
        name: 'Dr. John Doe',
        title: 'Professor',
        degree: 'Ph.D.',
        interests: 'Artificial Intelligence, Machine Learning',
        image: '/path-to-image/john-doe.png',
      },
];

const FacultyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Department of Electronics & Computer Science - Faculty Members</h1>
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