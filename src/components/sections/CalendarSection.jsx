/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CalendarSection = ({
    bgColor = "bg-black",
    textColor = "text-white",
}) => {
    const { t } = useTranslation();
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section
            className={`w-full ${bgColor} py-16 md:py-32 relative flex flex-col items-center justify-center min-h-[550px]`}
        >
            <motion.h2 
                className={`${textColor} text-3xl leading-none md:text-5xl text-center lg:mb-8 mb-16`}
                data-discover
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                {t('calendar_section_title')}
            </motion.h2>
            <motion.div
                className="calendly-inline-widget w-full max-w-[1200px] px-4"
                data-url="https://calendly.com/ivan-dlg/30min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2025-04"
                style={{
                    minWidth: "320px",
                    height: "700px",
                    width: "100%",
                    maxWidth: "1200px",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </section>
    );
};

export default CalendarSection;
