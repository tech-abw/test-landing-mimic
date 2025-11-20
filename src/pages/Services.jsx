import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import PortfolioServicesSection from "../components/sections/PortfolioServicesSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
{/*import CalendarSection from "../components/sections/CalendarSection";*/}
import { useLocation } from "react-router-dom";
import HeadManager from "../components/sections/HeadTags";


const Services = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();
    //const langFromPath = location.pathname.startsWith("/en") ? "en" : "es";
    const lang = location.pathname.startsWith("/en") ? "en" : "es";
   
  
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mimic Agency",
      url: "https://www.mimic.agency",
      logo: "https://www.mimic.agency/images/logo.svg",
      sameAs: [
        "https://www.linkedin.com/company/mimic-agency",
        "https://www.instagram.com/mimic.agency"
      ],
      description: t("home.meta.description"),
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX"
      }
    };
    return (
        <>
      <HeadManager
        lang={lang}
        title={t("services.meta.title")}
        description={t("services.meta.description")}
        imageUrl="https://mimic.agency/images/banner-servicios.webp"
      />


            <Hero
                title={t('services_hero_title')}
                description={t('services_hero_description')}
                backgroundImage="/images/banner-servicios.webp"
                mobileBackgroundImage="/images/mobile-servicios.webp"
                buttonText={t('services_hero_button')}
                buttonLink={`/${lang}/${t('routes.services')}`}
                desktopTitleFontSize="55px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <ServicesSection />
            <PortfolioServicesSection />
            <TechStackSection bgColor="bg-gray" textColor="text-black" image="/images/tech/techstack-black.png" />
            {/*<CalendarSection />*/}
            {/* Datos estructurados: Organización */}
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
        </>
    );
};

export default Services;
