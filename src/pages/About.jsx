import React from 'react';
import Hero from '../components/sections/Hero';
import TeamSection from '../components/sections/TeamSection';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import SEO from "../components/SEO";

const About = () => {
  return (
    <div>
      <SEO
        title="Get to know our agency"
        description="Innovation starts with imitation. We use this principle to craft digital solutions that transform ideas into unique digital experiences."
      />
      <Hero 
        title="At Mimic, we believe that all species, including humans, begin by mimicking"
        description="Whether it's learning to walk or creating art. We use this principle to craft digital solutions that transform ideas into unique digital experiences."
        backgroundImage="/images/about-hero.png"
        mobileBackgroundImage="/images/about-mobile.png"
        buttonText="Learn More"
        buttonLink="/services"
        mobileTitleFontSize='39px'
        mobileDescriptionFontSize='17px'
      />
      <TeamSection />
      <AboutHeroSection />
    </div>
  );
};

export default About; 