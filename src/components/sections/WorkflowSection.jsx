import React from "react";

const WorkflowSection = () => {
    const workflowSteps = [
        {
            id: "1",
            title: "Discovery",
            description:
                "During a video call we map the specifics of each project to understand every detail.",
            bgColor: "bg-black",
            textColor: "text-white",
            image: "/images/workflow/image1.png",
            imageSize: { width: "110px", height: "110px" },
        },
        {
            id: "2",
            title: "Set-up",
            description:
                "To get started. We develop a Project brief, Gantt chart and a project Roadmap.",
            bgColor: "bg-neon-green",
            textColor: "text-black",
            image: "/images/workflow/setup.png",
            imageSize: { width: "80px", height: "80px" },
        },
        {
            id: "3",
            title: "Visualization and meetings",
            description:
                "During the project we have specific meetings depending on the phase of the project, and we share the progress of the project with you and your team.",
            bgColor: "bg-neon-green",
            textColor: "text-black",
            image: "/images/workflow/meetings.png",
            imageSize: { width: "80px", height: "80px" },
        },
        {
            id: "4",
            title: "Reviews, testing and delivery",
            description:
                "We are commited with your final satisfaction, we go through your reviews, test the products and deliver in time and shape.",
            bgColor: "bg-neon-green",
            textColor: "text-black",
            image: "/images/workflow/delivery.png",
            imageSize: { width: "80px", height: "80px" },
        },
    ];

    return (
        <section className="w-full bg-gray py-24 relative">
            {/* Línea vertical superior */}
            <div
                className="relative hidden lg:block"
                style={{
                    left: "50%",
                    width: "1px",
                    marginTop: "0px",
                    marginBottom: "40px",
                    height: "100px",
                    backgroundColor: "#000",
                    transform: "translateX(-50%)",
                }}
            ></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="lg:mb-10 mb-5">
                        <span
                            className="hidden lg:inline"
                            style={{
                                fontSize: "65px",
                                fontWeight: 400,
                                lineHeight: "65px",
                            }}
                        >
                            How it works - Our
                            <br />
                            Streamlined Workflow
                        </span>
                        <span className="lg:hidden md:text-4xl text-3xl">
                            How it works - Our
                            <br />
                            Streamlined Workflow
                        </span>
                    </h2>
                    <p className="text-center mx-auto">
                        <span
                            className="hidden lg:inline"
                            style={{
                                fontSize: "25px",
                                fontWeight: 500,
                                maxWidth: "800px",
                                lineHeight: "25px",
                            }}
                        >
                            Our workflow makes it simple and easy to work the
                            best possible together.
                        </span>
                        <span
                            className="lg:hidden"
                            style={{ fontSize: "16px", fontWeight: 500 }}
                        >
                            Our workflow makes it simple and easy to work the
                            best possible together.
                        </span>
                    </p>
                </div>

                {/* Versión desktop */}
                <div className="hidden lg:flex justify-center gap-8">
                    {workflowSteps.map((step) => (
                        <div
                            key={step.id}
                            className={`${step.bgColor} ${step.textColor} p-8 flex flex-col items-center text-center`}
                            style={{
                                width: "403px",
                                height: "519px",
                                borderRadius: "36px",
                            }}
                        >
                            <div
                                className="flex justify-center items-center mb-6 mt-8"
                                style={{ height: "100px" }}
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                        width: step.imageSize.width,
                                        height: step.imageSize.height,
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            <h3
                                className="font-bold mb-6"
                                style={{ fontSize: "30px", lineHeight: "30px" }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    lineHeight: "20px",
                                    marginTop: "25px",
                                }}
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Versión móvil */}
                <div className="lg:hidden space-y-8">
                    {workflowSteps.map((step) => (
                        <div
                            key={step.id}
                            className={`${step.bgColor} ${step.textColor} p-6 flex flex-col items-center text-center mx-auto`}
                            style={{
                                width: "328px",
                                height: "303px",
                                maxWidth: "100%",
                                borderRadius: "32px",
                            }}
                        >
                            <div
                                className="flex justify-center items-center mb-4 mt-4"
                                style={{ height: "70px" }}
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                        width: `calc(${step.imageSize.width} * 0.7)`,
                                        height: `calc(${step.imageSize.height} * 0.7)`,
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            <h3
                                className="font-bold mb-3"
                                style={{ fontSize: "23px" }}
                            >
                                {step.title}
                            </h3>
                            <p style={{ fontSize: "14px", fontWeight: 500 }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Línea vertical inferior */}
            <div
                className="relative hidden lg:block"
                style={{
                    top: "50px",
                    left: "50%",
                    width: "1px",
                    height: "100px",
                    marginTop: "40px",
                    marginBottom: "0px",
                    backgroundColor: "#000",
                    transform: "translateX(-50%)",
                }}
            ></div>
        </section>
    );
};

export default WorkflowSection;
