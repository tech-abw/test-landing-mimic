/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = ({
    title,
    description,
    backgroundImage = "/images/Hero.png",
    mobileBackgroundImage,
    buttonText,
    buttonLink = "/contact",
    desktopTitleFontSize = "64px",
    desktopDescriptionFontSize = "20px",
    mobileTitleFontSize = "50px",
    mobileDescriptionFontSize = "20px",
}) => {
    const { t } = useTranslation();

    // Estilos para el contenedor de la imagen de fondo
    const backgroundContainerStyle = {
        maxWidth: "1790px",
        height: "90vh",
        margin: "0 auto",
        borderRadius: "40px",
    };

    const mobileBackgroundContainerStyle = {
        ...backgroundContainerStyle,
        maxWidth: "800px",
        borderRadius: "16px",
    };

    return (
        <section className="relative w-full overflow-hidden bg-gray pt-20">
            <div className="relative w-[95%] mx-auto">
                {/* Contenedor de fondo para ambas vistas */}
                <div
                    className="hidden lg:block relative overflow-hidden"
                    style={backgroundContainerStyle}
                >
                    <img
                        src={backgroundImage}
                        alt={title || t("hero_title")}
                        className="w-full h-full bg-cover"
                    />
                </div>
                <div
                    className="block lg:hidden w-full relative overflow-hidden"
                    style={mobileBackgroundContainerStyle}
                >
                    <img
                        src={mobileBackgroundImage || backgroundImage}
                        alt={title || t("hero_title")}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* Contenido superpuesto */}
                <div className="absolute inset-0 flex flex-col justify-center lg:p-0 p-8 lg:items-start items-center text-center lg:text-left">
                    <div className="lg:pl-[70px] w-full lg:w-auto">
                        <motion.h1
                            className="text-white mb-6 leading-tight lg:w-[50%]"
                            style={{
                                fontSize: `var(--desktop-title-fs, ${desktopTitleFontSize})`,
                                fontWeight: 400,
                                lineHeight: `var(--desktop-title-lh, ${desktopTitleFontSize})`,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            {(title || t('hero_title')).split("\n").map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </motion.h1>

                        <motion.p
                            className="text-white mb-14 max-w-md"
                            style={{
                                fontSize: `var(--desktop-desc-fs, ${desktopDescriptionFontSize})`,
                                fontWeight: 500,
                                lineHeight: "1.5",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {description || t('hero_description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <Link
                                to={buttonLink}
                                className="btn-hero"
                            >
                                {buttonText || t('hero_button')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
