import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import { useLocation } from "react-router-dom";
import HeadManager from "../components/sections/HeadTags";

import SliderUXUIServices from "../components/sections/SliderUXUIServices";
import ToolsSectionUxUi from '../components/sections/ToolsSectionUxUi';
import WorkflowSection from '../components/sections/WorkflowSection';
import UXUIAboutSection from "../components/sections/UXUIAboutSection";

const UXUIDesigns = () => {
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
          title={t("uxui.meta.title")}
          description={t("uxui.meta.description")}
          imageUrl="https://mimic.agency/images/UxUiHero.png"
        />  
            <Hero
                title={t('title_UX/UI_Designs')}
                description={t('description_UX/UI_Designs')}
                backgroundImage="/images/UX_UI_Design.webp"
                mobileBackgroundImage="/images/UX_UI_Design.webp"
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
        </>
    );
};

export default UXUIDesigns;
