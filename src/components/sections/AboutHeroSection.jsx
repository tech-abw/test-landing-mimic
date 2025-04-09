import React from "react";
import { Link } from "react-router-dom";

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
                            <h2
                                className="text-white mb-10 lg:mt-16"
                                style={{
                                    fontSize: "65px",
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                }}
                            >
                                Ready to unlock
                                <br />
                                the power of
                                <br />
                                your biz?
                            </h2>
                            <p
                                className="text-white mb-4 lg:mb-44"
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 300,
                                    lineHeight: "18px",
                                    maxWidth: "400px",
                                }}
                            >
                                In a fast paced world, take action. Lets build
                                together!
                            </p>
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
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <img
                                src="/images/about/cohete.png"
                                alt="Rocket"
                                className="w-full p-1 lg:mt-16"
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <div className="block lg:hidden bg-purple rounded-2xl p-4 text-center">
                    <h2 className="text-white mb-10 md:text-4xl text-2xl">
                        Ready to unlock
                        <br />
                        the power of
                        <br />
                        your biz?
                    </h2>

                    <p
                        className="text-white mb-10"
                        style={{
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "16px",
                        }}
                    >
                        In a fast paced world, take action. Lets build together!
                    </p>

                    <div className="flex justify-center mb-12">
                        <Link
                            to="https://tally.so/r/wb6l9Z"
                            className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                            style={{
                                width: "87px",
                                height: "22px",
                                fontSize: "10px",
                                fontWeight: 400,
                                borderRadius: "5px",
                            }}
                        >
                            Start here
                        </Link>
                    </div>
                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/about/cohete.png"
                            alt="Rocket"
                            className="w-1/2 p-2"
                        />
                    </div>
                </div>

                <div className="text-white flex flex-col items-center mt-4 mx-auto lg:mt-16">
                    <p
                        style={{
                            fontSize: "65px",
                            fontWeight: 200,
                            lineHeight: "76px",
                            textAlign: "center",
                            maxWidth: "1200px",
                        }}
                        className="hidden lg:block mb-14 text-center"
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>
                    <p
                        style={{
                            fontSize: "20px",
                            fontWeight: 200,
                        }}
                        className="lg:hidden mb-14 text-center"
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>

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

                    <Link
                        to="/services"
                        className="lg:hidden flex items-center justify-center bg-purple text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "87px",
                            height: "22px",
                            fontSize: "10px",
                            fontWeight: 400,
                            borderRadius: "5px",
                        }}
                    >
                        Our services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
