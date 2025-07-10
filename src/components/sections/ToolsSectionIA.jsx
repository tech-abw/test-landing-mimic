/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ToolsSectionAI = () => {
    const { t } = useTranslation();

    const toolsAI = [
        {
            name: t("AI_chats"),
            image: "",
            description: t("AI_chats_description"),
        },
        {
            name: t("AI_automations"),
            image: "",
            description: t("AI_automations_description"),
        },
        {
            name: t("AI_agents"),
            image: "AI agents",
            description: t("AI_agents_description"),
        },
        
    ];
    return (
        <section className="bg-gray py-2 lg:py-16 px-4">
            <div className="w-[90%] mx-auto">
                {/* Grid de miembros del equipo */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                    {toolsAI.map((tool, index) => (
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
                                src={tool.image}
                                alt={tool.name}
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
                                {tool.name}
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
                                {tool.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSectionAI;
