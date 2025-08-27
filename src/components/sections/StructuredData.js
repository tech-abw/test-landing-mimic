export const getOrganizationSchema = (lang) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mimic Agency",
  url: `https://mimic.agency/${lang}`,
  logo: "https://mimic.agency/images/logo.png",
  sameAs: [
    "https://www.instagram.com/mimic.agency",
    "https://www.linkedin.com/company/mimic-agency"
  ],
  description: lang === "es"
    ? "Soluciones digitales, desarrollo web, diseño UX/UI, e-commerce y automatización con IA."
    : "Digital solutions, web development, UX/UI design, e-commerce and AI automation."
});

export const getHomeSchema = (lang) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: lang === "es" ? "Inicio | Mimic Agency" : "Home | Mimic Agency",
  url: lang === "es" ? "https://mimic.agency/es" : "https://mimic.agency/en",
  inLanguage: lang,
  description: lang === "es"
    ? "Agencia digital especializada en diseño UX/UI, desarrollo web, IA y ecommerce."
    : "Digital agency specializing in UX/UI design, web development, AI, and ecommerce.",
  about: {
    "@type": "Organization",
    name: "Mimic Agency",
    url: "https://mimic.agency"
  }
});

export const getServicesSchema = (lang) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: lang === "es" ? "Servicios digitales" : "Digital Services",
  url: lang === "es"
    ? "https://mimic.agency/es/servicios"
    : "https://mimic.agency/en/services",
  inLanguage: lang,
  description: lang === "es"
    ? "Soluciones en diseño UX/UI, desarrollo web, IA y ecommerce."
    : "Solutions in UX/UI design, web development, AI, and ecommerce.",
  mainEntity: {
    "@type": "Service",
    name: lang === "es"
      ? "Servicios de diseño y desarrollo web"
      : "Web Design & Development Services",
    provider: {
      "@type": "Organization",
      name: "Mimic Agency",
      url: "https://mimic.agency"
    },
    areaServed: {
      "@type": "Place",
      name: lang === "es" ? "Latinoamérica y global" : "Latin America and global"
    },
    serviceType: [
      lang === "es" ? "Diseño UX/UI" : "UX/UI Design",
      lang === "es" ? "Desarrollo web" : "Web Development",
      lang === "es" ? "Automatización con IA" : "AI Automation",
      lang === "es" ? "Ecommerce" : "E-commerce"
    ]
  }
});
export const getAboutSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": isSpanish ? "Sobre nosotros | Mimic" : "About Us | Mimic",
    "url": isSpanish
      ? "https://mimic.agency/es/nosotros"
      : "https://mimic.agency/en/about",
    "inLanguage": lang,
    "description": isSpanish
      ? "Conoce al equipo detrás de Mimic. Creamos soluciones digitales que imitan lo mejor para innovar contigo."
      : "Meet the team behind Mimic. We craft digital solutions that imitate the best to innovate with you.",
    "about": {
      "@type": "Organization",
      "name": "Mimic Agency",
      "url": "https://mimic.agency",
      "logo": "https://mimic.agency/images/logo.png"
    }
  };
};
export const getPortfolioSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": isSpanish ? "Portafolio | Mimic" : "Portfolio | Mimic",
    "url": isSpanish
      ? "https://mimic.agency/es/portafolio"
      : "https://mimic.agency/en/portfolio",
    "inLanguage": lang,
    "description": isSpanish
      ? "Explora nuestros proyectos destacados en diseño UX/UI, desarrollo web, ecommerce e inteligencia artificial."
      : "Explore our featured projects in UX/UI design, web development, e-commerce, and artificial intelligence.",
    "about": {
      "@type": "Organization",
      "name": "Mimic Agency",
      "url": "https://mimic.agency",
      "logo": "https://mimic.agency/images/logo.png"
    }
  };
};
export const getUxUiSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isSpanish ? "Diseños UX/UI | Mimic" : "UX/UI Designs | Mimic",
    "url": isSpanish
      ? "https://mimic.agency/es/disenos-ux-ui"
      : "https://mimic.agency/en/ux-ui-designs",
    "inLanguage": lang,
    "description": isSpanish
      ? "Creamos interfaces intuitivas, accesibles y visualmente atractivas que mejoran la experiencia del usuario en cada dispositivo."
      : "We craft intuitive, accessible, and visually engaging interfaces that elevate user experience across all devices.",
    "mainEntity": {
      "@type": "Service",
      "name": isSpanish ? "Diseño UX/UI" : "UX/UI Design",
      "serviceType": isSpanish
        ? "Diseño de interfaces, experiencia de usuario, accesibilidad"
        : "Interface design, user experience, accessibility",
      "provider": {
        "@type": "Organization",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "logo": "https://mimic.agency/images/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": isSpanish ? "Latinoamérica y global" : "Latin America and global"
      }
    }
  };
};
export const getWebEcommerceSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isSpanish
      ? "Soluciones Web y de E-commerce | Mimic"
      : "Website & E-commerce Solutions | Mimic",
    "url": isSpanish
      ? "https://mimic.agency/es/soluciones-web-ecommerce"
      : "https://mimic.agency/en/website-ecommerce-solutions",
    "inLanguage": lang,
    "description": isSpanish
      ? "Creamos sitios web y tiendas en línea que combinan diseño, funcionalidad y escalabilidad para impulsar tu presencia digital."
      : "We build websites and online stores that blend design, functionality, and scalability to elevate your digital presence.",
    "mainEntity": {
      "@type": "Service",
      "name": isSpanish ? "Soluciones Web y de E-commerce" : "Website & E-commerce Solutions",
      "serviceType": isSpanish
        ? "Diseño web, desarrollo de e-commerce, personalización, escalabilidad"
        : "Web design, e-commerce development, customization, scalability",
      "provider": {
        "@type": "Organization",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "logo": "https://mimic.agency/images/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": isSpanish ? "Latinoamérica y global" : "Latin America and global"
      }
    }
  };
};
export const getAiSolutionsSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isSpanish
      ? "Soluciones de IA | Mimic"
      : "AI Solutions | Mimic",
    "url": isSpanish
      ? "https://www.mimic.agency/es/soluciones-ia"
      : "https://www.mimic.agency/en/ai-solutions",
    "inLanguage": lang,
    "description": isSpanish
      ? "Automatiza, optimiza y escala con soluciones de inteligencia artificial como chatbots, agentes autónomos y flujos de trabajo inteligentes."
      : "Automate, optimize, and scale with AI solutions like chatbots, autonomous agents, and intelligent workflows.",
    "mainEntity": {
      "@type": "Service",
      "name": isSpanish ? "Soluciones de Inteligencia Artificial" : "Artificial Intelligence Solutions",
      "serviceType": isSpanish
        ? "Chatbots, automatizaciones, agentes, flujos de trabajo"
        : "Chatbots, automations, agents, workflows",
      "provider": {
        "@type": "Organization",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "logo": "https://mimic.agency/images/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": isSpanish ? "Latinoamérica y global" : "Latin America and global"
      }
    }
  };
};
export const getTailoredSolutionsSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isSpanish
      ? "Soluciones a Medida | Mimic"
      : "Tailored Solutions | Mimic",
    "url": isSpanish
      ? "https://www.mimic.agency/es/soluciones-a-medida"
      : "https://www.mimic.agency/en/tailored-solutions",
    "inLanguage": lang,
    "description": isSpanish
      ? "Creamos soluciones de software personalizadas utilizando herramientas modernas que se adaptan a tus necesidades específicas."
      : "We craft tailored software solutions using modern tools that adapt to your specific needs.",
    "mainEntity": {
      "@type": "Service",
      "name": isSpanish ? "Soluciones a Medida" : "Tailored Software Solutions",
      "serviceType": isSpanish
        ? "Software personalizado, automatización, integración"
        : "Custom software, automation, integration",
      "provider": {
        "@type": "Organization",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "logo": "https://mimic.agency/images/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": isSpanish ? "Latinoamérica y global" : "Latin America and global"
      }
    }
  };
};
export const getConsultingSchema = (lang) => {
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isSpanish
      ? "Consultoría estratégica | Mimic"
      : "Strategic Consulting | Mimic",
    "url": isSpanish
      ? "https://www.mimic.agency/es/consulting"
      : "https://www.mimic.agency/en/consulting",
    "inLanguage": lang,
    "description": isSpanish
      ? "Actuamos como tu Fractional CTO para ayudarte a lanzar, escalar o transformar tu negocio digital con claridad, estrategia y ejecución."
      : "We serve as your Fractional CTO to help you launch, scale, or transform your digital business with clarity, strategy, and execution.",
    "mainEntity": {
      "@type": "Service",
      "name": isSpanish ? "Consultoría estratégica digital" : "Digital Strategic Consulting",
      "serviceType": isSpanish
        ? "Lanzamiento de producto, UX/UI, gestión de equipos, optimización de presupuesto"
        : "Product launch, UX/UI, team building, budget optimization",
      "provider": {
        "@type": "Organization",
        "name": "Mimic Agency",
        "url": "https://mimic.agency",
        "logo": "https://mimic.agency/images/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": isSpanish ? "Latinoamérica y global" : "Latin America and global"
      }
    }
  };
};