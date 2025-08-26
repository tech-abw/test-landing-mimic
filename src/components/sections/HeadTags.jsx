import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getOrganizationSchema,
  getHomeSchema,
  getServicesSchema,
  getAboutSchema,
  getPortfolioSchema,
  getUxUiSchema,
  getWebEcommerceSchema,
  getAiSolutionsSchema,
  getTailoredSolutionsSchema
} from "./StructuredData";

const HeadManager = ({ lang, title, description, imageUrl }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const canonicalUrl = `https://mimic.agency${pathname}`;

  const isHomePage = pathname === "/es" || pathname === "/en";
  const isServicesPage = pathname === "/es/servicios" || pathname === "/en/services";
  const isAboutPage = pathname === "/es/nosotros" || pathname === "/en/about";
  const isPortfolioPage = pathname === "/es/portafolio" || pathname === "/en/portfolio";
  const isUxUiPage = pathname === "/es/disenos-ux-ui" || pathname === "/en/ux-ui-designs";
  const isWebEcommercePage = pathname === "/es/soluciones-web-ecommerce" || pathname === "/en/website-ecommerce-solutions";
  const isAiSolutionsPage = pathname === "/es/soluciones-ia" || pathname === "/en/ai-solutions";
  const isTailoredSolutionsPage = pathname === "/es/soluciones-a-medida" || pathname === "/en/tailored-solutions";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const setProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const keywords = lang === "es"
      ? "soluciones digitales, desarrollo web, diseño UX/UI, inteligencia artificial, comercio electrónico, desarrollo sin código"
      : "digital solutions, web development, UX/UI design, AI solutions, e-commerce, no-code development";

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "Mimic Agency");

    setProperty("og:type", "website");
    setProperty("og:url", canonicalUrl);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", imageUrl);

    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:url", canonicalUrl);
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);
    setProperty("twitter:image", imageUrl);

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    const hreflangs = [
      {
        lang: "es",
        href: "https://mimic.agency/es/servicios"
      },
      {
        lang: "en",
        href: "https://mimic.agency/en/services"
      },
      {
        lang: "x-default",
        href: "https://mimic.agency/es/servicios"
      }
    ];

    hreflangs.forEach(({ lang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hrefLang = lang;
      link.href = href;
      document.head.appendChild(link);
    });

    const schemas = [getOrganizationSchema(lang)];

    if (isHomePage) {
      schemas.push(getHomeSchema(lang));
    }

    if (isServicesPage) {
      schemas.push(getServicesSchema(lang));
    }

    if (isAboutPage) {
      schemas.push(getAboutSchema(lang));
    }

    if (isPortfolioPage) {
      schemas.push(getPortfolioSchema(lang));
    }
    if (isUxUiPage) {
      schemas.push(getUxUiSchema(lang));
    }
    if (isWebEcommercePage) {
      schemas.push(getWebEcommerceSchema(lang));
    }
    if (isAiSolutionsPage) {
      schemas.push(getAiSolutionsSchema(lang));
    }
    if (isTailoredSolutionsPage) {
      schemas.push(getTailoredSolutionsSchema(lang));
    }

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll("script[type='application/ld+json']").forEach((s) => s.remove());
      document.querySelectorAll("link[rel='alternate']").forEach((l) => l.remove());
    };
  }, [lang, title, description, imageUrl, pathname]);

  return null;
};

export default HeadManager;