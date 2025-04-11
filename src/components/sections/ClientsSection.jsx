/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ClientsSection = () => {
    const topRowClients = [
        {
            name: "Insights to Behavior",
            logo: "/images/clients/insights-to-behavior.png",
            desktopSize: { width: 143.5, height: 37.63 },
            mobileSize: { width: 83, height: 25.95 },
            showOnMobile: true,
            mobileOrder: 1,
        },
        {
            name: "Ecompack",
            logo: "/images/clients/ecompack.png",
            desktopSize: { width: 176.73, height: 35.3 },
            mobileSize: { width: 90.23, height: 20.02 },
            showOnMobile: true,
            mobileOrder: 2,
        },
        {
            name: "Astelaris",
            logo: "/images/clients/astelaris.png",
            desktopSize: { width: 137.11, height: 36.79 },
            mobileSize: { width: 71.12, height: 17.74 },
            showOnMobile: true,
            mobileOrder: 3,
        },
        {
            name: "Mita",
            logo: "/images/clients/mita.png",
            desktopSize: { width: 72.84, height: 66.8 },
            showOnMobile: false,
        },
        {
            name: "Ultima",
            logo: "/images/clients/ultima.png",
            desktopSize: { width: 99.31, height: 47.35 },
            showOnMobile: false,
        },
        {
            name: "CSSIS",
            logo: "/images/clients/cssis.png",
            desktopSize: { width: 104.49, height: 33.42 },
            showOnMobile: false,
        },
        {
            name: "Zengure",
            logo: "/images/clients/zengure.png",
            desktopSize: { width: 138.13, height: 41.89 },
            showOnMobile: false,
        },
    ];

    const bottomRowClients = [
        {
            name: "Think",
            logo: "/images/clients/think.png",
            desktopSize: { width: 91.12, height: 51.15 },
            mobileSize: { width: 70.83, height: 27.67 },
            showOnMobile: true,
            mobileOrder: 4,
        },
        {
            name: "Gravity",
            logo: "/images/clients/gravity.png",
            desktopSize: { width: 121.08, height: 40.33 },
            mobileSize: { width: 80.39, height: 27.45 },
            showOnMobile: true,
            mobileOrder: 5,
        },
        {
            name: "Santa Eugenia",
            logo: "/images/clients/santa-eugenia.png",
            desktopSize: { width: 118.84, height: 62.43 },
            mobileSize: { width: 80.31, height: 30.59 },
            showOnMobile: true,
            mobileOrder: 6,
        },
        {
            name: "Silvesa",
            logo: "/images/clients/silvesa.png",
            desktopSize: { width: 107.9, height: 64.25 },
            showOnMobile: false,
        },
        {
            name: "Aurea",
            logo: "/images/clients/aurea.png",
            desktopSize: { width: 150.6, height: 48.71 },
            showOnMobile: false,
        },
        {
            name: "Plancidad",
            logo: "/images/clients/plancidad100.png",
            desktopSize: { width: 142.6, height: 40.61 },
            showOnMobile: false,
        },
        {
            name: "Vitaflow",
            logo: "/images/clients/vitaflow.png",
            desktopSize: { width: 160.94, height: 30.08 },
            mobileSize: { width: 77.6, height: 14.5 },
            showOnMobile: false,
        },
    ];

    const mobileClients = [
        ...topRowClients.filter((client) => client.showOnMobile !== false),
        ...bottomRowClients.filter((client) => client.showOnMobile !== false),
    ].sort((a, b) => a.mobileOrder - b.mobileOrder);

    const mobileColumn1 = [mobileClients[0], mobileClients[3]];
    const mobileColumn2 = [mobileClients[1], mobileClients[4]];
    const mobileColumn3 = [mobileClients[2], mobileClients[5]];

    return (
        <section className="w-full bg-gray py-10 md:py-24">
            <div className="w-[95%] mx-auto px-4">
                <motion.h2 
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <span
                        className="hidden lg:inline"
                        style={{
                            fontSize: "65px",
                            fontWeight: 400,
                            lineHeight: "65px",
                        }}
                    >
                        Our Clients - Let's build
                        <br />
                        together!
                    </span>
                    <span className="lg:hidden md:text-4xl text-3xl font-medium leading-none">
                        Our Clients - Let's build
                        together!
                    </span>
                </motion.h2>

                {/* Contenedor principal con posición relativa */}
                <div className="relative">
                    {/* Primera fila de logos - con margen izquierdo de 120px */}
                    <div
                        className="hidden lg:flex justify-between items-center mb-16"
                        style={{ marginLeft: "5%", marginRight: "5%" }}
                    >
                        {topRowClients.map((client, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1
                                }}
                            >
                                <motion.img
                                    src={client.logo}
                                    alt={client.name}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                    style={{
                                        width: `${
                                            client.desktopSize?.width || "auto"
                                        }px`,
                                        height: `${
                                            client.desktopSize?.height || "auto"
                                        }px`,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Segunda fila de logos - con margen izquierdo de 80px */}
                    <div className="hidden lg:flex justify-between items-center">
                        {bottomRowClients.map((client, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.1 + index * 0.1
                                }}
                            >
                                <motion.img
                                    src={client.logo}
                                    alt={client.name}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                    style={{
                                        width: `${
                                            client.desktopSize?.width || "auto"
                                        }px`,
                                        height: `${
                                            client.desktopSize?.height || "auto"
                                        }px`,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Versión móvil - 3 columnas, 2 logos por columna */}
                    <div className="lg:hidden flex justify-between">
                        {/* Primera columna móvil */}
                        <motion.div 
                            className="flex flex-col items-center space-y-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            {mobileColumn1.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.2
                                    }}
                                >
                                    <motion.img
                                        src={client.logo}
                                        alt={client.name}
                                        className="opacity-80 hover:opacity-100 transition-opacity"
                                        style={{
                                            width: `${
                                                client.mobileSize?.width ||
                                                "auto"
                                            }px`,
                                            height: `${
                                                client.mobileSize?.height ||
                                                "auto"
                                            }px`,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Segunda columna móvil */}
                        <motion.div 
                            className="flex flex-col items-center space-y-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {mobileColumn2.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.2
                                    }}
                                >
                                    <motion.img
                                        src={client.logo}
                                        alt={client.name}
                                        className="opacity-80 hover:opacity-100 transition-opacity"
                                        style={{
                                            width: `${
                                                client.mobileSize?.width ||
                                                "auto"
                                            }px`,
                                            height: `${
                                                client.mobileSize?.height ||
                                                "auto"
                                            }px`,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Tercera columna móvil */}
                        <motion.div 
                            className="flex flex-col items-center space-y-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {mobileColumn3.map((client, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.2
                                    }}
                                >
                                    <motion.img
                                        src={client.logo}
                                        alt={client.name}
                                        className="opacity-80 hover:opacity-100 transition-opacity"
                                        style={{
                                            width: `${
                                                client.mobileSize?.width ||
                                                "auto"
                                            }px`,
                                            height: `${
                                                client.mobileSize?.height ||
                                                "auto"
                                            }px`,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
