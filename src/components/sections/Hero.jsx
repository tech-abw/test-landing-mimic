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

    return (
        <div className="w-full bg-gray pt-20">
            <section className="relative w-[95%] h-[calc(100vh-5rem)] mx-auto rounded-[40px] overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={backgroundImage}
                        alt={title || t("hero_title")}
                        className="hidden lg:block w-full h-full object-cover"
                    />
                    <img
                        src={mobileBackgroundImage || backgroundImage}
                        alt={title || t("hero_title")}
                        className="block lg:hidden w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 lg:hidden"></div>
                </div>

                {/* Desktop Content */}
                <div className="hidden lg:flex absolute inset-0 flex-col justify-center pl-[70px] py-32">
                    <motion.h1
                        className="text-white mb-6 leading-tight w-[50%]"
                        style={{ fontSize: desktopTitleFontSize, fontWeight: 400, lineHeight: desktopTitleFontSize }}
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
                        style={{ fontSize: desktopDescriptionFontSize, fontWeight: 500, lineHeight: "1.5" }}
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
                    >
                        <Link to={buttonLink} className="btn-hero">
                            {buttonText || t('hero_button')}
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Content */}
                <div className="lg:hidden absolute inset-0 flex flex-col justify-center items-start text-left p-8 py-32">
                     <motion.h1
                        className="text-white mb-8 leading-tight"
                        style={{ fontSize: mobileTitleFontSize, fontWeight: 400, lineHeight: mobileTitleFontSize }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {(title || t('hero_title')).split("\n").map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </motion.h1>
                    <motion.p
                        className="text-white mb-10 max-w-xs"
                        style={{ fontSize: mobileDescriptionFontSize, fontWeight: 500, lineHeight: "1.5" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {description || t('hero_description')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link to={buttonLink} className="btn-hero">
                            {buttonText || t('hero_button')}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hero;

