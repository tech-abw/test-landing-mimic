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
            icon: "/images/websiteEcommerce/wordpress_i.png",
        },
        {
            name: t("Framer", "Framer"),
            description: t("Framer_description", ""),
            icon: "/images/websiteEcommerce/framer_i.png",

        },
        {
            name: t("Webflow", "Webflow"),
            description: t("Webflow_description", ""),
            icon: "/images/websiteEcommerce/webflow_i.png",
        },
        {
            name: t("Squarespace", "Squarespace"),
            description: t("Squarespace_description", ""),
            icon: "/images/websiteEcommerce/square_i.png",
        },
        {
            name: t("Shopify", "Shopify"),
            description: t("Shopify_description", ""),
            icon: "/images/websiteEcommerce/shopify_i.png",
        },
        {
            name: t("Tailored project", "Tailored project"),
            description: t("Tailored_project_description", ""),
            icon: "/images/websiteEcommerce/start.png",
        },
    
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionWE;
