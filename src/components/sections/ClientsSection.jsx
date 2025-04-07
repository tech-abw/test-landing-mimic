const ClientsSection = () => {
    const topRowClients = [
        {
            name: "Insights to Behavior",
            logo: "/images/clients/insights-to-behavior.png",
            desktopSize: { width: 133, height: 27 },
            mobileSize: { width: 69.2, height: 18.15 },
            showOnMobile: true,
            mobileOrder: 1,
        },
        {
            name: "Ecompack",
            logo: "/images/clients/ecompack.png",
            desktopSize: { width: 165, height: 25 },
            mobileSize: { width: 85.23, height: 17.02 },
            showOnMobile: true,
            mobileOrder: 2,
        },
        {
            name: "Astelaris",
            logo: "/images/clients/astelaris.png",
            desktopSize: { width: 137, height: 25 },
            mobileSize: { width: 66.12, height: 17.74 },
            showOnMobile: true,
            mobileOrder: 3,
        },
        {
            name: "Mita",
            logo: "/images/clients/mita.png",
            desktopSize: { width: 62, height: 55 },
            showOnMobile: false,
        },
        {
            name: "Ultima",
            logo: "/images/clients/ultima.png",
            desktopSize: { width: 89, height: 25 },
            showOnMobile: false,
        },
        {
            name: "CSSIS",
            logo: "/images/clients/cssis.png",
            desktopSize: { width: 94, height: 25 },
            showOnMobile: false,
        },
        {
            name: "Zengure",
            logo: "/images/clients/zengure.png",
            desktopSize: { width: 125, height: 30 },
            showOnMobile: false,
        },
    ];

    const bottomRowClients = [
        {
            name: "Think",
            logo: "/images/clients/think.png",
            desktopSize: { width: 87, height: 38 },
            mobileSize: { width: 48.83, height: 24.67 },
            showOnMobile: true,
            mobileOrder: 4,
        },
        {
            name: "Gravity",
            logo: "/images/clients/gravity.png",
            desktopSize: { width: 110, height: 30 },
            mobileSize: { width: 58.39, height: 19.45 },
            showOnMobile: true,
            mobileOrder: 5,
        },
        {
            name: "Santa Eugenia",
            logo: "/images/clients/santa-eugenia.png",
            desktopSize: { width: 110, height: 50 },
            mobileSize: { width: 57.31, height: 30.59 },
            showOnMobile: true,
            mobileOrder: 6,
        },
        {
            name: "Silvesa",
            logo: "/images/clients/silvesa.png",
            desktopSize: { width: 97, height: 50 },
            showOnMobile: false,
        },
        {
            name: "Aurea",
            logo: "/images/clients/aurea.png",
            desktopSize: { width: 140, height: 38 },
            showOnMobile: false,
        },
        {
            name: "Vitaflow",
            logo: "/images/clients/vitaflow.png",
            desktopSize: { width: 150, height: 20 },
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
        <section className="w-full bg-gray py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-center mb-12 md:mb-20">
                    <span
                        className="hidden md:inline"
                        style={{ fontSize: "65px", fontWeight: 400, lineHeight: "65px" }}
                    >
                        Our Clients - Let's build
                        <br />
                        together!
                    </span>
                    <span
                        className="md:hidden"
                        style={{ fontSize: "20px", fontWeight: 400, lineHeight: "20px" }}
                    >
                        Our Clients - Let's build
                        <br />
                        together!
                    </span>
                </h2>

                {/* Contenedor principal con posición relativa */}
                <div className="relative">
                    {/* Primera fila de logos - con margen izquierdo de 120px */}
                    <div
                        className="hidden lg:flex justify-between items-center mb-16"
                        style={{ marginLeft: "120px", marginRight: "120px" }}
                    >
                        {topRowClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <img
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
                                />
                            </div>
                        ))}
                    </div>

                    {/* Segunda fila de logos - con margen izquierdo de 80px */}
                    <div
                        className="hidden lg:flex justify-between items-center"
                        style={{ marginLeft: "80px", marginRight: "80px" }}
                    >
                        {bottomRowClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <img
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
                                />
                            </div>
                        ))}
                    </div>

                    {/* Versión móvil - 3 columnas, 2 logos por columna */}
                    <div className="lg:hidden flex justify-between">
                        {/* Primera columna móvil */}
                        <div className="flex flex-col items-center space-y-12">
                            {mobileColumn1.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <img
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
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Segunda columna móvil */}
                        <div className="flex flex-col items-center space-y-12">
                            {mobileColumn2.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <img
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
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Tercera columna móvil */}
                        <div className="flex flex-col items-center space-y-12">
                            {mobileColumn3.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <img
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
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
