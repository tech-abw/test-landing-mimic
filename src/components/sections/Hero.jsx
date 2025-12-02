/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = ({
    title,
    description,
    backgroundImage = "/images/HERO-BANNER2.webp",
    mobileBackgroundImage,
    buttonText,
    buttonLink = "/contact",
    desktopTitleFontSize = "55px",
    desktopDescriptionFontSize = "20px",
    mobileTitleFontSize = "50px",
    mobileDescriptionFontSize = "20px",
}) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full bg-gray pt-16">
            <section className="relative w-[90%] sm:w-[98%] h-[calc(100vh-5rem)] mx-auto rounded-[10px] overflow-hidden">
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
    style={{ fontSize: desktopTitleFontSize, fontWeight: 400, lineHeight: "55px" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {(title || t('hero_title')).split("\n").map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </motion.h1>
  <motion.p
  className="text-white mb-6 w-[50%]"
  style={{
    fontSize: desktopDescriptionFontSize,
    fontWeight: 400,
    lineHeight: "1.6", // más natural que 55px
    letterSpacing: "0.01em", // mejora legibilidad
    maxWidth: "30%"
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  {description || t('hero_description')}
</motion.p>


  <motion.div
  className="flex gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.3 }}
>
  {/* Botón Cotiza */}
  <Link to={buttonLink} target="_blank" rel="noopener noreferrer">
    <button className="w-[200px] h-[51px] px-4 flex items-center justify-center bg-lime-400 text-black  rounded-md hover:bg-gray-800 transition-all duration-300">
      {buttonText || t('hero_button')}
    </button>
  </Link>

  {/* Botón WhatsApp */}
  { i18n.language.startsWith("es") && (


  <a 
    href="https://wa.me/528120268946?text=Hola%20quiero%20más%20información" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="w-[200px] h-[53px] px-4 flex items-center justify-center gap-2 bg-black text-lime-400  rounded-md hover:bg-gray-800 transition-all duration-300">
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 256 256" 
    fill="currentColor" 
    className="w-6 h-6 text-lime-400"
  >
        <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"/>
        </svg>
      81 2026 8946
    </button>
  </a>
)}
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
                        <Link to={buttonLink} className="w-[200px] mb-2 h-[51px] px-4 flex items-center justify-center gap-2 bg-lime-400 text-black  rounded-md hover:bg-gray-800 transition-all duration-300"target="_blank" rel="noopener noreferrer">
                            {buttonText || t('hero_button')}
                        </Link>
                        { i18n.language.startsWith("es") && (


                <a 
                href="https://wa.me/528120268946?text=Hola%20quiero%20más%20información" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button className="w-[200px] h-[53px] px-4 flex items-center justify-center gap-2 bg-black text-lime-400  rounded-md hover:bg-gray-800 transition-all duration-300 py-2">
                <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 256 256" 
    fill="currentColor" 
    className="w-6 h-6 text-lime-400"
  >
                <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"/>
                </svg>
                81 2026 8946
                </button>
                </a>
            )}

                </motion.div>
            </div>
        </section>
    </div>
    );
};

export default Hero;

