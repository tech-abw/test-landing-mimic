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
        <section className="w-full bg-white py-24 md:py-44 relative">
            <div className="container mx-auto px-4">
                {/* Layout para móvil */}
                <div className="block md:hidden text-center">
                    <h2
                        className="text-black mb-4"
                        style={{
                            fontSize: "36px",
                            fontWeight: 400,
                            lineHeight: 1.2,
                        }}
                    >
                        Hear From tens of
                        <br />
                        Clients
                    </h2>
                    <p
                        className="text-black mb-8"
                        style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>

                    <div className="max-w-2xl mx-auto relative mt-10 md:mt-0">
                        <div
                            className="bg-white rounded-2xl p-8 text-center"
                            style={{
                                minHeight: "200px",
                                border: "1px solid #000",
                            }}
                        >
                            <p
                                className="mb-4"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: 1.5,
                                }}
                            >
                                {testimonials[currentTestimonial].text}
                            </p>
                            <p
                                className="font-bold"
                                style={{
                                    fontSize: "18px",
                                }}
                            >
                                {testimonials[currentTestimonial].name}
                            </p>
                        </div>

                        <div className="flex justify-center mt-6 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-neon-green text-black p-2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Layout para escritorio */}
                <div
                    className="hidden md:grid grid-cols-2 gap-16 items-start"
                    style={{
                        minHeight: "800px",
                    }}
                >
                    {/* Columna izquierda - Título y descripción */}
                    <div className="self-start pt-24">
                        <h2
                            className="text-black mb-4"
                            style={{
                                fontSize: "73px",
                                fontWeight: 200,
                                lineHeight: 1.2,
                            }}
                        >
                            Hear From tens of
                            <br />
                            Clients
                        </h2>
                        <p
                            className="text-black"
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
                            className="bg-white p-8 text-center w-full"
                            style={{
                                borderRadius: "62px",
                                minHeight: "200px",
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

                        <div className="flex space-x-4">
                            <button
                                onClick={handlePrev}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "89px",
                                    height: "89px",
                                    borderRadius: "12px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-neon-green text-black flex items-center justify-center"
                                style={{
                                    width: "89px",
                                    height: "89px",
                                    borderRadius: "12px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
