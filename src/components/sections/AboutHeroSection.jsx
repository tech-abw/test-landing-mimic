/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
    return (
        <section className="w-full bg-black py-16">
            <div className="w-[95%] mx-auto px-4">
                {/* Versión de escritorio */}
                <div
                    className="hidden lg:block bg-purple rounded-2xl p-8 items-center justify-center"
                    style={{ height: "700px" }}
                >
                    <div className="flex items-center justify-center w-full">
                        <div className="w-1/2 pr-8">
                            <motion.h2
                                className="text-white mb-10 lg:mt-16"
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
                                Ready to unlock
                                <br />
                                the power of
                                <br />
                                your biz?
                            </motion.h2>
                            <motion.p
                                className="text-white mb-4 lg:mb-44"
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
                                In a fast paced world, take action. Lets build
                                together!
                            </motion.p>
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
                                    }}
                                >
                                    Start here
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <motion.img
                                src="/images/about/cohete.png"
                                alt="Rocket"
                                className="w-full p-1 lg:mt-16"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <div className="block lg:hidden bg-purple rounded-2xl p-4 text-center">
                    <motion.h2 
                        className="text-white mb-10 md:text-4xl text-3xl leading-none mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        Ready to unlock
                        <br />
                        the power of
                        <br />
                        your biz?
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
                        In a fast paced world, take action. Lets build together!
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
                            Start here
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
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
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
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
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
                            Our services
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
                            Our services
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
