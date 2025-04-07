import React from "react";

const teamMembers = [
    {
        name: "Ignacio Zanotto",
        image: "/images/about/image2.png",
        description: "CTO",
    },
    {
        name: "Carlos Contreras",
        image: "/images/about/image2.png",
        description: "COO",
    },
    {
        name: "Manuel Latorre",
        image: "/images/about/Manuel-latorre.png",
        description: "Front-End Developer",
    },
    {
        name: "Mariana Vega",
        image: "/images/about/image1.png",
        description: "UX UI Designer",
    },
    {
        name: "Martin Alturria",
        image: "/images/about/Martin-alturria.png",
        description: "Back-End Developer",
    },
    {
        name: "Sasha Solano",
        image: "/images/about/Sasha.png",
        description: "Front-End Developer",
    },
    {
        name: "John Rodriguez",
        image: "/images/about/image2.png",
        description: "Fullstack IA Engineer",
    },
    {
        name: "Montserrat Alvarez",
        image: "/images/about/Montse.png",
        description: "Graphic Designer",
    },
    {
        name: "Jennifer Ruiz",
        image: "/images/about/image1.png",
        description: "Marketing specialist",
    },
    {
        name: "Amanda Aguirre",
        image: "/images/about/image1.png",
        description: "Marketing specialist",
    },
    {
        name: "Ivan de la Garza",
        image: "/images/about/image2.png",
        description: "CRO",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-gray py-2 lg:py-16 px-4">
            <div className="container w-[88%] mx-auto">
                {/* Sección de título y descripción - Versión de escritorio */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-8 items-center mb-14">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2
                            className="mb-4 lg:mb-10"
                            style={{
                                fontSize: "65px",
                                fontWeight: 200,
                                lineHeight: "65px",
                            }}
                        >
                            Our team - Remote but
                            <br />
                            relentless team
                        </h2>
                        <p
                            className="text-gray-600 mb-6 lg:mb-0"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                                lineHeight: "25px",
                            }}
                        >
                            Every detail counts, we believe in our team whom
                            stands out for our clients.
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-end space-y-2 lg:space-y-[-50px]">
                        <img
                            src="/images/about/years.png"
                            alt="Years"
                            style={{ width: "200px", height: "200px" }}
                        />
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: 200,
                                marginTop: "2px",
                            }}
                        >
                            years
                        </span>
                    </div>
                </div>

                {/* Sección de título y descripción - Versión móvil */}
                <div className="block lg:hidden text-center mb-10">
                    <h2 className="md:text-3xl text-xl font-bold mb-5">
                        Our team - Remote but
                        <br />
                        relentless team
                    </h2>
                    <p className="text-gray-600 mb-6 md:text-xl text-base">
                        Every detail counts, we believe in our team whom stands
                        out for our clients.
                    </p>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/images/about/years.png"
                            alt="Years"
                            style={{ width: "100px", height: "110px" }}
                        />
                        <span style={{ fontSize: "15px", fontWeight: 200 }}>
                            years
                        </span>
                    </div>
                </div>

                {/* Grid de miembros del equipo */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center lg:w-[250px]">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full rounded-lg mb-2 lg:mb-4 object-cover"
                                style={{ aspectRatio: "1/1" }}
                            />
                            <h3 className="font-bold text-lg lg:text-3xl">
                                {member.name}
                            </h3>
                            <p className="text-xs lg:text-xl font-bold text-gray-600">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sección de estadísticas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:mt-12">
                    {/* Proyectos */}
                    <div className="flex flex-col items-center">
                        <div
                            className="lg:flex flex-row space-x-4"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <span
                                className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                `}
                                style={{
                                    fontWeight: 150,
                                }}
                            >
                                +100
                            </span>
                        </div>
                        <span
                            className="text-gray-600"
                            style={{
                                fontSize: "20px",
                                fontWeight: 300,
                                lineHeight: "20px",
                            }}
                        >
                            Projects
                        </span>
                    </div>

                    {/* Clientes */}
                    <div className="flex flex-col items-center">
                        <div
                            className="lg:flex flex-row space-x-4"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <span
                                className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                `}
                                style={{
                                    fontWeight: 150,
                                }}
                            >
                                +85
                            </span>
                        </div>
                        <span
                            className="text-gray-600"
                            style={{
                                fontSize: "20px",
                                fontWeight: 300,
                                lineHeight: "20px",
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
