/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ReusableToolsSection from "../common/ReusableToolsSection";

const ToolsSectionWE = () => {
    const { t } = useTranslation();

    const tools = [
        {
            name: t("Wordpress", "Wordpress"),
            description: t("Wordpress_description", ""),
            icon: "/images/WE/wordpress_i.png",
        },
        {
            name: t("Framer", "Framer"),
            description: t("Framer_description", ""),
            icon: "/images/WE/framer_i.png",

        },
        {
            name: t("Webflow", "Webflow"),
            description: t("Webflow_description", ""),
            icon: "/images/WE/webflow_i.png",
        },
        {
            name: t("Squarespace", "Squarespace"),
            description: t("Squarespace_description", ""),
            icon: "/images/WE/square_i.png",
        },
        {
            name: t("Shopify", "Shopify"),
            description: t("Shopify_description", ""),
            icon: "/images/WE/shopify_i.png",
        },
        {
            name: t("Tailored_solutions", "Tailored_solutions"),
            description: t("Tailored_solutions_description", ""),
            icon: "/images/WE/start.png",
        },
    
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionWE;
