import Hero from "../components/sections/Hero";
import PortfolioSection from "../components/sections/PortfolioSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
import CalendarSection from "../components/sections/CalendarSection";

const Services = () => {
    return (
        <div>
            <Hero
                title="We are characterized as Thinkers and Doers"
                description="We transform ideas into unique digital experiences through innovative design and strategic thinking."
                backgroundImage="/images/services-hero.png"
                buttonText="Our Work"
                buttonLink="/portfolio"
            />
            <ServicesSection />
            <PortfolioSection />
            <TechStackSection bgColor="bg-gray" textColor="text-black" image="/images/tech/techstack-black.png" />
            <CalendarSection />
        </div>
    );
};

export default Services;
