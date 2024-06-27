import React from "react";
import AboutDepartment from "@/components/AboutDepartment";

const ComputerEngineeringDepartment: React.FC = () => {
  return (
    <AboutDepartment
      filename="Computer Engineering"
      name="About Computer Engineering"
      videoSrc="http://fragnel.edu.in/images/crce/department/comps/compsdepttour.mp4"
      p1="The Department was established in the year 1991. The department offers B.E. in Computer Engineering, a four-year degree program with an intake of 180 students. The program has started offering honours and minor degree programs in order to facilitate the students to choose additionally the specialized courses in the emerging areas of their choice and build their competence."
      p2="The Department has competent, veteran and devoted faculty to provide industry-driven education to the students. The Department Infrastructure fulfills the requirements of academics and also supports research projects and learning skills to face the challenges of the industry. The Computer Engineering Department effectively prepares students to pursue leadership, technical and management positions in a variety of industries. The department has a strong alumni network which further enriches the program by their involvement in departmental activities and guidance to students."
      p3="The Department has competent, veteran and devoted faculty to provide industry-driven education to the students. The Department Infrastructure fulfills the requirements of academics and also supports research projects and learning skills to face the challenges of the industry. The Computer Engineering Department effectively prepares students to pursue leadership, technical and management positions in a variety of industries. The department has a strong alumni network which further enriches the program by their involvement in departmental activities and guidance to students."
      p4="To gain practical exposure to real-world engineering challenges, enhancing theoretical knowledge with hands-on applications, students undergo Internships which enables them to work alongside industry professionals, gaining valuable insights and practical skills that can't be learned solely in the classroom. Students have pursued internships in JP Morgan, Quantiphi, TIAA, etc. Students are encouraged to undertake certification courses on platforms like Udemy, Coursera, NPTEL and IIRS that tailor education to their career aspirations. Both internships and certifications not only bolster our student's resume but also contribute significantly to their overall growth as future engineers. Many students aspire to pursue higher studies to further their academic and career goals through admission to renowned universities like IIM Ahmedabad, IIM Indore, Carnegie Mellon University, Buffalo University, Massachusetts Institute of Technology to name a few."
      pointers={[
        "NBA accredited since 2017-18",
        "8 well equipped labs with state-of-the-art tools and software",
        "More than 95% BE result and more than 85% placements, many students going for higher education in renowned Universities",
        "Machine learning server and cloud server available for experimentation",
        "Qualified and devoted faculty, and Project Based Learning Activities",
        "Students compete and earn awards at national and international levels",
        "Workshop and Seminars on Recent Technology by Industry Experts",
        "More than 75 research papers published in reputed Journals/conferences in last 5 years",
      ]}
    />
  );
};

export default ComputerEngineeringDepartment;
