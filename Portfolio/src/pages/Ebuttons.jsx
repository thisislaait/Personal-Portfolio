import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const EButtons = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation for the image
    gsap.from(imageRef.current, {
      x: '-100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top center+=100',
        end: 'bottom center-=100',
        scrub: true,
      },
    });

    // Animation for the text
    gsap.from(textRef.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center+=100',
        end: 'bottom center-=100',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        ref={imageRef}
        src="https://via.placeholder.com/300"
        alt="Animated Image"
        className="w-64 h-64 mb-4"
      />
      <div
        ref={textRef}
        className="text-2xl font-bold text-center opacity-0 text-white"
      >
        Animated Text
      </div>
    </div>
  );
};

export default EButtons;

