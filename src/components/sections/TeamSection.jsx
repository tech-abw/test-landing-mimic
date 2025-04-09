import React from "react";

const teamMembers = [
    {
        name: "Ignacio Zanotto",
        image: "/images/about/Nacho.png",
        description: "CTO",
    },
    {
        name: "Manuel Latorre",
        image: "/images/about/Manuel-latorre.png",
        description: "Front-End Developer",
    },
    {
        name: "Mariana Vega",
        image: "/images/about/Mariana.png",
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
        image: "/images/about/John.png",
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
            <div className="w-[90%] mx-auto">
                {/* Sección de título y descripción - Versión de escritorio */}
                <div className="hidden lg:grid grid-cols-1 gap-4 items-center mb-32">
                    <div className="w-full flex items-center justify-between text-center lg:text-left">
                        <h2
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
                        <span
                            className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    self-start
                                    font-medium
                                `}
                        >
                            +5
                        </span>
                    </div>
                    <div className="flex justify-between items-center lg:items-center">
                        <p
                            className="text-gray-600"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                                lineHeight: "25px",
                            }}
                        >
                            Every detail counts, we believe in our team whom
                            stands out for our clients.
                        </p>
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: 200,
                                marginTop: "2px",
                                marginRight: "2%",
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
                        <span
                            className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                        >
                            +5
                        </span>
                        <span
                            style={{
                                fontSize: "15px",
                                fontWeight: 200,
                            }}
                        >
                            Years
                        </span>
                    </div>
                </div>

                {/* Grid de miembros del equipo */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
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
                <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 lg:mt-12">
                    {/* Proyectos */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div
                            className="lg:flex flex-row"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <span
                                className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                            >
                                +100
                            </span>
                        </div>
                        <span
                            className="text-gray-600 ml-[30%]"
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
                    <div className="flex flex-col items-center lg:items-end">
                        <div
                            className="lg:flex flex-row"
                            style={{
                                fontSize: "150px",
                            }}
                        >
                            <span
                                className={`
                                    text-[100px] 
                                    lg:text-[200px] 
                                    text-gray-700
                                    font-medium
                                `}
                            >
                                +85
                            </span>
                        </div>
                        <span
                            className="text-gray-600 self-center mr-[8%]"
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
