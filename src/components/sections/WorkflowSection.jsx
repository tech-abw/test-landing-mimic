/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



const WorkflowSection = () => {
    const { t } = useTranslation();

    const workflowSteps = [
        {
            id: "1",
            title: t("workflow_step_1_title_v2"),
            description: t("workflow_step_1_description_v2"),
            bgColor: "bg-custom",
            textColor: "text-white",
            image: "/images/workflow/image1.svg",
            imageSize: { width: "150px", height: "150px" },
        },
        {
            id: "2",
            title: t("workflow_step_2_title_v2"),
            description: t("workflow_step_2_description_v2"),
            bgColor: "bg-black",
            textColor: "text-white",
            image: "/images/workflow/setup2.svg",
            imageSize: { width: "80px", height: "80px" },
        },
        {
            id: "3",
            title: t("workflow_step_3_title_v2"),
            description: t("workflow_step_3_description_v2"),
            bgColor: "bg-gray",
            textColor: "text-black",
            image: "/images/workflow/meetings.svg",
            imageSize: { width: "120px", height: "120px" },
        },
        {
            id: "4",
            title: t("workflow_step_4_title_v2"),
            description: t("workflow_step_4_description_v2"),
            bgColor: "bg-neon-green",
            textColor: "text-black",
            image: "/images/workflow/delivery.svg",
            imageSize: { width: "120px", height: "120px" },
        },
    ];

    return (
        <section className="w-full bg-white py-10 lg:py-24 relative">
            {/* Línea vertical superior */}
            <motion.div
                className="relative hidden lg:block"
                style={{
                    left: "50%",
                    width: "1px",
                    marginTop: "0px",
                    marginBottom: "40px",
                    height: "100px",
                    backgroundColor: "#000",
                    transform: "translateX(-50%)",
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            ></motion.div>

            <div className="w-[95%] mx-auto">
                <div className="text-center mb-12">
                    <motion.h2 
                        className="lg:mb-10 mb-5 text-3xl font-medium leading-none md:text-4xl lg:text-[65px] lg:leading-[65px] lg:font-normal"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <span
                            className="hidden lg:inline"
                            dangerouslySetInnerHTML={{ __html: t("workflow_title_html_v2") }}
                        >
                        </span>
                        <span className="lg:hidden">
                            {t("workflow_title_plain_v2")}
                        </span>
                    </motion.h2>
                    <motion.p 
                        className="text-center mx-auto text-[18px] font-light leading-[18px] max-w-[350px] lg:text-[25px] lg:font-medium lg:leading-[1.5] lg:max-w-[800px] "
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {t('workflow_subtitle_v2')}
                    </motion.p>
                </div>

                {/* Versión de escritorio - 4 columnas */}
                <div className="hidden lg:grid grid-cols-4 gap-8">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${step.bgColor} ${step.textColor}`}
                            style={{ borderRadius: "32px" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="flex justify-center items-center mb-4 mt-4"
                                style={{ height: "150px" }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                        width: step.imageSize.width,
                                        height: step.imageSize.height,
                                        objectFit: "contain",
                                    }}
                                />
                            </motion.div>

                            <motion.h3
                                className="text-2xl font-bold mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                {step.title}
                            </motion.h3>
                            <motion.p
                                style={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    lineHeight: 1.5,
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                {step.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                {/* Versión móvil - 1 columna */}
                <div className="lg:hidden grid grid-cols-1 gap-8 px-5">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${step.bgColor} ${step.textColor}`}
                            style={{
                                borderRadius: "32px",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{
                                duration: 0.5, 
                                delay: index * 0.1 
                            }}
                        >
                            <motion.div
                                className="flex justify-center items-center mb-4 mt-4"
                                style={{ height: "70px" }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.2 + index * 0.1 
                                }}
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                        width: `calc(${step.imageSize.width} * 0.7)`,
                                        height: `calc(${step.imageSize.height} * 0.7)`,
                                        objectFit: "contain",
                                    }}
                                />
                            </motion.div>

                            <motion.h3
                                className="font-bold mb-3"
                                style={{ fontSize: "23px" }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.3 + index * 0.1 
                                }}
                            >
                                {step.title}
                            </motion.h3>
                            <motion.p
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    lineHeight: 1.5,
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.4 + index * 0.1 
                                }}
                            >
                                {step.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Línea vertical inferior */}
            <motion.div
                className="relative hidden lg:block"
                style={{
                    top: "50px",
                    left: "50%",
                    width: "1px",
                    height: "100px",
                    marginTop: "40px",
                    marginBottom: "0px",
                    backgroundColor: "#000",
                    transform: "translateX(-50%)",
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            ></motion.div>
        </section>
    );
};

export default WorkflowSection;
