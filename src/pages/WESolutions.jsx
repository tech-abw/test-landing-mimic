import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import SliderWEServices from "../components/sections/SliderWEServices";
import WEAboutSection from "../components/sections/WEAboutSection";
import ToolsSectionWE from "../components/sections/ToolsSectionWE";
import WorkflowSection from "../components/sections/WorkflowSection";       

const WebsiteEcommerceSolutions = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('title_Website_Ecommerce_Solutions')}
                description={t('description_Website_Ecommerce_Solutions')}
            />
            <Hero
                title={t('title_Website_Ecommerce_Solutions')}
                description={t('description_Website_Ecommerce_Solutions')}
                backgroundImage="/images/WebsiteEcommerceSolutions.png"
                mobileBackgroundImage="/images/WebsiteEcommerceSolutions.png"
                buttonText={t('button_Website_Ecommerce_Solutions')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderWEServices />
            <WEAboutSection />
            <ToolsSectionWE />
            <WorkflowSection />
            <CalendarSection />
        </div>
    );
};

export default WebsiteEcommerceSolutions;
