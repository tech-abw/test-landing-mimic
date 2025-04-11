/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TechStackSection = ({
    bgColor = "bg-black",
    textColor = "text-white",
    image = "/images/tech/techstack.png",
}) => {
    return (
        <section className={`w-full ${bgColor} py-16 lg:py-32 relative`}>
            <div className="w-[95%] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between">
                    {/* Columna izquierda con texto - Versión de escritorio */}
                    <div className="hidden lg:flex flex-col justify-center w-[700px] text-left h-[650px]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <motion.h2
                                    className={`${textColor} mb-6`}
                                    style={{
                                        fontSize: "65px",
                                        fontWeight: 400,
                                        lineHeight: "65px",
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Our Cutting-Edge
                                    <br />
                                    Tech Stack
                                </motion.h2>
                                <motion.p
                                    className={`${textColor} mb-16`}
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 200,
                                        lineHeight: "20px",
                                        maxWidth: "400px",
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    We leverage industry-leading tools to
                                    streamline workflows and ensure the perfect
                                    product for you.
                                </motion.p>
                            </div>
                            <motion.div 
                                className="w-full flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
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
                                <Link
                                    to="/services"
                                    className="flex items-center justify-center bg-purple text-white hover:bg-opacity-90 transition-all"
                                    style={{
                                        width: "170px",
                                        height: "38.66px",
                                        fontSize: "16.66px",
                                        fontWeight: 400,
                                        borderRadius: "12px",
                                        lineHeight: "18px",
                                    }}
                                >
                                    Our Services
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Columna izquierda con texto - Versión móvil */}
                    <div className="block lg:hidden mb-12">
                        <motion.h2
                            className={`${textColor} mb-6 md:text-4xl text-3xl leading-none`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Cutting-Edge
                            <br />
                            Tech Stack
                        </motion.h2>
                        <motion.p
                            className={`${textColor} mb-10`}
                            style={{
                                fontSize: "16px",
                                fontWeight: 200,
                                lineHeight: "16px",
                                maxWidth: "300px",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            We leverage industry-leading tools to streamline
                            workflows and ensure the perfect product for you.
                        </motion.p>
                        <motion.div 
                            className="w-full justify-center flex gap-5 md:gap-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
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
                            <Link
                                to="/services"
                                className="flex items-center justify-center bg-purple text-white hover:bg-opacity-90 transition-all"
                                style={{
                                    width: "120px",
                                    height: "28px",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    borderRadius: "5px",
                                }}
                            >
                                Our Services
                            </Link>
                        </motion.div>
                    </div>

                    {/* Columna derecha con imagen */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <motion.img
                            src={image}
                            alt="Tech Stack"
                            className="w-full max-w-[750px] object-contain"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
