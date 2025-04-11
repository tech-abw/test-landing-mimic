import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const Home = () => {
    return (
        <main>
            <Hero
                buttonLink="https://tally.so/r/wb6l9Z"
                mobileTitleFontSize="46px"
                mobileDescriptionFontSize="17px"
                desktopTitleFontSize="80px"
                desktopDescriptionFontSize="20px"
            />
            <ClientsSection />
            <PortfolioSection />
            <WorkflowSection />
            <TechStackSection />
            <TestimonialsSection />
        </main>
    );
};

export default Home;
