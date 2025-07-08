import { useTranslation } from "react-i18next";
import Hero from "../components/sections/Hero";
import PortfolioServicesSection from "../components/sections/PortfolioServicesSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";

const Services = () => {
    const { t } = useTranslation();
    return (
        <div>
            <SEO
                title={t('services_seo_title')}
                description={t('services_seo_description')}
            />
            <Hero
                title={t('services_hero_title')}
                description={t('services_hero_description')}
                backgroundImage="/images/services-hero.png"
                mobileBackgroundImage="/images/mobile-services.png"
                buttonText={t('services_hero_button')}
                buttonLink="/portfolio"
                desktopTitleFontSize="76px"
                mobileTitleFontSize="43px"
                mobileDescriptionFontSize="17px"
            />
            <ServicesSection />
            <PortfolioServicesSection />
            <TechStackSection bgColor="bg-gray" textColor="text-black" image="/images/tech/techstack-black.png" />
            <CalendarSection />
        </div>
    );
};

export default Services;
