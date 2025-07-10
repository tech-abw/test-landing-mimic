import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import SliderIAServices from "../components/sections/SliderIAServices";
import AIAboutSeccion from "../components/sections/AIAboutSeccion";
import ToolsSectionAI from '../components/sections/ToolsSectionAI';
import WorkflowSection from '../components/sections/WorkflowSection';

const AISolutions = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('title_AI_Solutions')}
                description={t('description_AI_Solutions')}
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
        </div>
    );
};

export default AISolutions;
