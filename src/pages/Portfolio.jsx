/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();
    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            width: { desktop: 70, mobile: 100 },
            link: "https://stiva.com",
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-2.png",
            width: { desktop: 30, mobile: 100 },
            link: "https://gildre.com",
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-3.png",
            width: { desktop: 35, mobile: 100 },
            link: "https://bymomento.com",
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-4.png",
            width: { desktop: 65, mobile: 100 },
            link: "https://agromod.com.mx",
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-5.png",
            width: { desktop: 40, mobile: 100 },
            link: "https://garzaduran.com",
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-6.png",
            width: { desktop: 60, mobile: 100 },
            link: "https://thinkws.mx",
        },
        {
            id: 7,
            image: "/images/portfolio/portfolio-7.png",
            width: { desktop: 50, mobile: 100 },
            link: "https://epesos.com",
        },
        {
            id: 8,
            image: "/images/portfolio/portfolio-8.png",
            width: { desktop: 50, mobile: 100 },
            link: "https://cordeliaruiz.com",
        },
        {
            id: 9,
            image: "/images/portfolio/portfolio-9.png",
            width: { desktop: 45, mobile: 100 },
            link: "https://plastidrum.com",
        },
        {
            id: 10,
            image: "/images/portfolio/portfolio-10.png",
            width: { desktop: 55, mobile: 100 },
            link: "https://innovalaw.com.mx",
        },
        {
            id: 11,
            image: "/images/portfolio/portfolio-11.png",
            width: { desktop: 60, mobile: 100 },
            link: "https://uruchurtuartstudio.com",
        },
        {
            id: 12,
            image: "/images/portfolio/portfolio-12.png",
            width: { desktop: 40, mobile: 100 },
            link: "https://strategyprofessional.biz",
        },
        {
            id: 13,
            image: "/images/portfolio/portfolio-13.png",
            width: { desktop: 55, mobile: 100 },
            link: "#",
        },
        {
            id: 14,
            image: "/images/portfolio/portfolio-14.png",
            width: { desktop: 45, mobile: 100 },
            link: "#",
        },
    ];

    return (
        <div className="bg-white text-black lg:mt-16 lg:mb-24">
            <SEO
                title={t("portfolio.seo.title")}
                description={t("portfolio.seo.description")}
            />
            <div className="w-[95%] mx-auto px-4 py-16">
                <motion.h1
                    className="text-3xl lg:text-5xl  lg:w-[35%] mt-10 lg:flex-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    {t("portfolio.title")}
                </motion.h1>

                <motion.h1
                    className="text-2xl lg:text-4xl pb-1 border-b border-black/30 lg:flex-1 mt-16 mb-16 lg:mt-28 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {t("portfolio.subtitle")}
                </motion.h1>

                {/* Desktop Layout */}
                <div className="hidden lg:block space-y-8 lg:mb-24">
                    {[0, 2, 4, 6, 8, 10, 12].map((startIndex, rowIndex) => (
                        <div key={startIndex} className="flex gap-8 w-full">
                            <motion.a
                                href={portfolioItems[startIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overflow-hidden transition-all duration-300 hover:scale-105"
                                style={{
                                    width: `${portfolioItems[startIndex].width.desktop}%`,
                                    borderRadius: "20px",
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: rowIndex * 0.1,
                                }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <img
                                    src={portfolioItems[startIndex].image}
                                    alt={t("portfolio.itemAlt", {
                                        id: startIndex + 1,
                                    })}
                                    className="w-full h-full object-cover"
                                />
                            </motion.a>
                            <motion.a
                                href={portfolioItems[startIndex + 1].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overflow-hidden transition-all duration-300 hover:scale-105"
                                style={{
                                    width: `${
                                        portfolioItems[startIndex + 1].width
                                            .desktop
                                    }%`,
                                    borderRadius: "20px",
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: rowIndex * 0.1 + 0.1,
                                }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <img
                                    src={portfolioItems[startIndex + 1].image}
                                    alt={t("portfolio.itemAlt", {
                                        id: startIndex + 2,
                                    })}
                                    className="w-full h-full object-cover"
                                />
                            </motion.a>
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
    );
};

export default Portfolio;
