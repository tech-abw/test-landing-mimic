import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Mimic - Innovation starts with imitation</title>
                <meta name="description" content="We specialize in crafting bespoke digital solutions tailored to elevate your brand's online presence and engage your audience effectively. UX Ui Design, AI automations, No-Code and Low code development and Tailored solutions." />
                <meta property="og:title" content="Mimic - Innovation starts with imitation" />
                <meta property="og:description" content="We specialize in crafting bespoke digital solutions tailored to elevate your brand's online presence and engage your audience effectively. UX Ui Design, AI automations, No-Code and Low code development and Tailored solutions." />
                <meta property="twitter:title" content="Mimic - Innovation starts with imitation" />
                <meta property="twitter:description" content="We specialize in crafting bespoke digital solutions tailored to elevate your brand's online presence and engage your audience effectively. UX Ui Design, AI automations, No-Code and Low code development and Tailored solutions." />
            </Helmet>
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
