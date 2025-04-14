import Hero from "../components/sections/Hero";
import PortfolioServicesSection from "../components/sections/PortfolioServicesSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
import CalendarSection from "../components/sections/CalendarSection";
import { Helmet } from "react-helmet-async";

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Our services</title>
                <meta name="description" content="UX UI Design, Website and E-commerce solutions, No-Code / Low code development, AI and Tailored solutions." />
                <meta property="og:title" content="Our services" />
                <meta property="og:description" content="UX UI Design, Website and E-commerce solutions, No-Code / Low code development, AI and Tailored solutions." />
                <meta property="twitter:title" content="Our services" />
                <meta property="twitter:description" content="UX UI Design, Website and E-commerce solutions, No-Code / Low code development, AI and Tailored solutions." />
            </Helmet>
            <Hero
                title="We are characterized as Thinkers and Doers"
                description="We transform ideas into unique digital experiences through innovative design and strategic thinking."
                backgroundImage="/images/services-hero.png"
                mobileBackgroundImage="/images/services/hero-mobile.jpg"
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
