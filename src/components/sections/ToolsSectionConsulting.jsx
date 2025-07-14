/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import ReusableToolsSection from "../common/ReusableToolsSection";

const ToolsSectionConsulting = () => {
    const { t } = useTranslation();

    const tools = [
        {
            name: t("Concept_creation", "Concept creation"),
            description: t("Concept_creation_description", "Shape innovative ideas into clear, validated, and strategic product visions."),
            icon: "/images/Consulting/ConceptCreation.png",
        },
        {
            name: t("UX_UI", "UX-UI"),
            description: t("UX_UI_description", "Design intuitive, engaging digital interfaces focused on user experience success."),
            icon: "/images/Consulting/UX-UI.png",

        },
        {
            name: t("Product_management", "Product management"),
            description: t("Product_management_description", "Align teams, roadmap, and priorities to deliver valuable, market-ready products."),
            icon: "/images/Consulting/ProductManagement.png",
        },
        {
            name: t("Team_building", "Team building"),
            description: t("Team_building_description", "Assemble high-performing teams tailored to your tech and growth goals."),
            icon: "/images/Consulting/Teambuilding.png",
        },
        {
            name: t("Budget_optimization", "Budget optimization"),
            description: t("Budget_optimization_description", "Maximize impact by aligning resources, tools, and team with efficiency."),
            icon: "/images/Consulting/Budget-optimization.png",
        },
        {
            name: t("Go_To_Market", "Go To Market"),
            description: t("Go_To_Market_description", "Launch effectively with strategy, messaging, positioning, and early traction planning."),
            icon: "/images/Consulting/Go-To-Market.png",
        },
    ];

    return <ReusableToolsSection tools={tools} />;
};

export default ToolsSectionConsulting;
