import React from "react";

const teamMembers = [
    {
        name: "Ignacio Zanotto",
        image: "/images/about/image1.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Manuel Latorre",
        image: "/images/about/image2.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Mariana Vega",
        image: "/images/about/image1.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Martin Altunria",
        image: "/images/about/image2.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Sasha Solano",
        image: "/images/about/image1.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "John Rodriguez",
        image: "/images/about/image2.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Jennifer Ruiz",
        image: "/images/about/image1.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Amanda Aguirre",
        image: "/images/about/image2.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Ivan de la Garza",
        image: "/images/about/image1.png",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Montserrat Alvarez",
        image: "/images/about/image2.png",
        description: "Lorem ipsum dolor sit amet",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-gray py-16 px-4">
            <div className="container mx-auto">
                {/* Sección de título y descripción - Versión de escritorio */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-8 items-center mb-14">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2
                            className="mb-4 md:mb-10"
                            style={{
                                fontSize: "96px",
                                fontWeight: 200,
                                lineHeight: "1",
                            }}
                        >
                            Our team - Remote but
                            <br />
                            relentless team
                        </h2>
                        <p
                            className="text-gray-600 mb-6 md:mb-0"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                            }}
                        >
                            Every detail counts, we believe in our team whom
                            stands out for our clients.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-2 md:space-y-[-50px]">
                        <img
                            src="/images/about/years.png"
                            alt="Years"
                            style={{ width: "238px", height: "266.94px" }}
                        />
                        <span style={{ fontSize: "29.79px", fontWeight: 200 }}>
                            years
                        </span>
                    </div>
                </div>

                {/* Sección de título y descripción - Versión móvil */}
                <div className="block md:hidden text-center mb-10">
                    <h2
                        style={{
                            fontSize: "36px",
                            fontWeight: 200,
                            lineHeight: "1.2",
                            marginBottom: "10px",
                        }}
                    >
                        Our team - Remote but
                        <br />
                        relentless team
                    </h2>
                    <p
                        className="text-gray-600 mb-6"
                        style={{
                            fontSize: "16px",
                            fontWeight: 300,
                        }}
                    >
                        Every detail counts, we believe in our team whom stands
                        out for our clients.
                    </p>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/images/about/years.png"
                            alt="Years"
                            style={{ width: "120px", height: "134px" }}
                        />
                        <span style={{ fontSize: "15px", fontWeight: 200 }}>
                            years
                        </span>
                    </div>
                </div>

                {/* Grid de miembros del equipo */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full rounded-lg mb-2 md:mb-4 object-cover"
                                style={{ aspectRatio: "1/1" }}
                            />
                            <h3 className="font-bold text-sm md:text-base">
                                {member.name}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sección de estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mt-12">
                    {/* Proyectos */}
                    <div className="flex flex-col items-center">
                        <div
                            className="md:flex flex-row space-x-4"
                            style={{
                                fontSize: "250px",
                            }}
                        >
                            <span
                                className={`
                                    text-[150px] 
                                    md:text-[250px] 
                                    text-gray-700
                                `}
                                style={{
                                    fontWeight: 200,
                                }}
                            >
                                +100
                            </span>
                        </div>
                        <span
                            className="text-gray-600"
                            style={{
                                fontSize: "30px",
                                fontWeight: 300,
                            }}
                        >
                            Projects
                        </span>
                    </div>

                    {/* Clientes */}
                    <div className="flex flex-col items-center">
                        <div
                            className="md:flex flex-row space-x-4"
                            style={{
                                fontSize: "250px",
                            }}
                        >
                            <span
                                className={`
                                    text-[150px] 
                                    md:text-[250px] 
                                    text-gray-700
                                `}
                                style={{
                                    fontWeight: 200,
                                }}
                            >
                                +85
                            </span>
                        </div>
                        <span
                            className="text-gray-600"
                            style={{
                                fontSize: "30px",
                                fontWeight: 300,
                            }}
                        >
                            Clients
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
