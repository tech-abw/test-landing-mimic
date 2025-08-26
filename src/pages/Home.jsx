import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import HeadManager from "../components/sections/HeadTags";

const Home = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();
  
    const langFromPath = location.pathname.startsWith("/en") ? "en" : "es";
  
    if (i18n.language !== langFromPath) {
      i18n.changeLanguage(langFromPath);
    }

    return (
        <>
        <HeadManager
        lang={langFromPath}
        title={t("home.meta.title")}
        description={t("home.meta.description")}
        imageUrl="https://mimic.agency/images/HomeHero.png"
      />
        <Hero
            buttonText={t('start_here_button')}
            buttonLink="https://tally.so/r/wb6l9Z"
            mobileTitleFontSize="46px"
            mobileDescriptionFontSize="17px"
            desktopTitleFontSize="80px"
            desktopDescriptionFontSize="20px"
            mobileBackgroundImage="/images/Mobile_Pulpo.png"
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
