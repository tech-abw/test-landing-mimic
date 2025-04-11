/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({
    title = "Innovation begins\nwith imitation",
    description = "At Mimic, we specialize in crafting bespoke digital solutions tailored to elevate your brand's online presence and engage your audience effectively. Let's connect.",
    backgroundImage = "/images/Hero.png",
    mobileBackgroundImage,
    buttonText = "Start here",
    buttonLink = "/contact",
    desktopTitleFontSize = "64px",
    desktopDescriptionFontSize = "20px",
    mobileTitleFontSize = "50px",
    mobileDescriptionFontSize = "20px",
}) => {
    return (
        <section className="relative w-full overflow-hidden bg-gray pt-20">
            {/* Imagen de fondo - versión desktop y móvil */}
            <div className="relative w-[95%] mx-auto">
                {/* Versión desktop */}
                <div
                    className="hidden lg:block relative overflow-hidden"
                    style={{
                        maxWidth: "1790px",
                        height: "90vh",
                        margin: "0 auto",
                        borderRadius: "40px",
                    }}
                >
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-full bg-cover"
                    />

                    {/* Contenido superpuesto - desktop */}
                    <div
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ paddingLeft: "70px" }}
                    >
                        <motion.h1
                            className="text-white mb-6 leading-tight w-[50%]"
                            style={{
                                fontSize: desktopTitleFontSize,
                                fontWeight: 400,
                                lineHeight: desktopTitleFontSize,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            {title.split("\n").map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </motion.h1>

                        <motion.p
                            className="text-white mb-14 max-w-md"
                            style={{
                                fontSize: desktopDescriptionFontSize,
                                fontWeight: 500,
                                lineHeight: "1.5",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <Link
                                to={buttonLink}
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
                                {buttonText}
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Versión móvil */}
                <div
                    className="block lg:hidden w-full relative overflow-hidden"
                    style={{
                        maxWidth: "800px",
                        height: "90vh",
                        margin: "0 auto",
                        borderRadius: "16px",
                    }}
                >
                    <img
                        src={mobileBackgroundImage || backgroundImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* Capa de opacidad */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                    {/* Contenido superpuesto - móvil */}
                    <div className="absolute inset-0 flex flex-col justify-center p-8">
                        <motion.h1
                            className="text-white mb-8 leading-tight"
                            style={{
                                fontSize: mobileTitleFontSize,
                                fontWeight: 400,
                                lineHeight: mobileTitleFontSize,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {title.split("\n").map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </motion.h1>

                        <motion.p
                            className="text-white mb-10 max-w-xs"
                            style={{
                                fontSize: mobileDescriptionFontSize,
                                fontWeight: 500,
                                lineHeight: "1.5",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link
                                to={buttonLink}
                                className="flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                                style={{
                                    width: "120px",
                                    height: "28px",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    borderRadius: "5px",
                                }}
                            >
                                {buttonText}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
