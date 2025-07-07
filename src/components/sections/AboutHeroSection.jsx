/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutHeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className="w-full bg-black py-16">
            <div className="w-[95%] mx-auto px-4">
                {/* Versión de escritorio */}
                <div
                    className="hidden lg:block bg-purple rounded-2xl p-8"
                    style={{ height: "700px" }}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-1/2 pr-8 flex flex-col justify-between h-full">
                            <div>
                                <motion.h2
                                    className="text-white mb-10"
                                    style={{
                                        fontSize: "65px",
                                        fontWeight: 400,
                                        lineHeight: 1.2,
                                    }}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                >
                                    {t('about_hero_section_title_part1')}
                                    <br />
                                    {t('about_hero_section_title_part2')}
                                    <br />
                                    {t('about_hero_section_title_part3')}
                                </motion.h2>
                                <motion.p
                                    className="text-white mb-4"
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 300,
                                        lineHeight: "18px",
                                        maxWidth: "400px",
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    {t('about_hero_section_description')}
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <Link
                                    to="https://tally.so/r/wb6l9Z"
                                    className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                                    style={{
                                        width: "170px",
                                        height: "38.66px",
                                        fontSize: "16.66px",
                                        fontWeight: 400,
                                        borderRadius: "12px",
                                        lineHeight: "18px",
                                        padding: "10px 20px"
                                    }}
                                >
                                    {t('about_hero_section_start_button')}
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <motion.img
                                src="/images/about/cohete.png"
                                alt="Rocket"
                                className="w-full p-1"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <div className="block lg:hidden bg-purple rounded-2xl p-4 pb-12 text-center">
                    <motion.h2 
                        className="text-white mb-10 md:text-4xl text-3xl leading-none mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('about_hero_section_title_part1')}
                        <br />
                        {t('about_hero_section_title_part2')}
                        <br />
                        {t('about_hero_section_title_part3')}
                    </motion.h2>

                    <motion.p
                        className="text-white mb-10"
                        style={{
                            fontSize: "18px",
                            fontWeight: 300,
                            lineHeight: "18px",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {t('about_hero_section_description')}
                    </motion.p>

                    <motion.div 
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Link
                            to="https://tally.so/r/wb6l9Z"
                            className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                            style={{
                                width: "120px",
                                height: "28px",
                                fontSize: "14px",
                                fontWeight: 400,
                                borderRadius: "5px",
                            }}
                        >
                            {t('about_hero_section_start_button')}
                        </Link>
                    </motion.div>
                    <motion.div 
                        className="flex justify-center mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <img
                            src="/images/about/cohete.png"
                            alt="Rocket"
                            className="lg:w-1/2 w-[63%] p-2"
                        />
                    </motion.div>
                </div>

                <div className="text-white flex flex-col items-center mt-4 mx-auto lg:mt-16">
                    <motion.p
                        style={{
                            fontSize: "65px",
                            fontWeight: 200,
                            lineHeight: "76px",
                            textAlign: "center",
                            maxWidth: "1200px",
                        }}
                        className="hidden lg:block mb-14 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('about_hero_section_discover_services')}
                    </motion.p>
                    <motion.p
                        style={{
                            fontSize: "18px",
                            fontWeight: 200,
                            lineHeight: "18px",
                        }}
                        className="lg:hidden mb-14 text-center mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('about_hero_section_discover_services')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Link
                            to="/services"
                            className="hidden lg:flex items-center justify-center bg-purple text-white hover:bg-opacity-90 transition-all"
                            style={{
                                width: "170px",
                                height: "38.66px",
                                fontSize: "16.66px",
                                fontWeight: 400,
                                borderRadius: "12px",
                                lineHeight: "18px",
                            }}
                        >
                            {t('about_hero_section_services_button')}
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Link
                            to="/services"
                            className="lg:hidden flex items-center justify-center bg-purple text-white hover:bg-opacity-90 transition-all"
                            style={{
                                width: "120px",
                                height: "28px",
                                fontSize: "14px",
                                fontWeight: 400,
                                borderRadius: "5px",
                            }}
                        >
                            {t('about_hero_section_services_button')}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
