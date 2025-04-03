import React from "react";
import { Link } from "react-router-dom";

const TechStackSection = ({ 
    bgColor = 'bg-black', 
    textColor = 'text-white', 
    image = '/images/tech/techstack.png' 
}) => {
    return (
        <section className={`w-full ${bgColor} py-24 md:py-32 relative`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between">
                    {/* Columna izquierda con texto - Versión de escritorio */}
                    <div className="hidden md:flex flex-col justify-center w-[700px] text-left h-[650px]">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2
                                    className={`${textColor} mb-6`}
                                    style={{
                                        fontSize: "73px",
                                        fontWeight: 400,
                                        lineHeight: "1.1",
                                    }}
                                >
                                    Our Cutting-Edge
                                    <br />
                                    Tech Stack
                                </h2>
                                <p
                                    className={`${textColor} mb-16`}
                                    style={{
                                        fontSize: "25px",
                                        fontWeight: 200,
                                    }}
                                >
                                    We leverage industry-leading tools to
                                    streamline workflows and ensure the perfect
                                    product for you.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link
                                    to="/contact"
                                    className="bg-neon-green text-center text-black rounded-full font-medium inline-block"
                                    style={{
                                        width: "256px",
                                        height: "58px",
                                        fontSize: "20px",
                                        borderRadius: "12px",
                                        lineHeight: "58px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Start here
                                </Link>
                                <Link
                                    to="/services"
                                    className="bg-purple text-center text-white rounded-full font-medium inline-block"
                                    style={{
                                        width: "256px",
                                        height: "58px",
                                        fontSize: "20px",
                                        borderRadius: "12px",
                                        lineHeight: "58px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Columna izquierda con texto - Versión móvil */}
                    <div className="block md:hidden text-center mb-8">
                        <h2
                            className={`${textColor} mb-4`}
                            style={{
                                fontSize: "36px",
                                fontWeight: 400,
                                lineHeight: "1.2",
                            }}
                        >
                            Our Cutting-Edge
                            <br />
                            Tech Stack
                        </h2>
                        <p
                            className={`${textColor} mb-6`}
                            style={{
                                fontSize: "16px",
                                fontWeight: 200,
                            }}
                        >
                            We leverage industry-leading tools to streamline
                            workflows and ensure the perfect product for you.
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/contact"
                                className="bg-neon-green text-black rounded-full font-medium inline-block"
                                style={{
                                    width: "99px",
                                    height: "23px",
                                    fontSize: "12px",
                                    borderRadius: "5px",
                                    lineHeight: "23px",
                                    fontWeight: 500,
                                }}
                            >
                                Start here
                            </Link>
                            <Link
                                to="/services"
                                className="bg-purple text-white rounded-full font-medium inline-block"
                                style={{
                                    width: "99px",
                                    height: "23px",
                                    fontSize: "12px",
                                    borderRadius: "5px",
                                    lineHeight: "23px",
                                    fontWeight: 500,
                                }}
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Columna derecha con imagen */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
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
