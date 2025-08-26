import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadManager from "../components/sections/HeadTags";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";

import SliderWEServices from "../components/sections/SliderWEServices";
import WEAboutSection from "../components/sections/WEAboutSection";
import ToolsSectionWE from "../components/sections/ToolsSectionWE";
import WorkflowSection from "../components/sections/WorkflowSection";       

const WebsiteEcommerceSolutions = () => {
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
          title={t("webecommerce.meta.title")}
          description={t("webecommerce.meta.description")}
          imageUrl="https://mimic.agency/images/WebsiteEcommerceSolutions.png"
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
        </>
    );
};

export default WebsiteEcommerceSolutions;
