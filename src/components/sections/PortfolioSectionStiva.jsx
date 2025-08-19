/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const portfolioItems = [
        {
            id: 1,
            image: "/images/portfolio/portfolio-1.png",
            alt: t("portfolio_item_1_alt"),
            desktopSize: { width: 1119, height: 713 },
            mobileSize: { width: 358.69, height: 256 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://stiva.com"
        },
        {
            id: 2,
            image: "/images/portfolio/portfolio-2.png",
            alt: t("portfolio_item_2_alt"),
            desktopSize: { width: 732, height: 713 },
            mobileSize: { width: 358.55, height: 418 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://gildre.com"
        },
        {
            id: 3,
            image: "/images/portfolio/portfolio-3.png",
            alt: t("portfolio_item_3_alt"),
            desktopSize: { width: 799, height: 817 },
            mobileSize: { width: 359, height: 433 },
            borderRadius: { desktop: 38, mobile: 32 },
            showOnMobile: true,
            link: "https://bymomento.com"
        },
        {
            id: 4,
            image: "/images/portfolio/portfolio-4.png",
            alt: t("portfolio_item_4_alt"),
            desktopSize: { width: 1050, height: 817 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://agromod.com.mx"
        },
        {
            id: 5,
            image: "/images/portfolio/portfolio-5.png",
            alt: t("portfolio_item_5_alt"),
            desktopSize: { width: 924, height: 707 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://garzaduran.com"
        },
        {
            id: 6,
            image: "/images/portfolio/portfolio-6.png",
            alt: t("portfolio_item_6_alt"),
            desktopSize: { width: 924, height: 707 },
            borderRadius: { desktop: 38 },
            showOnMobile: false,
            link: "https://thinkws.mx"
        },
    ];

    const mobileItems = portfolioItems.filter((item) => item.showOnMobile);

    return (
        <section className="w-full bg-white py-10 md:py-24">
            <div className="w-[95%] mx-auto">
                
                {/* Versión Desktop - Layout personalizado */}
                <div className="hidden lg:block mt-12">
                    {/* Primera fila - 2 elementos */}
                    <div className="flex gap-6 mb-6">
                        {/* Primer elemento - más grande */}
                        <motion.a
                            href={portfolioItems[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[0].borderRadius.desktop}px`,
                                width: `${portfolioItems[0].desktopSize.width}px`,
                                height: `${portfolioItems[0].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[0].image}
                                alt={portfolioItems[0].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>

                        {/* Segundo elemento */}
                        <motion.a
                            href={portfolioItems[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[1].borderRadius.desktop}px`,
                                width: `${portfolioItems[1].desktopSize.width}px`,
                                height: `${portfolioItems[1].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[1].image}
                                alt={portfolioItems[1].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>
                    </div>

                    {/* Segunda fila - 2 elementos */}
                    <div className="flex gap-6 mb-6">
                        {/* Tercer elemento */}
                        <motion.a
                            href={portfolioItems[2].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[2].borderRadius.desktop}px`,
                                width: `${portfolioItems[2].desktopSize.width}px`,
                                height: `${portfolioItems[2].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[2].image}
                                alt={portfolioItems[2].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>

                        {/* Cuarto elemento - más grande */}
                        <motion.a
                            href={portfolioItems[3].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[3].borderRadius.desktop}px`,
                                width: `${portfolioItems[3].desktopSize.width}px`,
                                height: `${portfolioItems[3].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[3].image}
                                alt={portfolioItems[3].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>
                    </div>

                    {/* Tercera fila - 2 elementos */}
                    <div className="flex gap-6">
                        {/* Quinto elemento */}
                        <motion.a
                            href={portfolioItems[4].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[4].borderRadius.desktop}px`,
                                width: `${portfolioItems[4].desktopSize.width}px`,
                                height: `${portfolioItems[4].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[4].image}
                                alt={portfolioItems[4].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>

                        {/* Sexto elemento */}
                        <motion.a
                            href={portfolioItems[5].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                            style={{
                                borderRadius: `${portfolioItems[5].borderRadius.desktop}px`,
                                width: `${portfolioItems[5].desktopSize.width}px`,
                                height: `${portfolioItems[5].desktopSize.height}px`,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <img
                                src={portfolioItems[5].image}
                                alt={portfolioItems[5].alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.a>
                    </div>
                </div>

                {/* Versión móvil - una columna */}
                <div className="lg:hidden flex flex-col gap-5 space-y-6 mt-12">
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
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
            </div>
        </section>
    );
};

export default PortfolioSection;
