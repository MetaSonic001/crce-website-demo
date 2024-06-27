// src/components/Carousel.tsx
'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Play } from 'next/font/google';

interface Slide {
  src: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Splide options={{
      type: 'loop',
      gap: '1rem',
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,
    }} >
      {slides.map((slide: Slide, index: number) => (
        <SplideSlide key={index}>
          <div className="h-full bg-white rounded w-full">
            <img src={slide.src} alt={`Slide ${index + 1}`} className='object-cover rounded w-full' />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;