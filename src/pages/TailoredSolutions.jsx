import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import SliderTSServices from "../components/sections/SliderTSServices";
import TSAboutSection from "../components/sections/TSAboutSeccion";
import ToolsSectionTS from "../components/sections/ToolsSectionTS";
import WorkflowSection from "../components/sections/WorkflowSection";       

const TailoredSolutions = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('title_Tailored_Solutions')}
                description={t('description_Tailored_Solutions')}
            />
            <Hero
                title={t('title_Tailored_Solutions')}
                description={t('description_Tailored_Solutions')}
                backgroundImage="/images/TailoredSolutions.png"
                mobileBackgroundImage="/images/TailoredSolutions.png"
                buttonText={t('button_Tailored_Solutions')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderTSServices/>
            <TSAboutSection />
            <ToolsSectionTS />
            <WorkflowSection />
            <CalendarSection />
        </div>
    );
};

export default TailoredSolutions;
