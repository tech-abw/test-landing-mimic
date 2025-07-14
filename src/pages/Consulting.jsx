import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import ConsultingAboutSection from "../components/sections/ConsultingAboutSection";
import ToolsSectionConsulting from '../components/sections/ToolsSectionConsulting';
import WorkflowSection from '../components/sections/WorkflowSection';

const Consulting = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('title_Consulting')}
                description={t('description_Consulting')}
            />
            <Hero
                title={t('title_Consulting')}
                description={t('description_Consulting')}
                backgroundImage="/images/Consulting.png"
                mobileBackgroundImage="/images/Consulting.png"
                buttonText={t('button_Consulting')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <ConsultingAboutSection />
            <ToolsSectionConsulting />
            <WorkflowSection />
            <CalendarSection />
        </div>
    );
};

export default Consulting;
