/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



const WorkflowSection = () => {
    const { t, i18n } = useTranslation();

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
                     {/* Botón WhatsApp */}
                     { i18n.language.startsWith("es") && (
  <motion.div
    className="flex justify-center mt-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <a 
      href="https://wa.me/528120268946?text=Hola%20quiero%20más%20información" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-black text-lime-400 px-4 py-2 rounded-md"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 256 256" 
          fill="currentColor" 
          className="w-6 h-6 text-lime-400"
        >
          <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"/>
        </svg>
        81 2026 8946
      </motion.button>
    </a>
  </motion.div>
    )}
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
