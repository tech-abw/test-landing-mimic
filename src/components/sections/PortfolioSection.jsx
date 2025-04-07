import { Link } from "react-router-dom";

const PortfolioSection = () => {
    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            alt: "Portfolio item 1 - Laptop display",
            desktopSize: { width: 666, height: 475 },
            mobileSize: { width: 358.69, height: 256 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-2.png",
            alt: "Portfolio item 2 - Website on laptop",
            desktopSize: { width: 408, height: 475 },
            mobileSize: { width: 358.55, height: 418 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-3.png",
            alt: "Portfolio item 3 - Mobile app",
            desktopSize: { width: 452, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-4.png",
            alt: "Portfolio item 4 - Tablet website",
            desktopSize: { width: 622, height: 545 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-5.png",
            alt: "Portfolio item 5 - Tablet app",
            desktopSize: { width: 452, height: 390 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-6.png",
            alt: "Portfolio item 6 - Laptop display",
            desktopSize: { width: 630, height: 471 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
        },
    ];

    const mobileItems = portfolioItems.filter((item) => item.showOnMobile);

    return (
        <section className="w-full bg-black py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Texto introductorio */}
                <div className="text-center mb-6 md:mb-10">
                    {/* Párrafo con tamaños específicos */}
                    <p
                        className="text-white"
                        style={{
                            maxWidth: "650px",
                            margin: "0 auto0",
                            marginBottom: "35px",
                        }}
                    >
                        <span
                            className="hidden md:inline"
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "20px",
                            }}
                        >
                            Discover a collection of real-world examples of how
                            we transform ideas into impactful solutions
                        </span>
                        <span
                            className="md:hidden"
                            style={{
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "16px",
                            }}
                        >
                            Discover a collection of real-world examples of how
                            we transform ideas into impactful solutions
                        </span>
                    </p>

                    {/* Título con tamaños específicos */}
                    <h2 className="text-white mb-8">
                        <span
                            className="hidden lg:inline"
                            style={{
                                fontSize: "65px",
                                fontWeight: 400,
                                lineHeight: "65px",
                            }}
                        >
                            Portfolio - Explore Unique Ideas
                            <br />
                            Brought to Life
                        </span>
                        <span className="lg:hidden md:text-3xl text-xl">
                            Portfolio - Explore Unique Ideas
                            <br />
                            Brought to Life
                        </span>
                    </h2>

                    {/* Botón para escritorio */}
                    <div className="hidden md:block">
                        <Link to="/portfolio">
                            <button
                                className="bg-neon-green text-black hover:bg-opacity-90 transition-all md:mt-3 lg:mt-6"
                                style={{
                                    width: "256px",
                                    height: "58px",
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    borderRadius: "12px",
                                    lineHeight: "20px",
                                }}
                            >
                                See all projects
                            </button>
                        </Link>
                    </div>

                    {/* Botón para móvil */}
                    <div className="md:hidden">
                        <Link to="/portfolio">
                            <button
                                className="bg-neon-green text-black hover:bg-opacity-90 transition-all"
                                style={{
                                    width: "162px",
                                    height: "40px",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    borderRadius: "5px",
                                    lineHeight: "15px",
                                }}
                            >
                                See all projects
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Versión Desktop - Layout personalizado */}
                <div className="hidden lg:block mt-12">
                    {/* Primera fila - 2 elementos */}
                    <div className="flex justify-center gap-6 mb-6">
                        {/* Primer elemento - más grande */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[0].borderRadius.desktop}px`,
                                width: `${portfolioItems[0].desktopSize.width}px`,
                                height: `${portfolioItems[0].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[0].image}
                                alt={portfolioItems[0].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Segundo elemento */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[1].borderRadius.desktop}px`,
                                width: `${portfolioItems[1].desktopSize.width}px`,
                                height: `${portfolioItems[1].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[1].image}
                                alt={portfolioItems[1].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Segunda fila - 2 elementos */}
                    <div className="flex justify-center gap-6 mb-6">
                        {/* Tercer elemento */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[2].borderRadius.desktop}px`,
                                width: `${portfolioItems[2].desktopSize.width}px`,
                                height: `${portfolioItems[2].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[2].image}
                                alt={portfolioItems[2].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Cuarto elemento - más grande */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[3].borderRadius.desktop}px`,
                                width: `${portfolioItems[3].desktopSize.width}px`,
                                height: `${portfolioItems[3].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[3].image}
                                alt={portfolioItems[3].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Tercera fila - 2 elementos */}
                    <div className="flex justify-center gap-6">
                        {/* Quinto elemento */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[4].borderRadius.desktop}px`,
                                width: `${portfolioItems[4].desktopSize.width}px`,
                                height: `${portfolioItems[4].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[4].image}
                                alt={portfolioItems[4].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Sexto elemento */}
                        <div
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[5].borderRadius.desktop}px`,
                                width: `${portfolioItems[5].desktopSize.width}px`,
                                height: `${portfolioItems[5].desktopSize.height}px`,
                            }}
                        >
                            <img
                                src={portfolioItems[5].image}
                                alt={portfolioItems[5].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil - una columna */}
                <div className="lg:hidden flex flex-col space-y-6 mt-12">
                    {mobileItems.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${item.borderRadius.mobile}px`,
                                width: `${item.mobileSize.width}px`,
                                height: `${item.mobileSize.height}px`,
                                maxWidth: "100%",
                                margin: "0 auto",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
