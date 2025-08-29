import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeadManager from "../components/sections/HeadTags";

const Portfolio = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const langFromPath = location.pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    if (i18n.language !== langFromPath) {
      i18n.changeLanguage(langFromPath);
    }
  }, [langFromPath, i18n]);

  const canonicalUrl = `https://www.mimic.agency${location.pathname}`;

  const portfolioItems = [
    { id: 1, image: "/images/portfolio/portfolio-1.webp", width: { desktop: 70, mobile: 100 }, link: "https://stiva.com" },
    { id: 2, image: "/images/portfolio/portfolio-2.webp", width: { desktop: 30, mobile: 100 }, link: "https://gildre.com" },
    { id: 3, image: "/images/portfolio/portfolio-3.webp", width: { desktop: 35, mobile: 100 }, link: "https://bymomento.com" },
    { id: 4, image: "/images/portfolio/portfolio-4.webp", width: { desktop: 65, mobile: 100 }, link: "https://agromod.com.mx" },
    { id: 5, image: "/images/portfolio/portfolio-5.webp", width: { desktop: 40, mobile: 100 }, link: "https://garzaduran.com" },
    { id: 6, image: "/images/portfolio/portfolio-6.webp", width: { desktop: 60, mobile: 100 }, link: "https://thinkws.mx" },
    { id: 7, image: "/images/portfolio/portfolio-7.webp", width: { desktop: 50, mobile: 100 }, link: "https://epesos.com" },
    { id: 8, image: "/images/portfolio/portfolio-8.webp", width: { desktop: 50, mobile: 100 }, link: "https://cordeliaruiz.com" },
    { id: 9, image: "/images/portfolio/portfolio-9.webp", width: { desktop: 45, mobile: 100 }, link: "https://plastidrum.com" },
    { id: 10, image: "/images/portfolio/portfolio-10.webp", width: { desktop: 55, mobile: 100 }, link: "https://innovalaw.com.mx" },
    { id: 11, image: "/images/portfolio/portfolio-11.webp", width: { desktop: 60, mobile: 100 }, link: "https://uruchurtuartstudio.com" },
    { id: 12, image: "/images/portfolio/portfolio-12.webp", width: { desktop: 40, mobile: 100 }, link: "https://strategyprofessional.biz" },
    { id: 13, image: "/images/portfolio/portfolio-13.webp", width: { desktop: 55, mobile: 100 }, link: "#" },
    { id: 14, image: "/images/portfolio/portfolio-14.webp", width: { desktop: 45, mobile: 100 }, link: "#" },
  ];

  return (
    <>
      <HeadManager
        lang={langFromPath}
        title={t("portfolio-seo.meta.title")}
        description={t("portfolio-seo.meta.description")}
        imageUrl="https://www.mimic.agency/images/PortfolioHero.png"
        canonicalUrl={canonicalUrl}
        hreflangs={[
          { lang: "es", href: "https://www.mimic.agency/es/portafolio" },
          { lang: "en", href: "https://www.mimic.agency/en/portfolio" },
          { lang: "x-default", href: "https://www.mimic.agency/es/portafolio" }
        ]}
      />

      <div className="bg-white text-black lg:mt-16 lg:mb-24">
        <div className="w-[95%] mx-auto px-4 py-16">
          <motion.h1
            className="text-3xl lg:text-5xl lg:w-[40%] mt-10 lg:flex-1 leading-[1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {t("portfolio.title1")}
            {t("portfolio.title2")}
            {t("portfolio.title3")}
          </motion.h1>

          <motion.h1
            className="text-2xl lg:text-4xl pb-1 border-b border-black/30 lg:flex-1 mt-16 mb-16 lg:mt-28 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {t("portfolio.subtitle")}
          </motion.h1>

          {/* Desktop Layout */}
          <div className="hidden lg:block space-y-8 lg:mb-24">
            {[0, 2, 4, 6, 8, 10, 12].map((startIndex, rowIndex) => (
              <div key={startIndex} className="flex gap-8 w-full">
                {[0, 1].map((offset) => {
                  const item = portfolioItems[startIndex + offset];
                  return (
                    <motion.a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overflow-hidden transition-all duration-300 hover:scale-105"
                      style={{
                        width: `${item.width.desktop}%`,
                        borderRadius: "20px",
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: rowIndex * 0.1 + 0.1,
                      }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <img
                        src={item.image}
                        alt={t("portfolio.itemAlt", { id: item.id })}
                        className="w-full h-full object-cover"
                      />
                    </motion.a>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {portfolioItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image}
                  alt={t("portfolio.itemAlt", { id: item.id })}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;