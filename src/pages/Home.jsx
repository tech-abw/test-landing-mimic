import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const Home = () => {
    return (
        <main>
            <Hero />
            <ClientsSection />
            <PortfolioSection />
            <WorkflowSection />
            <TechStackSection />
            <TestimonialsSection />
        </main>
    );
};

export default Home;
