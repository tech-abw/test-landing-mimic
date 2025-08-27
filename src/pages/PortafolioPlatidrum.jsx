/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import PotafolioPlastiSlider from "../components/sections/PotafolioPlastiSlider";
import PortfolioSectionPlasti from "../components/sections/PortfolioSectionPlasti";

const PortfolioPlatidrum = () => {
    const { t } = useTranslation();
    

    return (
        <div className="bg-white text-black lg:mt-8 lg:mb-16">
    <SEO
        title={t("portfolio-platidrum.seo.title")}
        description={t("portfolio-platidrum.seo.description")}
    />
    <div className="w-[95%] mx-auto">
        <motion.h1
            className="text-3xl lg:text-5xl lg:w-[35%] mt-24 lg:mt-20 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.title")}
        </motion.h1>

        <motion.h2
            className="text-2xl lg:text-3xl pb-4 border-b border-black/30 mt-10 mb-5 lg:mt-16 lg:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.subtitle")}
        </motion.h2>

        <motion.p
            className="text-base lg:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.text1")}
            <br></br>
            <br></br>
            {t("portfolio-platidrum.text2")}
            <br></br>
            <br></br>
            {t("portfolio-platidrum.text3")}
            <br></br>
            <br></br>
            {t("portfolio-platidrum.text4")}
            <br></br>
            <br></br>
            {t("portfolio-platidrum.text5")}
        </motion.p>
        <PortfolioSectionPlasti />
        <motion.h2
            className="text-lg lg:text-xl pb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.disclaimer-title")}
        </motion.h2>
        <motion.p
            className="text-base lg:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.disclaimer-text")}
        </motion.p>
        <motion.h2
            className="text-2xl lg:text-4xl border-b border-black/30 mt-10 mb-5 lg:mt-16 lg:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-platidrum.otros-proyectos")}
        </motion.h2>
        <PotafolioPlastiSlider/>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-8 lg:mb-0">
            {[0, 2, 4, 6, 8, 10, 12].map((startIndex, rowIndex) => (
                <div key={startIndex} className="flex gap-8 w-full">
                    {/* contenido */}
                </div>
            ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
            {/* contenido */}
        </div>
    </div>
</div>
    );
};

export default PortfolioPlatidrum;
