import Hero from "../components/sections/Hero";
import PortfolioServicesSection from "../components/sections/PortfolioServicesSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
import CalendarSection from "../components/sections/CalendarSection";
import SEO from "../components/SEO";

const Services = () => {
    return (
        <div>
            <SEO
                title="Our services"
                description="UX UI Design, Website and E-commerce solutions, Consulting, AI and Tailored solutions."
            />
            <Hero
                title="We are characterized as Thinkers and Doers"
                description="We transform ideas into unique digital experiences through innovative design and strategic thinking."
                backgroundImage="/images/services-hero.png"
                mobileBackgroundImage="/images/mobile-services.png"
                buttonText="Our Work"
                buttonLink="/portfolio"
                desktopTitleFontSize="78px"
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
