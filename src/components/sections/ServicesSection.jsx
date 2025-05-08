/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "UX/UI Design",
        description: "Crafting user-friendly and visually stunning interfaces.",
        image: "/images/services/ux-ui-design.png",
        bgColor: "bg-neon-green",
        textColor: "text-black",
        hasImage: true,
    },
    {
        title: "Website & E-commerce Solutions",
        description:
            "Building powerful solutions in Wordpress, Webflow, Framer, Squarespace, and Shopify.",
        bgColor: "bg-grays",
        textColor: "text-black",
        hasImage: false,
    },
    {
        title: "AI Solutions",
        description:
            "AI Agents, Copilots, automations and much more. The sky is the limit.",
        bgColor: "bg-white",
        textColor: "text-white",
        hasImage: false,
    },
    {
        title: "Tailored Solutions",
        description:
            "Personalized Apps, CRMs, ERPs designed to fit your unique needs.",
        bgColor: "bg-black",
        textColor: "text-white",
        hasImage: false,
    },
    {
        title: "Consulting",
        description:
            "With our broad expertise, we focus in serving as your Fractional CTO.",
        bgColor: "bg-neon-green",
        textColor: "text-black",
        hasImage: false,
    },
];

const ServicesSection = () => {
    return (
        <section className="w-full bg-gray py-16 px-4">
            <div className="w-[95%] mx-auto">
                {/* Título principal - Versión de escritorio */}
                <div className="hidden lg:block  lg:text-start mb-36">
                    <motion.p
                        className="text-black mb-4"
                        style={{
                            fontSize: "65px",
                            fontWeight: 200,
                            lineHeight: "65px",
                            maxWidth: "850px",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </motion.p>
                </div>

                {/* Título principal - Versión móvil */}
                <div className="block lg:hidden text-center mb-8">
                    <motion.p
                        className="text-black mb-14"
                        style={{
                            fontSize: "30px",
                            fontWeight: 300,
                            lineHeight: "30px",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </motion.p>
                </div>

                {/* Grid de servicios - Versión de escritorio (2 arriba, 3 abajo) */}
                <div className="hidden lg:block">
                    {/* Primera fila: 2 tarjetas */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            className={`${services[0].bgColor} ${services[0].textColor} p-12 rounded-2xl flex flex-col`}
                            style={{ height: "600px" }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <motion.h3
                                    className="mb-10"
                                    style={{
                                        fontSize: "50px",
                                        fontWeight: 200,
                                        lineHeight: "50px",
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {services[0].title}
                                </motion.h3>
                                <motion.p
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: 300,
                                        lineHeight: "30px",
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {services[0].description}
                                </motion.p>
                            </div>
                            <motion.div
                                className="flex justify-center mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <img
                                    src={services[0].image}
                                    alt={services[0].title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className={`${services[1].bgColor} ${services[1].textColor} p-12 rounded-2xl flex flex-col`}
                            style={{ height: "600px" }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <motion.h3
                                    className="mb-16"
                                    style={{
                                        fontSize: "50px",
                                        fontWeight: 200,
                                        lineHeight: "50px",
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {services[1].title}
                                </motion.h3>
                                <motion.p
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: 300,
                                        lineHeight: "30px",
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {services[1].description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Segunda fila: 3 tarjetas */}
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        {services.slice(2).map((service, index) => (
                            <motion.div
                                key={index}
                                className={`${service.bgColor} ${service.textColor} p-12 rounded-2xl flex flex-col`}
                                style={{ height: "500px" }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div>
                                    <motion.h3
                                        className="mb-16 lg:mt-12"
                                        style={{
                                            fontSize: "50px",
                                            fontWeight: 200,
                                            lineHeight: "50px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + index * 0.1,
                                        }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: 300,
                                            lineHeight: "30px",
                                        }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.1,
                                        }}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Grid de servicios - Versión móvil (stack) */}
                <div className="block lg:hidden space-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${service.bgColor} ${
                                service.textColor
                            } p-6 rounded-2xl ${
                                service.hasImage ? "text-center" : ""
                            }`}
                            style={{ height: "300px" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.h3
                                className="mb-7"
                                style={{ fontSize: "35px", lineHeight: "35px" }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 + index * 0.1,
                                }}
                            >
                                {service.title}
                            </motion.h3>
                            <motion.p
                                className="text-base mb-5"
                                style={{ fontSize: "18px", fontWeight: 300 }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                }}
                            >
                                {service.description}
                            </motion.p>
                            {service.hasImage && (
                                <motion.div
                                    className="flex justify-center mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="max-w-[250px] max-h-[250px] object-contain"
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
