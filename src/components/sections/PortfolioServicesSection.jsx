/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PortfolioServicesSection = () => {
    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            alt: "Portfolio item 1 - Laptop display",
            desktopSize: { width: 650, height: 545 },
            mobileSize: { width: 358.69, height: 256 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://stiva.com"
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-8.png",
            alt: "Portfolio item 2 - Website on laptop",
            desktopSize: { width: 580, height: 545 },
            mobileSize: { width: 358.55, height: 418 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://cordeliaruiz.com"
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-2.png",
            alt: "Portfolio item 3 - Mobile app",
            desktopSize: { width: 620, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://gildre.com"
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-3.png",
            alt: "Portfolio item 4 - Tablet website",
            desktopSize: { width: 410, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://bymomento.com"
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-4.png",
            alt: "Portfolio item 5 - Tablet app",
            desktopSize: { width: 720, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://agromod.com.mx"
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-10.png",
            alt: "Portfolio item 6 - Laptop display",
            desktopSize: { width: 650, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://innovalaw.com.mx"
        },
        {
            id: 7,
            image: "/images/portfolio/portfolio-7.png",
            alt: "Portfolio item 7 - Mobile design",
            desktopSize: { width: 750, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://epesos.com"
        },
        {
            id: 8,
            image: "/images/portfolio/portfolio-5.png",
            alt: "Portfolio item 8 - Web interface",
            desktopSize: { width: 860, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://garzaduran.com"
        },
        {
            id: 9,
            image: "/images/portfolio/portfolio-6.png",
            alt: "Portfolio item 9 - Dashboard design",
            desktopSize: { width: 690, height: 545 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://thinkws.mx"
        },
    ];

    const mobileItems = portfolioItems.filter((item) => item.showOnMobile);

    return (
        <section className="w-full bg-black py-16 md:py-24">
            <div className="w-[95%] mx-auto">
                {/* Texto introductorio */}
                <motion.div 
                    className="text-center mb-6 md:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Título con tamaños específicos */}
                    <h2 className="text-white mb-8">
                        <motion.span
                            className="hidden lg:inline"
                            style={{
                                fontSize: "65px",
                                fontWeight: 400,
                                lineHeight: "65px",
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Portfolio - Explore Unique Ideas
                            <br />
                            Brought to Life
                        </motion.span>
                        <motion.span 
                            className="lg:hidden md:text-3xl text-3xl leading-none"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Portfolio - Explore Unique Ideas
                            Brought to Life
                        </motion.span>
                    </h2>
                </motion.div>

                {/* Versión Desktop - Layout personalizado */}
                <div className="hidden lg:block mt-12">
                    {/* Primera fila - 3 elementos */}
                    <div className="flex justify-center gap-6 mb-6">
                        {portfolioItems.slice(0, 3).map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overflow-hidden"
                                style={{
                                    borderRadius: `${item.borderRadius.desktop}px`,
                                    width: `${item.desktopSize.width}px`,
                                    height: `${item.desktopSize.height}px`,
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Segunda fila - 3 elementos */}
                    <div className="flex justify-center gap-6 mb-6">
                        {portfolioItems.slice(3, 6).map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overflow-hidden"
                                style={{
                                    borderRadius: `${item.borderRadius.desktop}px`,
                                    width: `${item.desktopSize.width}px`,
                                    height: `${item.desktopSize.height}px`,
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Tercera fila - 3 elementos */}
                    <div className="flex justify-center gap-6">
                        {portfolioItems.slice(6, 9).map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overflow-hidden"
                                style={{
                                    borderRadius: `${item.borderRadius.desktop}px`,
                                    width: `${item.desktopSize.width}px`,
                                    height: `${item.desktopSize.height}px`,
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Versión móvil - una columna */}
                <div className="lg:hidden flex flex-col space-y-6 mt-12 gap-6">
                    {mobileItems.map((item, index) => (
                        <motion.a
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-30px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Botón para escritorio */}
                <motion.div 
                    className="hidden lg:flex justify-center mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Link
                            to="/portfolio"
                            className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
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
                    </motion.div>
                </motion.div>

                {/* Botón para móvil */}
                <motion.div 
                    className="lg:hidden text-center flex justify-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Link
                            to="/portfolio"
                            className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                            style={{
                                width: "120px",
                                height: "28px",
                                fontSize: "14px",
                                fontWeight: 400,
                                borderRadius: "5px",
                            }}
                        >
                            See all projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioServicesSection;
