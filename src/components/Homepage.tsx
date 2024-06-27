// src/components/HomepageContent.jsx
import React from 'react';
import QuickGlance from './homepage/QuickGlance';
import NoticeBoard from './homepage/NoticeBoard';
import CarouselSection from './homepage/CarouselSection';
import InfoCard from './homepage/InfoCard';
import Carousel from './homepage/CarouselSection';

const HomepageContent = () => {

  const BaseUrl = 'https://frcrce.ac.in'

  return (

    <>
      <FirstComponent />
      <main className="container mx-auto p-4">
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            sectionText='ABOUT FR.CRCE'
            title="FR. CRCE"
            description="The College is Affiliated to the University of Mumbai. Approved by AICTE, New Delhi. & Offers UG, PG & Ph.D. Programmes in Technology."
            linkText="Read more"
            linkUrl="#"
            image={BaseUrl + '/images/2021/10/2-page-1-crce-building.png'}
          />
          <InfoCard
            sectionText="Realize Your Dreams @ FR.CRCE"
            childHtml={
              <iframe width="auto" height="315" src="https://www.youtube.com/embed/T_3NAphp1XI?si=znwYQVT1iZCx0i9e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            }
            description="Short Video about our College Campus, Students Activities, Technology we used, Placements, Etc."
          />
          <NoticeBoard />
          <InfoCard
            sectionText="ADMISSION POINT OF CONTACT"
            childHtml={
              <div className='flex flex-col items-start text-lg justify-center gap-3'>
                <div className='flex flex-col gap-2' >
                  <p>For Queries & Detailed information contact Registrar Office</p>
                  <p className='font-bold' >022-67114042</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <p>Timings:</p>
                  <p className='font-bold'>10:00 AM - 1.00 PM</p>

                  <p className='font-bold'>1.30 PM - 4.30 PM</p>
                </div>
              </div>
            }
            linkText="Learn More"
            linkType='button'
            linkUrl="#"
          />
          <div className='flex flex-col gap-4 items-center justify-center' >
            <InfoCard
              linkText="CLICK HERE TO KNOW MORE"
              sectionText="National Innovation and Startup Policy"
              linkUrl="#"
            />
            <InfoCard
              sectionText='Upcoming events'
              linkText='SEE ALL EVENTS'
              linkUrl='#'
            />
          </div>
          <InfoCard
            title="Our Achievements"
            childHtml={
              <ul className='text-indigo-600 list-disc p-4' >
                <li><a>NBA Accredited</a></li>
                <li><a>NIRF Ranking</a></li>
                <li><a>ARIIA Ranking</a></li>
                <li><a>Other Rankings</a></li>
                <li><a>Awards</a></li>
                <li><a>Dr. S. Radhakrishan Memorial Awards 2017</a></li>
                <li><a>Special Award from IIIE</a></li>
                <li><a>Go Green Initiative</a></li>
                <li><a>University Rank Holders 2018</a></li>
              </ul>
            }
          />
        </section>
      </main >
    </>
  );
}

export default HomepageContent;


const FirstComponent = () => {
  const carouselSlides = [
    { title: 'Slide 1', src: 'https://frcrce.ac.in/images/Slide3.png' },
    { title: 'Slide 2', src: 'https://frcrce.ac.in/images/AL2.jpg' },
    { title: 'Slide 3', src: 'https://frcrce.ac.in/images/AL3.jpg' },

  ];

  return (

    <section className="relative flex flex-col justify-center w-full items-center h-[500px] bg-white">
      <div className="absolute inset-0 top-0">
        <div className="h-16 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 84.94" preserveAspectRatio="none">
            <path
              d="M0,0V72.94c14.46,5.89,32.38,10.5,54.52.26,110.25-51,120.51,23.71,192.6-4.3,144.73-56.23,154.37,49.44,246.71,4.64C637,4.05,622.19,124.16,757.29,66.21c93-39.91,108.38,54.92,242.71-8.25V0Z"
              style={{ fillRule: "evenodd", opacity: 0.33, fill: "goldenrod" }}
            ></path>
            <path
              d="M0,0V52.83c131.11,59.9,147-32.91,239.24,6.65,135.09,58,120.24-62.16,263.46,7.34,92.33,44.8,102-60.88,246.71-4.64,72.1,28,82.35-46.71,192.6,4.3,23.95,11.08,43,4.78,58-1.72V0Z"
              style={{ fillRule: "evenodd", opacity: 0.66, fill: "yellow" }}
            ></path>
            <path
              d="M0,0V24.26c15.6,6.95,35.77,15.41,61.78,3.38,110.25-51,120.51,23.71,192.6-4.3C399.11-32.89,408.75,72.79,501.08,28,644.3-41.51,629.45,78.6,764.54,20.65,855.87-18.53,872.34,72.12,1000,15.7V0Z"
              style={{ fillRule: "evenodd", fill: 'gold' }}
            ></path>
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bottom-0 transform rotate-180">
        <div className="h-16 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 84.94" preserveAspectRatio="none">
            <path
              d="M0,0V72.94c14.46,5.89,32.38,10.5,54.52.26,110.25-51,120.51,23.71,192.6-4.3,144.73-56.23,154.37,49.44,246.71,4.64C637,4.05,622.19,124.16,757.29,66.21c93-39.91,108.38,54.92,242.71-8.25V0Z"
              style={{ fillRule: "evenodd", opacity: 0.33, fill: "goldenrod" }}
            ></path>
            <path
              d="M0,0V52.83c131.11,59.9,147-32.91,239.24,6.65,135.09,58,120.24-62.16,263.46,7.34,92.33,44.8,102-60.88,246.71-4.64,72.1,28,82.35-46.71,192.6,4.3,23.95,11.08,43,4.78,58-1.72V0Z"
              style={{ fillRule: "evenodd", opacity: 0.66, fill: "yellow" }}
            ></path>
            <path
              d="M0,0V24.26c15.6,6.95,35.77,15.41,61.78,3.38,110.25-51,120.51,23.71,192.6-4.3C399.11-32.89,408.75,72.79,501.08,28,644.3-41.51,629.45,78.6,764.54,20.65,855.87-18.53,872.34,72.12,1000,15.7V0Z"
              style={{ fillRule: "evenodd", fill: "gold" }}
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 overlay flex flex-col items-center justify-center gap-4 w-5/6 md:flex-row">
        <QuickGlance />
        <div className="w-full rounded-lg ">
          <Carousel slides={carouselSlides} /> {/* Use Carousel component here */}
        </div>
      </div>
    </section>
  )
}
