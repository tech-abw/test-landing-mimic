/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ReusableToolsSection from "../common/ReusableToolsSection";

const ToolsSectionAI = () => {
    const { t } = useTranslation();

    const tools = [
        {
            name: t("AI_chats", "AI chats"),
            description: t("AI_chats_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",
        },
        {
            name: t("AI_automations", "AI automations"),
            description: t("AI_automations_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",

        },
        {
            name: t("AI_agents", "AI agents"),
            description: t("AI_agents_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",
        },
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionAI;
