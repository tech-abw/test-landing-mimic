/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
    const { t } = useTranslation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: t('testimonial_1_name'),
            text: t('testimonial_1_text'),
        },
        {
            name: t('testimonial_2_name'),
            text: t('testimonial_2_text'),
        },
        {
            name: t('testimonial_3_name'),
            text: t('testimonial_3_text'),
        },
    ];

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full bg-white py-10 lg:mb-24 lg:py-10 relative">
            <div className="w-[95%] h-full mx-auto px-4">
                {/* Layout para móvil */}
                <div className="block lg:hidden ">
                    <motion.h2 
                        className="text-black mb-8 md:text-4xl text-3xl leading-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t("testimonials_title_part1")}
                        <br />
                        {t("testimonials_title_part2")}
                    </motion.h2>
                    <motion.p
                        className="text-black mb-8"
                        style={{
                            fontSize: "18px",
                            fontWeight: 400,
                            maxWidth: "300px",
                            lineHeight: "18px",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {t("testimonials_description")}
                    </motion.p>

                    <div className="max-w-2xl mx-auto relative mt-16 lg:mt-0">
                        <motion.div
                            className="bg-white rounded-2xl p-8"
                            style={{
                                minHeight: "200px",
                                border: "1px solid #000",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            key={currentTestimonial}
                        >
                            <motion.p
                                className="mb-4"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    textAlign: "left",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {testimonials[currentTestimonial].text}
                            </motion.p>
                            <motion.p
                                className="font-bold text-start"
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "18px",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {testimonials[currentTestimonial].name}
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="flex justify-end mt-6 space-x-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <motion.button
                                onClick={handlePrev}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/images/izquierda.svg"
                                    alt="Flecha izquierda"
                                    className="w-full h-full"
                                />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/images/derecha.svg"
                                    alt="Flecha derecha"
                                    className="w-full h-full"
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Layout para escritorio */}
                <div
                    className="hidden lg:grid grid-cols-2 gap-16"
                    style={{
                        minHeight: "900px",
                    }}
                >
                    {/* Columna izquierda - Título y descripción */}
                    <div className="self-start pt-24">
                        <motion.h2
                            className="text-black mb-4"
                            style={{
                                fontSize: "73px",
                                fontWeight: 400,
                                lineHeight: "65px",
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            {t("testimonials_title_part1")}
                            <br />
                            {t("testimonials_title_part2")}
                        </motion.h2>
                        <motion.p
                            className="text-black mt-10"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            {t("testimonials_description")}
                        </motion.p>
                    </div>

                    {/* Columna derecha - Testimonios y navegación */}
                    <div className="self-end flex flex-col items-center">
                        <motion.div
                            className="bg-white p-8 text-center w-full flex flex-col justify-center"
                            style={{
                                borderRadius: "62px",
                                minHeight: "500px",
                                border: "1px solid #000",
                                marginBottom: "24px",
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            key={currentTestimonial}
                        >
                            <motion.p
                                className="mb-4"
                                style={{
                                    fontSize: "29px",
                                    fontWeight: 200,
                                    lineHeight: 1.5,
                                    textAlign: "left",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {testimonials[currentTestimonial].text}
                            </motion.p>
                            <motion.p
                                className="font-bold text-start mt-12"
                                style={{
                                    fontSize: "25px",
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {testimonials[currentTestimonial].name}
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="flex space-x-4 self-end mr-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <motion.button
                                onClick={handlePrev}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "59.33px",
                                    height: "59.33px",
                                    borderRadius: "12px",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/images/izquierda.svg"
                                    alt="Flecha izquierda"
                                    className="w-[35px] h-[35px]"
                                />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "59.33px",
                                    height: "59.33px",
                                    borderRadius: "12px",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src="/images/derecha.svg"
                                    alt="Flecha derecha"
                                    className="w-[35px] h-[35px]"
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
