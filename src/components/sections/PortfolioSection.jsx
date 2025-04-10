import { Link } from "react-router-dom";

const PortfolioSection = () => {
    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            alt: "Portfolio item 1 - Laptop display",
            desktopSize: { width: 1119, height: 713 },
            mobileSize: { width: 358.69, height: 256 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://stiva.com"
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-2.png",
            alt: "Portfolio item 2 - Website on laptop",
            desktopSize: { width: 732, height: 713 },
            mobileSize: { width: 358.55, height: 418 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://gildre.com"
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-3.png",
            alt: "Portfolio item 3 - Mobile app",
            desktopSize: { width: 799, height: 817 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://bymomento.com"
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-4.png",
            alt: "Portfolio item 4 - Tablet website",
            desktopSize: { width: 1050, height: 817 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://agromod.com.mx"
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-5.png",
            alt: "Portfolio item 5 - Tablet app",
            desktopSize: { width: 924, height: 707 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://garzaduran.com"
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-6.png",
            alt: "Portfolio item 6 - Laptop display",
            desktopSize: { width: 924, height: 707 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://thinkws.mx"
        },
    ];

    const mobileItems = portfolioItems.filter((item) => item.showOnMobile);

    return (
        <section className="w-full bg-black py-16 md:py-24">
            <div className="w-[95%] mx-auto">
                {/* Texto introductorio */}
                <div className="text-center mb-6 md:mb-10">
                    {/* Párrafo con tamaños específicos */}
                    <p
                        className="text-white"
                        style={{
                            maxWidth: "650px",
                            margin: "0 auto",
                            marginBottom: "55px",
                        }}
                    >
                        <span
                            className="hidden lg:inline"
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: 1.5,
                            }}
                        >
                            Discover a collection of real-world examples of how
                            we transform ideas into impactful solutions
                        </span>
                        <span className="lg:hidden text-xs md:text-base">
                            Discover a collection of real-world examples of how
                            we transform ideas into impactful solutions
                        </span>
                    </p>

                    {/* Título con tamaños específicos */}
                    <h2 className="text-white mb-8 lg:mb-16">
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
                        <span className="lg:hidden lg:text-3xl md:text-2xl text-xl">
                            Portfolio - Explore Unique Ideas
                            <br />
                            Brought to Life
                        </span>
                    </h2>

                    {/* Botón para escritorio */}
                    <div className="hidden lg:block">
                        <Link
                            to="/portfolio"
                            className="flex mx-auto items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                            style={{
                                width: "170px",
                                height: "38.66px",
                                fontSize: "16.66px",
                                fontWeight: 400,
                                borderRadius: "12px",
                                lineHeight: "18px",
                            }}
                        >
                            See all projects
                        </Link>
                    </div>

                    {/* Botón para móvil */}
                    <div className="lg:hidden">
                        <Link
                            to="/portfolio"
                            className="flex mx-auto items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                            style={{
                                width: "87px",
                                height: "22px",
                                fontSize: "10px",
                                fontWeight: 400,
                                borderRadius: "5px",
                            }}
                        >
                            See all projects
                        </Link>
                    </div>
                </div>

                {/* Versión Desktop - Layout personalizado */}
                <div className="hidden lg:block mt-12">
                    {/* Primera fila - 2 elementos */}
                    <div className="flex gap-6 mb-6">
                        {/* Primer elemento - más grande */}
                        <a
                            href={portfolioItems[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>

                        {/* Segundo elemento */}
                        <a
                            href={portfolioItems[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>
                    </div>

                    {/* Segunda fila - 2 elementos */}
                    <div className="flex gap-6 mb-6">
                        {/* Tercer elemento */}
                        <a
                            href={portfolioItems[2].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>

                        {/* Cuarto elemento - más grande */}
                        <a
                            href={portfolioItems[3].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>
                    </div>

                    {/* Tercera fila - 2 elementos */}
                    <div className="flex gap-6">
                        {/* Quinto elemento */}
                        <a
                            href={portfolioItems[4].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>

                        {/* Sexto elemento */}
                        <a
                            href={portfolioItems[5].link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>
                    </div>
                </div>

                {/* Versión móvil - una columna */}
                <div className="lg:hidden flex flex-col gap-5 space-y-6 mt-12">
                    {mobileItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
