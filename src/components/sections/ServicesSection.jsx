/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const services = [
        {
            title: t("services_ux_ui_title"),
            description: t("services_ux_ui_description"),
            image: "/images/services/ux-ui-design.png",
            bgColor: "bg-neon-green",
            textColor: "text-black",
            hasImage: true,
            url: `/${lang}/${t("routes.ux-ui-designs")}`,
        },
        {
            title: t("services_website_ecommerce_title"),
            description: t("services_website_ecommerce_description"),
            bgColor: "bg-grays",
            textColor: "text-black",
            hasImage: false,
            url: `/${lang}/${t("routes.website-ecommerce-solutions")}`,
        },
        {
            title: t("services_ai_solutions_title"),
            description: t("services_ai_solutions_description"),
            bgColor: "bg-white",
            textColor: "text-black",
            hasImage: false,
            url: `/${lang}/${t("routes.ai-solutions")}`,
        },
        {
            title: t("services_tailored_solutions_title"),
            description: t("services_tailored_solutions_description"),
            bgColor: "bg-black",
            textColor: "text-white",
            hasImage: false,
            url: `/${lang}/${t("routes.tailored-solutions")}`,
        },
        {
            title: t("services_consulting_title"),
            description: t("services_consulting_description"),
            bgColor: "bg-neon-green",
            textColor: "text-black",
            hasImage: false,
            url: `/${lang}/${t("routes.consulting")}`,
        },
    ];

    return (
        <section className="w-full bg-gray py-16 px-4">
            <div className="w-[95%] mx-auto">
                {/* Título principal - Versión de escritorio */}
                <div className="hidden lg:block  lg:text-start mb-36">
                    <motion.p
                        className="text-black mb-4"
                        style={{
                            fontSize: "65px",
                            fontWeight: 200,
                            lineHeight: "65px",
                            maxWidth: "850px",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('about_hero_section_discover_services')}
                    </motion.p>
                </div>

                {/* Título principal - Versión móvil */}
                <div className="block lg:hidden text-center mb-8">
                    <motion.p
                        className="text-black mb-14"
                        style={{
                            fontSize: "30px",
                            fontWeight: 300,
                            lineHeight: "30px",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('about_hero_section_discover_services')}
                    </motion.p>
                </div>

                {/* Grid de servicios - Versión de escritorio (2 arriba, 3 abajo) */}
                <div className="hidden lg:block">
                    {/* Primera fila: 2 tarjetas */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <Link to={services[0].url} className="block">
                            <motion.div
                                className={`${services[0].bgColor} ${services[0].textColor} rounded-2xl p-12 flex flex-col`}
                                style={{ height: "600px" }}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div>
                                    <motion.h3
                                        className="mb-10"
                                        style={{
                                            fontSize: "50px",
                                            fontWeight: 200,
                                            lineHeight: "65px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {services[0].title}
                                    </motion.h3>
                                    <motion.p
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: 300,
                                            lineHeight: "30px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        {services[0].description}
                                    </motion.p>
                                </div>
                                <motion.div
                                    className="flex justify-center mt-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <img
                                        src={services[0].image}
                                        alt={services[0].title}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </motion.div>
                            </motion.div>
                        </Link>

                        {/* Card 2 */}
                        <Link to={services[1].url} className="block">
                            <motion.div
                                className={`${services[1].bgColor} ${services[1].textColor} p-12 rounded-2xl flex flex-col`}
                                style={{ height: "600px" }}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                            >
                                <div>
                                    <motion.h3
                                        className="mb-16"
                                        style={{
                                            fontSize: "50px",
                                            fontWeight: 200,
                                            lineHeight: "65px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {services[1].title}
                                    </motion.h3>
                                    <motion.p
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: 300,
                                            lineHeight: "30px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        {services[1].description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Segunda fila: 3 tarjetas */}
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        {services.slice(2).map((service, index) => (
                            <Link to={service.url} key={index} className="block">
                                <motion.div
                                    className={`${service.bgColor} ${service.textColor} p-12 rounded-2xl flex flex-col`}
                                    style={{ height: "550px" }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div>
                                        <motion.h3
                                            className="mb-16 lg:mt-12"
                                            style={{
                                                fontSize: "50px",
                                                fontWeight: 200,
                                                lineHeight: "65px",
                                            }}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ margin: "-50px" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.2 + index * 0.1,
                                            }}
                                        >
                                            {service.title}
                                        </motion.h3>
                                        <motion.p
                                            style={{
                                                fontSize: "30px",
                                                fontWeight: 300,
                                                lineHeight: "30px",
                                            }}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ margin: "-50px" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.3 + index * 0.1,
                                            }}
                                        >
                                            {service.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Grid de servicios - Versión móvil (stack) */}
                <div className="block lg:hidden space-y-6">
                    {services.map((service, index) => (
                        <Link to={service.url} key={index} className="block">
                            <motion.div
                                className={`${service.bgColor} ${
                                    service.textColor
                                } p-6 rounded-2xl ${
                                    service.hasImage ? "text-center" : ""
                                }`}
                                style={{ height: "300px" }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.h3
                                    className="mb-7"
                                    style={{ fontSize: "35px", lineHeight: "35px" }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 + index * 0.1,
                                    }}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    className="text-base mb-5"
                                    style={{ fontSize: "18px", fontWeight: 300 }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.1,
                                    }}
                                >
                                    {service.description}
                                </motion.p>
                                {service.hasImage && (
                                    <motion.div
                                        className="flex justify-center mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.1,
                                        }}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="max-w-[250px] max-h-[250px] object-contain"
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
