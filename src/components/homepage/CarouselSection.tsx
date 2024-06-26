// src/components/Carousel.js
'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Carousel = ({ slides }) => {
  return (
    <Splide options={{ perPage: 1 }}>
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
