import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";
import ConsultingAboutSection from "../components/sections/ConsultingAboutSection";
import ToolsSectionConsulting from '../components/sections/ToolsSectionConsulting';
import WorkflowSection from '../components/sections/WorkflowSection';
import HeadManager from '../components/sections/HeadTags';
import { useLocation } from "react-router-dom";

const Consulting = () => {
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
          title={t("consulting.meta.title")}
          description={t("consulting.meta.description")}
          imageUrl="https://mimic.agency/images/Consulting.png"
        />
            <Hero
                title={t('title_Consulting')}
                description={t('description_Consulting')}
                backgroundImage="/images/Consulting.png"
                mobileBackgroundImage="/images/Consulting.png"
                buttonText={t('button_Consulting')}
                buttonLink={t("tally_link")}
                desktopTitleFontSize="55px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <ConsultingAboutSection />
            <ToolsSectionConsulting />
            <WorkflowSection />
            <CalendarSection />
        </>
    );
};

export default Consulting;
