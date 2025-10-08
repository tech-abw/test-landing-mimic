import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadManager from "../components/sections/HeadTags";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import { useEffect } from "react";

import SliderWEServices from "../components/sections/SliderWEServices";
import WEAboutSection from "../components/sections/WEAboutSection";
import ToolsSectionWE from "../components/sections/ToolsSectionWE";
import WorkflowSection from "../components/sections/WorkflowSection";       

const WebsiteEcommerceSolutions = () => {
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
          title={t("webecommerce.meta.title")}
          description={t("webecommerce.meta.description")}
          imageUrl="https://mimic.agency/images/WebsiteEcommerceSolutions.png"
          canonicalUrl={canonicalUrl}
          hreflangs={[
            { lang: "es", href: "https://www.mimic.agency/es/ecommerce" },
            { lang: "en", href: "https://www.mimic.agency/en/ecommerce" },
            { lang: "x-default", href: "https://www.mimic.agency/es/ecommerce" }
          ]}
        />  
            <Hero
                title={t('title_Website_Ecommerce_Solutions')}
                description={t('description_Website_Ecommerce_Solutions')}
                backgroundImage="/images/WebsiteEcommerceSolutions.png"
                mobileBackgroundImage="/images/WebsiteEcommerceSolutions.png"
                buttonText={t('button_Website_Ecommerce_Solutions')}
                buttonLink="/portfolio"
                desktopTitleFontSize="55px"
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
