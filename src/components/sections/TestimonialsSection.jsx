import React, { useState } from "react";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "John Doe",
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            name: "Ivan",
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "Martin",
        },
    ];

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full bg-white py-10 lg:mb-24 lg:py-10 relative">
            <div className="w-[95%] h-full mx-auto px-4">
                {/* Layout para móvil */}
                <div className="block lg:hidden ">
                    <h2 className="text-black mb-8 md:text-4xl text-3xl leading-none">
                        Hear From tens of
                        <br />
                        Clients
                    </h2>
                    <p
                        className="text-black mb-8"
                        style={{
                            fontSize: "18px",
                            fontWeight: 400,
                            maxWidth: "300px",
                            lineHeight: "18px",
                        }}
                    >
                        Discover what satisfied clients have to say about their
                        experience with our service solutions.
                    </p>

                    <div className="max-w-2xl mx-auto relative mt-16 lg:mt-0">
                        <div
                            className="bg-white rounded-2xl p-8"
                            style={{
                                minHeight: "200px",
                                border: "1px solid #000",
                            }}
                        >
                            <p
                                className="mb-4"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    textAlign: "left",
                                }}
                            >
                                {testimonials[currentTestimonial].text}
                            </p>
                            <p
                                className="font-bold text-start"
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "18px",
                                }}
                            >
                                {testimonials[currentTestimonial].name}
                            </p>
                        </div>

                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                            >
                                <img
                                    src="/images/izquierda.svg"
                                    alt="Flecha izquierda"
                                    className="w-full h-full"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                }}
                            >
                                <img
                                    src="/images/derecha.svg"
                                    alt="Flecha derecha"
                                    className="w-full h-full"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Layout para escritorio */}
                <div
                    className="hidden lg:grid grid-cols-2 gap-16"
                    style={{
                        minHeight: "900px",
                    }}
                >
                    {/* Columna izquierda - Título y descripción */}
                    <div className="self-start pt-24">
                        <h2
                            className="text-black mb-4"
                            style={{
                                fontSize: "73px",
                                fontWeight: 400,
                                lineHeight: "73px",
                            }}
                        >
                            Hear From tens of
                            <br />
                            Clients
                        </h2>
                        <p
                            className="text-black mt-10"
                            style={{
                                fontSize: "25px",
                                fontWeight: 300,
                            }}
                        >
                            Discover what satisfied clients have to say about
                            their experience with our service solutions.
                        </p>
                    </div>

                    {/* Columna derecha - Testimonios y navegación */}
                    <div className="self-end flex flex-col items-center">
                        <div
                            className="bg-white p-8 text-center w-full flex flex-col justify-center"
                            style={{
                                borderRadius: "62px",
                                minHeight: "500px",
                                border: "1px solid #000",
                                marginBottom: "24px",
                            }}
                        >
                            <p
                                className="mb-4"
                                style={{
                                    fontSize: "29px",
                                    fontWeight: 200,
                                    lineHeight: 1.5,
                                    textAlign: "left",
                                }}
                            >
                                {testimonials[currentTestimonial].text}
                            </p>
                            <p
                                className="font-bold text-start mt-12"
                                style={{
                                    fontSize: "25px",
                                }}
                            >
                                {testimonials[currentTestimonial].name}
                            </p>
                        </div>

                        <div className="flex space-x-4 self-end mr-1">
                            <button
                                onClick={handlePrev}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "59.33px",
                                    height: "59.33px",
                                    borderRadius: "12px",
                                }}
                            >
                                <img
                                    src="/images/izquierda.svg"
                                    alt="Flecha izquierda"
                                    className="w-[35px] h-[35px]"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "59.33px",
                                    height: "59.33px",
                                    borderRadius: "12px",
                                }}
                            >
                                <img
                                    src="/images/derecha.svg"
                                    alt="Flecha derecha"
                                    className="w-[35px] h-[35px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
