import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadManager from "../components/sections/HeadTags";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SliderIAServices from "../components/sections/SliderIAServices";
import AIAboutSeccion from "../components/sections/AIAboutSeccion";
import ToolsSectionAI from '../components/sections/ToolsSectionAI';
import WorkflowSection from '../components/sections/WorkflowSection';




const AISolutions = () => {
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
          title={t("ai.meta.title")}
          description={t("ai.meta.description")}
          imageUrl="https://mimic.agency/images/AISolutions.png"
        />
  
            <Hero
                title={t('title_AI_Solutions')}
                description={t('description_AI_Solutions')}
                backgroundImage="/images/AISolutions.png"
                mobileBackgroundImage="/images/AISolutions.png"
                buttonText={t('button_AI_Solutions')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderIAServices />
            <AIAboutSeccion />
            <ToolsSectionAI />
            <WorkflowSection />
            <CalendarSection />
        </>
    );
};

export default AISolutions;
