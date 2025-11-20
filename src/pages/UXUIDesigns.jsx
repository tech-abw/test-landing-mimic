import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
{/*import CalendarSection from "../components/sections/CalendarSection";*/}
import { useLocation } from "react-router-dom";
import HeadManager from "../components/sections/HeadTags";

import SliderUXUIServices from "../components/sections/SliderUXUIServices";
import ToolsSectionUxUi from '../components/sections/ToolsSectionUxUi';
import WorkflowSection from '../components/sections/WorkflowSection';
import UXUIAboutSection from "../components/sections/UXUIAboutSection";
import { useEffect } from "react";

const UXUIDesigns = () => {
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
          title={t("uxui.meta.title")}
          description={t("uxui.meta.description")}
          imageUrl="https://mimic.agency/images/UxUiHero.png"
          canonicalUrl={canonicalUrl}
          hreflangs={[
            { lang: "es", href: "https://www.mimic.agency/es/ux-ui" },
            { lang: "en", href: "https://www.mimic.agency/en/ux-ui" },
            { lang: "x-default", href: "https://www.mimic.agency/es/ux-ui" }
          ]}
        />  
            <Hero
                title={t('title_UX/UI_Designs')}
                description={t('description_UX/UI_Designs')}
                backgroundImage="/images/UX_UI_Design.webp"
                mobileBackgroundImage="/images/UX_UI_Design.webp"
                buttonText={t('button_UX/UI_Designs')}
                buttonLink={t("tally_link")}
                desktopTitleFontSize="55px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <SliderUXUIServices />
            <UXUIAboutSection />
            <ToolsSectionUxUi />
            <WorkflowSection />
            {/*<CalendarSection />*/}
        </>
    );
};

export default UXUIDesigns;
