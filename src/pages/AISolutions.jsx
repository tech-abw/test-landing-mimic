import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadManager from "../components/sections/HeadTags";
import Hero from "../components/sections/Hero";
{/*import CalendarSection from "../components/sections/CalendarSection";*/}
import SliderIAServices from "../components/sections/SliderIAServices";
import AIAboutSeccion from "../components/sections/AIAboutSeccion";
import ToolsSectionAI from '../components/sections/ToolsSectionAI';
import WorkflowSection from '../components/sections/WorkflowSection';
import { useEffect } from "react";




const AISolutions = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();
  
    const lang = location.pathname.startsWith("/en") ? "en" : "es";
  
    useEffect(() => {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }, [lang, i18n]);
  
    const canonicalUrl = `https://www.mimic.agency${location.pathname}`;

  
    return (
        <>
        <HeadManager
          lang={lang}
          title={t("ai.meta.title")}
          description={t("ai.meta.description")}
          imageUrl="https://mimic.agency/images/AISolutions.png"
          canonicalUrl={canonicalUrl}
          hreflangs={[
            { lang: "es", href: "https://www.mimic.agency/es/ai-solutions" },
            { lang: "en", href: "https://www.mimic.agency/en/ai-solutions" },
            { lang: "x-default", href: "https://www.mimic.agency/es/ai-solutions" }
          ]}
        />
  
            <Hero
                title={t('title_AI_Solutions')}
                description={t('description_AI_Solutions')}
                backgroundImage="/images/AISolutions.png"
                mobileBackgroundImage="/images/AISolutions.png"
                buttonText={t('button_AI_Solutions')}
                buttonLink={t("tally_link")}
                desktopTitleFontSize="55px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderIAServices />
            <AIAboutSeccion />
            <ToolsSectionAI />
            <WorkflowSection />
            {/*<CalendarSection />*/}
        </>
    );
};

export default AISolutions;
