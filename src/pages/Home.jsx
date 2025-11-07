import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero";
import ClientsSection from "../components/sections/ClientsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WorkflowSection from "../components/sections/WorkflowSection";
import TechStackSection from "../components/sections/TechStackSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import HeadManager from "../components/sections/HeadTags";
import ServicesSection from "../components/sections/ServicesSection";

const Home = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  // Detecta idioma desde la ruta
  const langFromPath = location.pathname.startsWith("/en") ? "en" : "es";

  // Sincroniza idioma sin romper el render
  useEffect(() => {
    if (i18n.language !== langFromPath) {
      i18n.changeLanguage(langFromPath);
    }
  }, [langFromPath, i18n]);

  // Construye URL canónica desde la ruta actual
  const canonicalUrl = `https://www.mimic.agency${location.pathname}`;

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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mimic Agency",
    url: "https://www.mimic.agency",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.mimic.agency/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  const servicesSchema = [
    {
      "@type": "Service",
      name: "Diseño UX-UI",
      serviceType: "Diseño de interfaces y experiencia de usuario",
      provider: { "@type": "Organization", name: "Mimic Agency" },
      areaServed: "Latinoamérica"
    },
    {
      "@type": "Service",
      name: "Sitios Web y E-commerce",
      serviceType: "Desarrollo de sitios WordPress y tiendas online",
      provider: { "@type": "Organization", name: "Mimic Agency" },
      areaServed: "Latinoamérica"
    },
    {
      "@type": "Service",
      name: "Soluciones de IA",
      serviceType: "Integración de inteligencia artificial en procesos digitales",
      provider: { "@type": "Organization", name: "Mimic Agency" },
      areaServed: "Latinoamérica"
    },
    {
      "@type": "Service",
      name: "Soluciones a la medida",
      serviceType: "Desarrollo personalizado según necesidades del cliente",
      provider: { "@type": "Organization", name: "Mimic Agency" },
      areaServed: "Latinoamérica"
    }
  ];

  return (
    <>
      <HeadManager
        lang={langFromPath}
        title={t("home.meta.title")}
        description={t("home.meta.description")}
        imageUrl="https://www.mimic.agency/images/HERO-BANNER2.webp"
        canonicalUrl={canonicalUrl}
        hreflangs={[
          { lang: "es", href: "https://www.mimic.agency/es/" },
          { lang: "en", href: "https://www.mimic.agency/en/" },
          { lang: "x-default", href: "https://www.mimic.agency/es/" }
        ]}
      />
        {/* Datos estructurados: Organización */}
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>

  {/* Datos estructurados: WebSite */}
  <script type="application/ld+json">
    {JSON.stringify(websiteSchema)}
  </script>

  {/* Datos estructurados: Servicios */}
  {servicesSchema.map((service, index) => (
    <script key={index} type="application/ld+json">
      {JSON.stringify(service)}
    </script>
  ))}
      <Hero
        buttonText={t("start_here_button")}
        buttonLink="https://tally.so/r/wb6l9Z"
        mobileTitleFontSize="46px"
        mobileDescriptionFontSize="17px"
        desktopTitleFontSize="55px"
        desktopDescriptionFontSize="20px"
        mobileBackgroundImage="/images/banner-home-mobile.webp"
      />

      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <WorkflowSection  />
      <TechStackSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;