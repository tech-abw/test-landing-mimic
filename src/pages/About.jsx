import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/sections/Hero';
import TeamSection from '../components/sections/TeamSection';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import HeadManager from '../components/sections/HeadTags';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const lang = location.pathname.startsWith("/en") ? "en" : "es";

  
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

  return (
    <>
      <HeadManager
        lang={lang}
        title={t("about.meta.title")}
        description={t("about.meta.description")}
        imageUrl="https://mimic.agency/images/AboutHero.png"
      />
      <Hero 
        title={t('about_hero_title')}
        description={t('about_hero_description')}
        backgroundImage="/images/about-hero.png"
        mobileBackgroundImage="/images/about-mobile.png"
        buttonText={t('about_hero_button')}
        buttonLink={`/${lang}/${t('routes.services')}`}
        mobileTitleFontSize='39px'
        mobileDescriptionFontSize='17px'
      />
      <TeamSection />
      <AboutHeroSection />
    </>
  );
};

export default About; 