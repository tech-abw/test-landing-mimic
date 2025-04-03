import React from "react";

const AboutHeroSection = () => {
    return (
        <section className="w-full bg-black py-16">
            <div className="container mx-auto px-4">
                {/* Versión de escritorio */}
                <div
                    className="hidden md:block bg-purple rounded-2xl p-8 items-center justify-center"
                    style={{ height: "500px" }}
                >
                    <div className="flex items-center justify-center w-full">
                        <div className="w-1/2 pr-8">
                            <h2
                                className="text-white mb-4"
                                style={{
                                    fontSize: "70px",
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
                                className="text-white mb-4"
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 300,
                                }}
                            >
                                In a fast paced world, take action. Lets build
                                together!
                            </p>
                            <button
                                onClick={() =>
                                    (window.location.href = "/contact")
                                }
                                className="bg-neon-green text-black"
                                style={{
                                    width: "150px",
                                    height: "37px",
                                    fontSize: "22px",
                                    fontWeight: 200,
                                    borderRadius: "5px",
                                    lineHeight: "27px",
                                    textAlign: "center",
                                }}
                            >
                                Start here
                            </button>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <img
                                src="/images/about/cohete.png"
                                alt="Rocket"
                                className="w-full p-5"
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <div className="block md:hidden bg-purple rounded-2xl p-4 text-center">
                    <h2
                        className="text-white mb-4"
                        style={{
                            fontSize: "36px",
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

                    <div className="flex justify-center mb-4">
                        <img
                            src="/images/about/cohete.png"
                            alt="Rocket"
                            className="w-1/2 p-2"
                        />
                    </div>

                    <p
                        className="text-white mb-4"
                        style={{
                            fontSize: "16px",
                            fontWeight: 300,
                        }}
                    >
                        In a fast paced world, take action. Lets build together!
                    </p>

                    <button
                        onClick={() => (window.location.href = "/contact")}
                        className="bg-neon-green text-black"
                        style={{
                            width: "120px",
                            height: "30px",
                            fontSize: "15px",
                            fontWeight: 200,
                            borderRadius: "5px",
                            lineHeight: "30px",
                            textAlign: "center",
                        }}
                    >
                        Start here
                    </button>
                </div>

                <div className="text-white text-center mt-4 mx-auto">
                    <p 
                        style={{ 
                            fontSize: "70px",
                            fontWeight: 200,
                            display: "none",
                        }}
                        className="hidden md:block"
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>
                    <p 
                        style={{ 
                            fontSize: "36px",
                            fontWeight: 200,
                            display: "block",
                        }}
                        className="md:hidden"
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>
                    
                    <button
                        onClick={() => (window.location.href = "/services")}
                        className="bg-purple text-white"
                        style={{
                            fontSize: "16px",
                            fontWeight: 500,
                            padding: "10px 20px",
                            borderRadius: "5px",
                            marginTop: "10px",
                        }}
                    >
                        Our services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
