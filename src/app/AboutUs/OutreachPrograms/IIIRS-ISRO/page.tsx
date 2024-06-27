import AllPages from '@/components/AllPages';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

const ISRO = () => {
    const sampleProps = {
        image: "/placeholder.svg",
        title: "ISRO Outreach Program",
        name: "",
        paragraphs: [
            'Fr. Conceicao Rodrigues College of Engineering is the Nodal Center for IIRS-ISRO outreach programme for Online, Offline, Live & Interactive Courses offered by IIRS-ISRO Dehradun from 16  August 2022. Indian Institute of Remote Sensing (IIRS) has developed e-learning contents and Learning Management Systems (LMS) for different certificate courses in Remote Sensing and geo-spatial technology.',
            

            
        ]
      };

      return (
        <div>
          <AllPages {...sampleProps} />
        </div>
      );
}

export default ISRO