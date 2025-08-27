/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import PortfolioSectionStiva from "../components/sections/PortfolioSectionStiva";
import PotafolioStivaSlier from "../components/sections/PotafolioStivaSlier";

const PortfolioStiva = () => {
    const { t } = useTranslation();
    

    return (
        <div className="bg-white text-black lg:mt-8 lg:mb-16">
    <SEO
        title={t("portfolio-byMomento.seo.title")}
        description={t("portfolio-byMomento.seo.description")}
    />
    <div className="w-[95%] mx-auto">
        <motion.h1
            className="text-3xl lg:text-5xl lg:w-[35%] mt-24 lg:mt-20 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.title")}
        </motion.h1>

        <motion.h2
            className="text-2xl lg:text-3xl pb-4 border-b border-black/30 mt-10 mb-5 lg:mt-16 lg:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.subtitle")}
        </motion.h2>

        <motion.p
            className="text-base lg:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.text1")}
            <br></br>
            <br></br>
            {t("portfolio-byMomento.text2")}
            <br></br>
            <br></br>
            {t("portfolio-byMomento.text3")}
            <br></br>
            <br></br>
            {t("portfolio-byMomento.text4")}
            <br></br>
            <br></br>
            {t("portfolio-byMomento.text5")}
        </motion.p>
        <PortfolioSectionStiva />
        <motion.h2
            className="text-lg lg:text-xl pb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.disclaimer-title")}
        </motion.h2>
        <motion.p
            className="text-base lg:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.disclaimer-text")}
        </motion.p>
        <motion.h2
            className="text-2xl lg:text-4xl border-b border-black/30 mt-10 mb-5 lg:mt-16 lg:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
        >
            {t("portfolio-byMomento.otros-proyectos")}
        </motion.h2>
        <PotafolioStivaSlier/>

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

export default PortfolioStiva;
