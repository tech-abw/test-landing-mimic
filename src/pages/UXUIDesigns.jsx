import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import SliderUXUIServices from "../components/sections/SliderUXUIServices";
import ToolsSectionUxUi from '../components/sections/ToolsSectionUxUi';
import WorkflowSection from '../components/sections/WorkflowSection';
import UXUIAboutSection from "../components/sections/UXUIAboutSection";

const UXUIDesigns = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('title_UX/UI_Designs')}
                description={t('description_UX/UI_Designs')}
            />
            <Hero
                title={t('title_UX/UI_Designs')}
                description={t('description_UX/UI_Designs')}
                backgroundImage="/images/UX_UI_Design.webp"
                mobileBackgroundImage="/images/UX_UI_Design.png"
                buttonText={t('button_UX/UI_Designs')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderUXUIServices />
            <UXUIAboutSection />
            <ToolsSectionUxUi />
            <WorkflowSection />
            <CalendarSection />
        </div>
    );
};

export default UXUIDesigns;
