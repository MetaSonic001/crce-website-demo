// src/components/HomepageContent.jsx
import React from 'react';
import QuickGlance from './homepage/QuickGlance';
import NoticeBoard from './homepage/NoticeBoard';
import CarouselSection from './homepage/CarouselSection';
import InfoCard from './homepage/InfoCard';
import Carousel from './homepage/CarouselSection';

const HomepageContent = () => {
  const carouselSlides = [
    { title: 'Slide 1', content: 'Content for Slide 1' },
    { title: 'Slide 2', content: 'Content for Slide 2' },
    { title: 'Slide 3', content: 'Content for Slide 3' },
  ];


  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-col md:flex-row">
        <QuickGlance />
        <div className="w-full">
          <Carousel slides={carouselSlides} /> {/* Use Carousel component here */}
        </div>
      </section>
      
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="FR. CRCE"
          description="The College is Affiliated to the University of Mumbai. Approved by AICTE, New Delhi. & Offers UG, PG & Ph.D. Programmes in Technology."
          linkText="Read more"
          linkUrl="#"
        />
        <InfoCard
          title="Realize Your Dreams @ FR.CRCE"
          description="Short Video about our College Campus, Students Activities, Technology we used, Placements, Etc."
        />
        <NoticeBoard />
        <InfoCard
          title="Startup Policy"
          description="Explore our startup policy and support for student entrepreneurs."
          linkText="Learn More"
          linkUrl="#"
        />
        <InfoCard
          title="Our Achievements"
          description="Check out our latest achievements and awards."
          linkText="View Achievements"
          linkUrl="#"
        />
        <InfoCard
          title="Our Achievements"
          description="Check out our latest achievements and awards."
          linkText="View Achievements"
          linkUrl="#"
        />
      </section>
    </main>
  );
}

export default HomepageContent;
