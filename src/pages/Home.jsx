import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import StructuredData from "../components/sections/StructuredData";

const Home = () => {
    const { t } = useTranslation();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mimic.agency/buscar?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };    
    return (
        <main>
        <StructuredData data={jsonLd} />
            <SEO 
                title={t('hero_title')}
                description={t('hero_description')}
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
