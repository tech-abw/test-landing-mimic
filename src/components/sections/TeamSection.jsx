/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: "Iván de la Garza",
            image: "/images/about/Ivan.webp",
            description: t("team_role_cro"),
        },
        {
            name: "Karen Quintana.",
            image: "/images/about/dummy-team.webp",
            description: t("team_role_coo"),
        },
        {
            name: "Gabriel M.",
            image: "/images/about/dummy-team.webp",
            description: t("team_role_fullstack"),
        },
        {
            name: "Felipe C.",
            image: "/images/about/dummy-team.webp",
            description: t("team_role_fullstack"),
        },
        
        {
            name: "Sasha Solano",
            image: "/images/about/Sasha.webp",
            description: t("team_role_frontend"),
        },
        {
            name: "Mariana Vega",
            image: "/images/about/Mariana.webp",
            description: t("team_role_ux_ui"),
        },
        {
            name: "Montse A.",
            image: "/images/about/Montse.webp",
            description: t("team_role_graphic_designer"),
        },
        {
            name: "Jennifer Ruiz",
            image: "/images/about/Jennifer.webp",
            description: t("team_role_marketing"),
        },
        {
            name: "Amanda Aguirre",
            image: "/images/about/Amanda.webp",
            description: t("team_role_marketing"),
        },
        {
            name: "Enrique P.",
            image: "/images/about/dummy-team.webp",
            description: t("team_role_strategic_partnerships"),
        },
    ];
    return (
        <section className="bg-gray py-2 lg:py-16 px-4">
            <div className="w-[90%] mx-auto">
                {/* Sección de título y descripción - Versión de escritorio */}
                <div className="hidden lg:grid grid-cols-1 gap-4 items-center mb-32">
                    <div className="w-full flex items-center justify-between text-center lg:text-left">
                        <motion.h2
                            style={{
                                fontSize: "65px",
                                fontWeight: 200,
                                lineHeight: "65px",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            {t('team_title_part1')}
                            <br />
                            {t('team_title_part2')}
                        </motion.h2>
                        <motion.span
                            className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    self-start
                                    font-medium
                                `}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            +5
                        </motion.span>
                    </div>
                    <div className="flex justify-between items-center lg:items-center">
                        <motion.p
                            className="text-gray-600"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                                lineHeight: "25px",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
{t('team_description')}
                        </motion.p>
                        <motion.span
                            style={{
                                fontSize: "20px",
                                fontWeight: 200,
                                marginTop: "2px",
                                marginRight: "2%",
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            {t('team_years')}
                        </motion.span>
                    </div>
                </div>

                {/* Sección de título y descripción - Versión móvil */}
                <div className="block lg:hidden text-center mb-10">
                    <motion.h2 
                        className="md:text-3xl text-3xl font-medium mb-5 leading-none mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('team_title_part1')}
                        <br />
                        {t('team_title_part2')}
                    </motion.h2>
                    <motion.p 
                        className="text-gray-600 mb-6 md:text-xl text-base"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
{t('team_description')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col items-center mb-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span
                            className={`
                                    text-[80px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                        >
                            +5
                        </span>
                        <span
                            style={{
                                fontSize: "15px",
                                fontWeight: 200,
                            }}
                        >
                            {t('team_years')}
                        </span>
                    </motion.div>
                </div>

                {/* Grid de miembros del equipo */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center lg:w-[250px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.1 + (index % 4) * 0.1
                            }}
                        >
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full rounded-lg mb-2 lg:mb-4 object-cover"
                                style={{ aspectRatio: "1/1" }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.h3 
                                className="font-bold text-base lg:text-3xl"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.7, 
                                    delay: 0.2 + (index % 4) * 0.1 
                                }}
                            >
                                {member.name}
                            </motion.h3>
                            <motion.p 
                                className="text-xs lg:text-xl font-medium text-gray-600"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.7, 
                                    delay: 0.3 + (index % 4) * 0.1 
                                }}
                            >
                                {member.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de estadísticas */}
                <div className="w-full mb-8 flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 lg:mt-12">
                    {/* Proyectos */}
                    <motion.div 
                        className="flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div
                            className="lg:flex flex-row"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <motion.span
                                className={`
                                    text-[80px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.8 }}
                            >
                                +100
                            </motion.span>
                        </div>
                        <motion.span
                            className="text-gray-600 lg:ml-[30%]"
                            style={{
                                fontSize: "20px",
                                fontWeight: 300,
                                lineHeight: "20px",
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {t('team_projects')}
                        </motion.span>
                    </motion.div>

                    {/* Clientes */}
                    <motion.div 
                        className="flex flex-col items-center lg:items-end"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div
                            className="lg:flex flex-row"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <motion.span
                                className={`
                                    text-[80px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.8 }}
                            >
                                +85
                            </motion.span>
                        </div>
                        <motion.span
                            className="text-gray-600 self-center lg:mr-[8%]"
                            style={{
                                fontSize: "20px",
                                fontWeight: 300,
                                lineHeight: "20px",
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {t('team_clients')}
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
