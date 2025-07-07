import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/sections/Hero';
import TeamSection from '../components/sections/TeamSection';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import SEO from "../components/SEO";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SEO
        title={t('about_seo_title')}
        description={t('about_seo_description')}
      />
      <Hero 
        title={t('about_hero_title')}
        description={t('about_hero_description')}
        backgroundImage="/images/about-hero.png"
        mobileBackgroundImage="/images/about-mobile.png"
        buttonText={t('about_hero_button')}
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