import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/sections/Hero';
import TeamSection from '../components/sections/TeamSection';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import HeadManager from '../components/sections/HeadTags';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const About = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const lang = location.pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const canonicalUrl = `https://www.mimic.agency${location.pathname}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mimic Agency",
    url: "https://www.mimic.agency",
    logo: "https://www.mimic.agency/images/logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/mimic-agency",
      "https://www.instagram.com/mimic.agency"
    ],
    description: t("home.meta.description"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX"
    }
  };
  return (
    <>
      <HeadManager
        lang={lang}
        title={t("about.meta.title")}
        description={t("about.meta.description")}
        imageUrl="https://mimic.agency/images/about-hero.webpp"
        canonicalUrl={canonicalUrl}
        hreflangs={[
          { lang: "es", href: "https://www.mimic.agency/es/nosotros" },
          { lang: "en", href: "https://www.mimic.agency/en/about" },
          { lang: "x-default", href: "https://www.mimic.agency/es/nosotros" }
        ]}
      />
      <Hero 
        title={t('about_hero_title')}
        description={t('about_hero_description')}
        backgroundImage="/images/about-hero.webp"
        mobileBackgroundImage="/images/about-mobile.webp"
        buttonText={t('about_hero_button')}
        buttonLink={`/${lang}/${t('routes.services')}`}
        mobileTitleFontSize='39px'
        mobileDescriptionFontSize='17px'
      />
      <TeamSection />
      <AboutHeroSection />
      {/* Datos estructurados: Organización */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      </>
  );
};

export default About; 