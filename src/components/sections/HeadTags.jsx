import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/*import {
  getHomeSchema,
  getServicesSchema,
  getAboutSchema,
  getPortfolioSchema,
  getUxUiSchema,
  getWebEcommerceSchema,
  getAiSolutionsSchema,
  getTailoredSolutionsSchema,
  getConsultingSchema,
} from "./StructuredData";
*/
const HeadManager = ({ lang, title, description, imageUrl }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const canonicalUrl = `https://mimic.agency${pathname}`;

  // 🔁 Mapeo dinámico de rutas localizadas
  const getHreflangs = (path) => {
    const routeMap = {
      "/es": { es: "/es", en: "/en" },
      "/es/servicios": { es: "/es/servicios", en: "/en/services" },
      "/es/nosotros": { es: "/es/nosotros", en: "/en/about" },
      "/es/portafolio": { es: "/es/portafolio", en: "/en/portfolio" },
      "/es/disenos-ux-ui": { es: "/es/disenos-ux-ui", en: "/en/ux-ui-designs" },
      "/es/soluciones-web-ecommerce": { es: "/es/soluciones-web-ecommerce", en: "/en/website-ecommerce-solutions" },
      "/es/soluciones-ia": { es: "/es/soluciones-ia", en: "/en/ai-solutions" },
      "/es/soluciones-a-medida": { es: "/es/soluciones-a-medida", en: "/en/tailored-solutions" },
      "/es/consultoria": { es: "/es/consultoria", en: "/en/consulting" },
      "/en": { es: "/es", en: "/en" },
      "/en/services": { es: "/es/servicios", en: "/en/services" },
      "/en/about": { es: "/es/nosotros", en: "/en/about" },
      "/en/portfolio": { es: "/es/portafolio", en: "/en/portfolio" },
      "/en/ux-ui-designs": { es: "/es/disenos-ux-ui", en: "/en/ux-ui-designs" },
      "/en/website-ecommerce-solutions": { es: "/es/soluciones-web-ecommerce", en: "/en/website-ecommerce-solutions" },
      "/en/ai-solutions": { es: "/es/soluciones-ia", en: "/en/ai-solutions" },
      "/en/tailored-solutions": { es: "/es/soluciones-a-medida", en: "/en/tailored-solutions" },
      "/en/consulting": { es: "/es/consultoria", en: "/en/consulting" },
    };

    const localized = routeMap[path];
    if (!localized) return [];

    return [
      { lang: "es", href: `https://www.mimic.agency${localized.es}` },
      { lang: "en", href: `https://www.mimic.agency${localized.en}` },
      { lang: "x-default", href: `https://www.mimic.agency${localized.es}` }
    ];
  };

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

    // 🔗 Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 🌐 hreflangs dinámicos
    const hreflangs = getHreflangs(pathname);
    hreflangs.forEach(({ lang, href }) => {
      const existing = document.querySelector(`link[hreflang="${lang}"]`);
      if (!existing) {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = lang;
        link.href = href;
        document.head.appendChild(link);
      } else {
        existing.href = href;
      }
    });

    // 📄 Structured Data (opcional)
    /*let schema = null;
    if (pathname === "/es" || pathname === "/en") schema = getHomeSchema(lang);
    else if (pathname.includes("/servicios") || pathname.includes("/services")) schema = getServicesSchema(lang);
    else if (pathname.includes("/nosotros") || pathname.includes("/about")) schema = getAboutSchema(lang);
    else if (pathname.includes("/portafolio") || pathname.includes("/portfolio")) schema = getPortfolioSchema(lang);
    else if (pathname.includes("/disenos-ux-ui") || pathname.includes("/ux-ui-designs")) schema = getUxUiSchema(lang);
    else if (pathname.includes("/soluciones-web-ecommerce") || pathname.includes("/website-ecommerce-solutions")) schema = getWebEcommerceSchema(lang);
    else if (pathname.includes("/soluciones-ia") || pathname.includes("/ai-solutions")) schema = getAiSolutionsSchema(lang);
    else if (pathname.includes("/soluciones-a-medida") || pathname.includes("/tailored-solutions")) schema = getTailoredSolutionsSchema(lang);
    else if (pathname.includes("/consultoria") || pathname.includes("/consulting")) schema = getConsultingSchema(lang);

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    */
  }, [lang, title, description, imageUrl, pathname]);

  return null;
};

export default HeadManager;