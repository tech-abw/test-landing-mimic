import React from "react";
import { Link } from "react-router-dom";

const TechStackSection = ({
    bgColor = "bg-black",
    textColor = "text-white",
    image = "/images/tech/techstack.png",
}) => {
    return (
        <section className={`w-full ${bgColor} py-16 lg:py-32 relative`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between">
                    {/* Columna izquierda con texto - Versión de escritorio */}
                    <div className="hidden lg:flex flex-col justify-center w-[700px] text-left h-[650px]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2
                                    className={`${textColor} mb-6`}
                                    style={{
                                        fontSize: "65px",
                                        fontWeight: 400,
                                        lineHeight: "65px",
                                    }}
                                >
                                    Our Cutting-Edge
                                    <br />
                                    Tech Stack
                                </h2>
                                <p
                                    className={`${textColor} mb-16`}
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 200,
                                        lineHeight: "20px",
                                        maxWidth: "400px",
                                    }}
                                >
                                    We leverage industry-leading tools to
                                    streamline workflows and ensure the perfect
                                    product for you.
                                </p>
                            </div>
                            <div className="w-full flex gap-10">
                                <Link
                                    to="/contact"
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
                            </div>
                        </div>
                    </div>

                    {/* Columna izquierda con texto - Versión móvil */}
                    <div className="block lg:hidden text-center mb-12">
                        <h2
                            className={`${textColor} mb-8 md:text-4xl text-2xl`}
                        >
                            Our Cutting-Edge
                            <br />
                            Tech Stack
                        </h2>
                        <p
                            className={`${textColor} mb-10`}
                            style={{
                                fontSize: "16px",
                                fontWeight: 200,
                                lineHeight: "16px",
                                maxWidth: "300px",
                            }}
                        >
                            We leverage industry-leading tools to streamline
                            workflows and ensure the perfect product for you.
                        </p>
                        <div className="w-full flex gap-5 md:gap-10">
                            <Link
                                to="/contact"
                                className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                                style={{
                                    width: "77.33px",
                                    height: "18px",
                                    fontSize: "10px",
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
                                    width: "77.33px",
                                    height: "18px",
                                    fontSize: "10px",
                                    fontWeight: 400,
                                    borderRadius: "5px",
                                }}
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Columna derecha con imagen */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            src={image}
                            alt="Tech Stack"
                            className="w-full max-w-[750px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
