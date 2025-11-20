import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
{/*import CalendarSection from "../components/sections/CalendarSection";*/}
import SliderTSServices from "../components/sections/SliderTSServices";
import TSAboutSection from "../components/sections/TSAboutSeccion";
import ToolsSectionTS from "../components/sections/ToolsSectionTS";
import WorkflowSection from "../components/sections/WorkflowSection";       
import HeadManager from '../components/sections/HeadTags';
import { useLocation } from "react-router-dom";

const TailoredSolutions = () => {
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
        title={t("tailored-solutions.meta.title")}
        description={t("tailored-solutions.meta.description")}
        imageUrl="https://mimic.agency/images/TailoredSolutions.png"
      />

            <Hero
                title={t('title_Tailored_Solutions')}
                description={t('description_Tailored_Solutions')}
                backgroundImage="/images/TailoredSolutions.png"
                mobileBackgroundImage="/images/TailoredSolutions.png"
                buttonText={t('button_Tailored_Solutions')}
                buttonLink={t("tally_link")}
                desktopTitleFontSize="55px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderTSServices/>
            <TSAboutSection />
            <ToolsSectionTS />
            <WorkflowSection />
            {/*<CalendarSection />*/}
        </>
    );
};

export default TailoredSolutions;
