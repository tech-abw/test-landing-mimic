/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import "./ClientsSection.css";

const ClientsSection = () => {
    const { t } = useTranslation();
    const imgBasePath = "/images/clients/";

    // Define client data
    const duplicationFactor = 30;
    const topRowClients = [
        { name: "Astelaris", logo: "astelaris.png", heightMobile: "h-10", heightDesktop: "sm:h-12" },
        { name: "Aurea", logo: "aurea.png", heightMobile: "h-12", heightDesktop: "sm:h-10" },
        { name: "Cssis", logo: "cssis.png", heightMobile: "h-9", heightDesktop: "sm:h-10" },
        { name: "Ecompack", logo: "ecompack.png", heightMobile: "h-10", heightDesktop: "sm:h-18" },
        { name: "Gravity", logo: "gravity.png", heightMobile: "h-12", heightDesktop: "sm:h-10" },
        { name: "Insights to Behavior", logo: "insights-to-behavior.png", heightMobile: "h-8", heightDesktop: "sm:h-10" },
        { name: "Mita", logo: "mita.png", heightMobile: "h-12", heightDesktop: "sm:h-14" },
      ];
      
    const bottomRowClients = [
        { name: "Plancidad 100", logo: "plancidad100.png", heightMobile: "h-12", heightDesktop: "sm:h-12" },
        { name: "Santa Eugenia", logo: "santa-eugenia.png", heightMobile: "h-12", heightDesktop: "sm:h-16" },
        { name: "Silvesa", logo: "silvesa.png", heightMobile: "h-12", heightDesktop: "sm:h-12" },
        { name: "Think", logo: "think.png", heightMobile: "h-12", heightDesktop: "sm:h-12" },
        { name: "Ultima", logo: "ultima.png", heightMobile: "h-12", heightDesktop: "sm:h-12" },
        { name: "Vitaflow", logo: "vitaflow.png", heightMobile: "h-8", heightDesktop: "sm:h-8" },
        { name: "Zengure", logo: "zengure.png", heightMobile: "h-12", heightDesktop: "sm:h-12" },
    ];

    // Data for mobile view
    const mobileClients = [...topRowClients, ...bottomRowClients].sort(() => Math.random() - 0.5).slice(0, 6);

    // Duplicate arrays for seamless marquee effect
    const duplicateArray = (arr, times) => Array(times).fill(arr).flat();
    const duplicatedTopClients = duplicateArray(topRowClients, duplicationFactor);
    const duplicatedBottomClients = duplicateArray(bottomRowClients, duplicationFactor);

    return (
        <section className="w-full bg-gray py-10 md:py-24">
            <div className="w-[95%] mx-auto px-4">
                <motion.h2
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <span
                        className="hidden lg:inline"
                        style={{ fontSize: "65px", fontWeight: 400, lineHeight: "65px" }}
                        dangerouslySetInnerHTML={{ __html: t("clients_title_html") }}
                    ></span>
                    <span className="lg:hidden md:text-4xl text-3xl font-medium leading-none">
                        {t("clients_title_plain")}
                    </span>
                </motion.h2>

                <div className="relative">
                    {/* Desktop marquee rows */}
                    <div className="block mb-16">
                        <div className="marquee-container marquee-top">
                        <div className="marquee-content">
                        {duplicatedTopClients.map((client, index) => (
                            <img
                              key={index}
                              src={`${imgBasePath}${client.logo}`}
                              alt={client.name}
                              className={`${client.heightMobile} ${client.heightDesktop} mx-6`}
                            />
                        ))}
                        </div>
                        </div>
                    </div>
                    <div className="block mb-16">
                        <div className="marquee-container marquee-reverse">
                            <div className="marquee-content">
                            {duplicatedBottomClients.map((client, index) => (
                                <img
                                    key={index}
                                    src={`${imgBasePath}${client.logo}`}
                                    alt={client.name}
                                    className={`${client.heightMobile} ${client.heightDesktop} mx-6`}
                                />
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile grid */}
                   {/*<div className="lg:hidden flex flex-wrap justify-center items-center gap-y-10 gap-x-4">
                        {mobileClients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                className="w-1/4 flex justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <img src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-8" />
                            </motion.div>
                        ))}
                    </div>*/}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
