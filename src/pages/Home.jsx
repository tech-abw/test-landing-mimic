import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import HeadManager from "../components/sections/HeadTags";

const Home = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  // Detecta idioma desde la ruta
  const langFromPath = location.pathname.startsWith("/en") ? "en" : "es";

  // Sincroniza idioma sin romper el render
  useEffect(() => {
    if (i18n.language !== langFromPath) {
      i18n.changeLanguage(langFromPath);
    }
  }, [langFromPath, i18n]);

  // Construye URL canónica desde la ruta actual
  const canonicalUrl = `https://www.mimic.agency${location.pathname}`;

  return (
    <>
      <HeadManager
        lang={langFromPath}
        title={t("home.meta.title")}
        description={t("home.meta.description")}
        imageUrl="https://www.mimic.agency/images/home-hero.webp"
        canonicalUrl={canonicalUrl}
        hreflangs={[
          { lang: "es", href: "https://www.mimic.agency/es/" },
          { lang: "en", href: "https://www.mimic.agency/en/" },
          { lang: "x-default", href: "https://www.mimic.agency/es/" }
        ]}
      />

      <Hero
        buttonText={t("start_here_button")}
        buttonLink="https://tally.so/r/wb6l9Z"
        mobileTitleFontSize="46px"
        mobileDescriptionFontSize="17px"
        desktopTitleFontSize="80px"
        desktopDescriptionFontSize="20px"
        mobileBackgroundImage="/images/Mobile_Pulpo.webp"
      />

      <ClientsSection />
      <PortfolioSection />
      <WorkflowSection />
      <TechStackSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;