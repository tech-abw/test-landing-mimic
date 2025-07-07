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
        { name: "Astelaris", logo: "astelaris.png" },
        { name: "Aurea", logo: "aurea.png" },
        { name: "Cssis", logo: "cssis.png" },
        { name: "Ecompack", logo: "ecompack.png" },
        { name: "Gravity", logo: "gravity.png" },
        { name: "Insights to Behavior", logo: "insights-to-behavior.png" },
        { name: "Mita", logo: "mita.png" },
    ];
    const bottomRowClients = [
        { name: "Plancidad 100", logo: "plancidad100.png" },
        { name: "Santa Eugenia", logo: "santa-eugenia.png" },
        { name: "Silvesa", logo: "silvesa.png" },
        { name: "Think", logo: "think.png" },
        { name: "Ultima", logo: "ultima.png" },
        { name: "Vitaflow", logo: "vitaflow.png" },
        { name: "Zengure", logo: "zengure.png" },
    ];

    // Data for mobile view
    const mobileClients = [...topRowClients, ...bottomRowClients].sort(() => Math.random() - 0.5);
    const mobileColumn1 = mobileClients.slice(0, 5);
    const mobileColumn2 = mobileClients.slice(5, 10);
    const mobileColumn3 = mobileClients.slice(10, 14);

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
                    <div className="hidden lg:block mb-16">
                        <div className="marquee-container">
                            <div className="marquee-content">
                                {duplicatedTopClients.map((client, index) => (
                                    <img key={index} src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-12 mx-12" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="marquee-container marquee-reverse">
                            <div className="marquee-content">
                                {duplicatedBottomClients.map((client, index) => (
                                    <img key={index} src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-12 mx-12" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile columns */}
                    <div className="lg:hidden flex justify-between">
                        <motion.div className="flex flex-col items-center space-y-12" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
                            {mobileColumn1.map((client) => (
                                <img key={client.name} src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-10" />
                            ))}
                        </motion.div>
                        <motion.div className="flex flex-col items-center space-y-12" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
                            {mobileColumn2.map((client) => (
                                <img key={client.name} src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-10" />
                            ))}
                        </motion.div>
                        <motion.div className="flex flex-col items-center space-y-12" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
                            {mobileColumn3.map((client) => (
                                <img key={client.name} src={`${imgBasePath}${client.logo}`} alt={client.name} className="h-10" />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
