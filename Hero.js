// components/Hero.js

'use client'; // Ensure this is a client-side component

import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook from react-intersection-observer
import Navbar from './Navbar';

const Hero = () => {
  // Intersection observer hooks for each section to track when they come into view
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div>
      {/* Hero Section */}
      <div
        id="hero"
        ref={heroRef} // Set ref for intersection observer
        className={`min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)] bg-left lg:bg-[15%] bg-cover ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}
        style={{ backgroundSize: '25%' }}
      >
        <Navbar />
        <div className="container flex lg:flex-row flex-col items-center justify-center gap-8 px-4 lg:px-0 h-[calc(100vh-60px)]">
          {/* Left side - Profile Image */}
          <div className="lg:flex hidden justify-center items-center relative">
            <img
              src="/profile.jpg" // Ensure the profile image path is correct
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover"
              style={{
                transform: 'translateX(0px) translateY(10px) translateZ(0px)',
                zIndex: 10,
              }}
            />
          </div>

          {/* Right side - Hero Text */}
          <div
            className={`text-center lg:text-left flex justify-center items-center flex-col space-y-4 relative transition-all duration-700 ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            <p className="text-[40px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
              <span className="block">I'm</span>
              <span className="block">Muhammad</span>
              <span className="block">Ibrahim</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
