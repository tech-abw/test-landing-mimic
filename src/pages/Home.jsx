import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <main>
            <SEO 
                title="Mimic - Innovation starts with imitation"
                description="We specialize in crafting bespoke digital solutions tailored to elevate your brand's online presence and engage your audience effectively. UX Ui Design, AI automations, No-Code and Low code development and Tailored solutions."
            />
            <Hero
                buttonText={t('start_here_button')}
                buttonLink="https://tally.so/r/wb6l9Z"
                mobileTitleFontSize="46px"
                mobileDescriptionFontSize="17px"
                desktopTitleFontSize="80px"
                desktopDescriptionFontSize="20px"
                mobileBackgroundImage="/images/Mobile_Pulpo.png"
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
