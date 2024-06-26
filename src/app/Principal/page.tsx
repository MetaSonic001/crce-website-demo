import AllPages from '@/components/AllPages';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

const PrincipalPage = () => {
    const sampleProps = {
        image: "/placeholder.svg",
        title: "Principal - Dr Surendra Singh Rathod",
        name: "Dr Surendra Singh Rathod",
        paragraphs: [
            "I have great pleasure in expressing my thoughts as the Principal of Fr. Conceicao Rodriuges College of Engineering; a prestigious, self-financed institute affiliated to University of Mumbai, Maharashtra and approved by AICTE. Fr CRCE was established in 1984 with a vision of ‘",
            "Education makes one more well-informed and knowledgeable. Both of these will help to enhance critical thinking skills needed to make good decisions in every walk of life. Education must prepare aspiring minds for “",
            "Recently the world has seen unprecedented and extraordinary disruptions in all walks of life including education. We need to create engineers who are flexible enough to adapt new changes, develop new technologies and also behave as responsible citizens of the country. Engineers & technologists form the backbone of any nation’s economic development. Responsibility of speeding up the nation’s economic wheel lies on Engineers and Technocrats. A new normal has already arrived in education system. With the introduction of NEP-2020 an ambitious policy of Government of India many new concepts are introduced in education system like Multidisciplinary exposure to learners, Academic Bank of Credits, Multiple Entry & Exit, Holistic Development of Students, Outcome Based Education, industry linkages and more autonomy to institutes. Fr. CRCE is looking forward to successfully implement these policies as and when possible by restructuring the academics that create research culture and encouraging holistic development of students.",
            "Institute is dedicated in ‘. With the support of dedicated and hardworking faculty and staff, the institute has achieved remarkable visibility and ranking. Our splendid academic performance, sparkling placements, enrollment for higher studies at the best places of the world, prizes won by our students in national/international competitions in past many years are the true testimonials for this.",
            "On behalf of all the stakeholders of Fr. CRCE, I welcome you to this family and look forward to your valuable association with us for a better tomorrow. This institution will undoubtedly empower you to a bright future and to lead a successful life."
        ]
      };

      return (
        <div>
         <Navbar/>
          <AllPages {...sampleProps} />
          <Footer/>
        </div>
      );
}

export default PrincipalPage