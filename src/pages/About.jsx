import React from 'react';
import Hero from '../components/sections/Hero';
import TeamSection from '../components/sections/TeamSection';
import AboutHeroSection from '../components/sections/AboutHeroSection';

const About = () => {
  return (
    <div>
      <Hero 
        title="At Mimic, we believe that all species, including humans, begin by mimicking"
        description="Whether it's learning to walk or creating art. We use this principle to craft digital solutions that transform ideas into unique digital experiences."
        backgroundImage="/images/about-hero.png"
        buttonText="Learn More"
        buttonLink="/services"
        mobileTitleFontSize='40px'
      />
      <TeamSection />
      <AboutHeroSection />
    </div>
  );
};

export default About; 