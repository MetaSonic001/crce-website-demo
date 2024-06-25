import React from "react";
import Person from "@/components/person";
const page = () => {
  const sampleProps = {
    image: "/padre.jpg",
    title: "From Director's Desk",
    name: "Fr.Valerian D'Souza",
    p1: "Today ‘s Global Education scenario is changing rapidly. Science and Technology are forging ahead in order to provide a world-class Education and sophisticated life to human beings all over the world. We stand at a unique moment in time and we should understand these challenges that lie ahead of us. With technical education at an inflection point, we must strive to equip technocrats of tomorrow with the competence, ability, and character to address emerging global business and social challenges.",
    p2: "Technological, corporate & social expectation changes, intense competition has made technical education very dynamic and unpredictable. With Liberalization, Privatization and Globalization World is getting more and more integrated and also globalized. Even technical education today is also energized continuously by powerful forces of change such as developments in science and technology. The work of Today's engineer is not restricted to manage only his/her product or service and market. Rather he/she has a large responsibility to assume the role of an organizational leader in such environments which is extremely challenging but rewarding as well. Such leaders in today's environment need to acquire specialized knowledge, skills, and attitudes so as to have a cutting edge advantage over their competitors.",
    p3: "In this context,  we at CRCE design our teaching-learning pedagogy with the belief that today's engineers need to inculcate in themselves an analytical orientation to understand and analyze complex technical situations while at the same time possess an action orientation and an administrative point of view.",
    p4: "In this context,  we at CRCE design our teaching-learning pedagogy with the belief that today's engineers need to inculcate in themselves an analytical orientation to understand and analyze complex technical situations while at the same time possess an action orientation and an administrative point of view.",
  };
  return (
    <div>
      {" "}
      <Person {...sampleProps} />
    </div>
  );
};

export default page;
