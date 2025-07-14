/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ReusableToolsSection from "../common/ReusableToolsSection";

const ToolsSectionAI = () => {
    const { t } = useTranslation();

    const tools = [
        {
            name: t("CRM", "CRM"),
            description: t("CRM_description", "Manage customer relationships, sales, and support in one streamlined platform."),
            icon: "/images/TS/crm.png",
        },
        {
            name: t("ERP", "ERP"),
            description: t("ERP_description", "Integrate business processes like finance, inventory, and operations seamlessly."),
            icon: "/images/TS/erp.png",

        },
        {
            name: t("Apps", "Apps"),
            description: t("Apps_description", "Custom web and mobile apps designed for performance and scale."),
            icon: "/images/TS/apps.png",
        },
        {
            name: t("Other tailored solutions", "Other tailored solutions"),
            description: t("Other tailored solutions_description", "Custom web and mobile apps designed for performance and scale."),
            icon: "/images/TS/start.png",
        },
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionAI;
