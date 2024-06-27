declare module '@splidejs/react-splide' {
    import { Splide as OriginalSplide, SplideSlide as OriginalSplideSlide } from '@splidejs/react-splide/dist/types';
    
    export const Splide: typeof OriginalSplide;
    export const SplideSlide: typeof OriginalSplideSlide;
  }