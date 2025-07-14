/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ReusableToolsSection from "../common/ReusableToolsSection";

const ToolsSectionUxUi = () => {
    const { t } = useTranslation();

    const tools = [
        {
            name: t("UX_Research", "UX Research"),
            description: t("UX_Research_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",
        },
        {
            name: t("UI_Kit", "UI Kit"),
            description: t("UI_Kit_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",

        },
        {
            name: t("Special_projects", "Special projects"),
            description: t("Special_projects_description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
            icon: "/images/IA/test.png",
        },
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionUxUi;
