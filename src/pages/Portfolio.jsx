import React from "react";

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            width: { desktop: 70, mobile: 100 },
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-2.png",
            width: { desktop: 30, mobile: 100 },
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-3.png",
            width: { desktop: 35, mobile: 100 },
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-4.png",
            width: { desktop: 65, mobile: 100 },
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-5.png",
            width: { desktop: 40, mobile: 100 },
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-6.png",
            width: { desktop: 60, mobile: 100 },
        },
        {
            id: 7,
            image: "/images/portfolio/portfolio-7.png",
            width: { desktop: 50, mobile: 100 },
        },
        {
            id: 8,
            image: "/images/portfolio/portfolio-8.png",
            width: { desktop: 50, mobile: 100 },
        },
        {
            id: 9,
            image: "/images/portfolio/portfolio-9.png",
            width: { desktop: 45, mobile: 100 },
        },
        {
            id: 10,
            image: "/images/portfolio/portfolio-10.png",
            width: { desktop: 55, mobile: 100 },
        },
        {
            id: 11,
            image: "/images/portfolio/portfolio-11.png",
            width: { desktop: 60, mobile: 100 },
        },
        {
            id: 12,
            image: "/images/portfolio/portfolio-12.png",
            width: { desktop: 40, mobile: 100 },
        },
        {
            id: 13,
            image: "/images/portfolio/portfolio-13.png",
            width: { desktop: 55, mobile: 100 },
        },
        {
            id: 14,
            image: "/images/portfolio/portfolio-14.png",
            width: { desktop: 45, mobile: 100 },
        },
    ];

    return (
        <div className="bg-white text-black md:mt-16">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-2xl md:text-5xl mt-10 md:w-3/4 md:flex-1">
                    Transform ideas into unique digital experiences through
                    innovative design and cutting-edge technology.
                </h1>

                <h1 className="text-xl md:text-4xl pb-1 border-b border-black/30 md:flex-1 mt-16 mb-16 md:mt-28 md:mb-24">
                    Our work
                </h1>

                {/* Desktop Layout */}
                <div className="hidden md:block space-y-8 md:mb-24">
                    {[0, 2, 4, 6, 8, 10, 12].map((startIndex) => (
                        <div key={startIndex} className="flex gap-8 w-full">
                            <div
                                className="overflow-hidden transition-all duration-300 hover:scale-105"
                                style={{
                                    width: `${portfolioItems[startIndex].width.desktop}%`,
                                    borderRadius: "20px",
                                }}
                            >
                                <img
                                    src={portfolioItems[startIndex].image}
                                    alt={`Portfolio item ${startIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="overflow-hidden transition-all duration-300 hover:scale-105"
                                style={{
                                    width: `${
                                        portfolioItems[startIndex + 1].width
                                            .desktop
                                    }%`,
                                    borderRadius: "20px",
                                }}
                            >
                                <img
                                    src={portfolioItems[startIndex + 1].image}
                                    alt={`Portfolio item ${startIndex + 2}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-6">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={`Portfolio item ${item.id}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
