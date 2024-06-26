// src/components/Carousel.js
'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Play } from 'next/font/google';

const Carousel = ({ slides }) => {
  return (
    <Splide options={{
      type: 'loop',
      gap: '1rem',
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,

    }} >
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="h-full bg-white rounded w-full">
            <img src={slide.src} className='object-cover rounded w-full' />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
