import React from "react";

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
        title: "No-Code/Low-Code Development",
        description:
            "Speeding up delivery with platforms like Bubble, Flutterflow and Webflow.",
        bgColor: "bg-white",
        textColor: "text-black",
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
        title: "AI Solutions",
        description:
            "AI chats, automatizations, Agents, workflows and much more. The sky is the limit.",
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
                    <p
                        className="text-black mb-4"
                        style={{
                            fontSize: "65px",
                            fontWeight: 200,
                            lineHeight: "65px",
                            maxWidth: "850px",
                        }}
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>
                </div>

                {/* Título principal - Versión móvil */}
                <div className="block lg:hidden text-center mb-8">
                    <p
                        className="text-black mb-14"
                        style={{
                            fontSize: "30px",
                            fontWeight: 200,
                            lineHeight: "30px",
                        }}
                    >
                        Discover the complete suite of services we offer,
                        empowering you to build your dream product.
                    </p>
                </div>

                {/* Grid de servicios - Versión de escritorio (2 arriba, 3 abajo) */}
                <div className="hidden lg:block">
                    {/* Primera fila: 2 tarjetas */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div
                            className={`${services[0].bgColor} ${services[0].textColor} p-12 rounded-2xl flex flex-col`}
                            style={{ height: "600px" }}
                        >
                            <div className="pr-8">
                                <h3
                                    className="mb-8"
                                    style={{
                                        fontSize: "50px",
                                        fontWeight: 200,
                                        lineHeight: "50px",
                                    }}
                                >
                                    {services[0].title}
                                </h3>
                                <p
                                    className="mb-10"
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: 300,
                                        lineHeight: "30px",
                                    }}
                                >
                                    {services[0].description}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={services[0].image}
                                    alt={services[0].title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className={`${services[1].bgColor} ${services[1].textColor} p-12 rounded-2xl flex flex-col`}
                            style={{ height: "600px" }}
                        >
                            <h3
                                className="mb-12"
                                style={{
                                    fontSize: "50px",
                                    fontWeight: 200,
                                    lineHeight: "50px",
                                    maxWidth: "300px",
                                }}
                            >
                                {services[1].title}
                            </h3>
                            <p
                                className="mb-10"
                                style={{ fontSize: "30px", fontWeight: 300 }}
                            >
                                {services[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Segunda fila: 3 tarjetas */}
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        {services.slice(2).map((service, index) => (
                            <div
                                key={index}
                                className={`${service.bgColor} ${service.textColor} p-12 rounded-2xl flex flex-col `}
                                style={{ height: "500px" }}
                            >
                                <h3
                                    className="mb-12"
                                    style={{
                                        fontSize: "50px",
                                        fontWeight: 200,
                                        lineHeight: "50px",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="mb-10"
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: 300,
                                        lineHeight: "30px",
                                    }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid de servicios - Versión móvil (stack) */}
                <div className="block lg:hidden space-y-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.bgColor} ${
                                service.textColor
                            } p-6 rounded-2xl ${
                                service.hasImage ? "text-center" : ""
                            }`}
                            style={{ height: "300px" }}
                        >
                            <h3 className="mb-4" style={{ fontSize: "35px" }}>
                                {service.title}
                            </h3>
                            <p
                                className="text-base mb-5"
                                style={{ fontSize: "18px", fontWeight: 300 }}
                            >
                                {service.description}
                            </p>
                            {service.hasImage && (
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="max-w-[250px] max-h-[250px] object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
