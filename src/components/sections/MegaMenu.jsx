import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo'; // Import the Logo component

const MegaMenu = ({ items, isMobileMenuOpen, toggleMenu, closeMenu, isDesktop, menuRef, buttonRef, handleLanguageChange }) => {
    const { t, i18n } = useTranslation();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleSubmenuEnter = (index) => {
        if (isDesktop) {
            setOpenSubmenu(index);
        }
    };

    const handleSubmenuLeave = () => {
        if (isDesktop) {
            setOpenSubmenu(null);
        }
    };

    const handleSubmenuClick = (index) => {
        if (!isDesktop) {
            setOpenSubmenu(openSubmenu === index ? null : index);
        }
    };
    
      
    const menuVariants = {
        hidden: {
          opacity: 0,
          scale: 0.97,
          y: -6,
          transition: {
            duration: 0.8,       // ⏱️ salida más larga
            ease: [0.33, 1, 0.68, 1],  // curva suave tipo ease-out
          },
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,       // ⏱️ entrada rápida pero elegante
            ease: [0.25, 0.8, 0.25, 1],
          },
        },
      };

    return (
        <nav ref={menuRef} className="flex-grow flex justify-center items-center ">
            {/* Desktop Menu */}
            <ul className={`hidden lg:flex items-center space-x-4`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center"
                        onMouseEnter={() => handleSubmenuEnter(index)}
                        onMouseLeave={handleSubmenuLeave}
                    >
                        <li 
                            className="flex items-center" 
                        >
                            <Link to={item.path} onClick={handleSubmenuLeave} className="text-black hover:text-gray-600 transition-colors duration-300">
                                {t(item.name)}
                            </Link>
                            {index < items.length - 1 && (
                                <div
                                    className="bg-black mx-4"
                                    style={{ height: "16px", width: "1px" }}
                                ></div>
                            )}
                        </li>
                        <AnimatePresence>
                            {item.submenu && openSubmenu === index && (
                                <motion.div 
                                    className="fixed top-20 left-10 right-10 -translate-x-1/2  p-8 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={menuVariants}
                                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                                >
                                    <div className="w-full text-white flex justify-between items-start relative">
                                        {/* Pointer */}
                                        <div className="absolute -top-10 left-[51%] translate-x-0 w-0 h-0 
                                            border-l-[10px] border-l-transparent
                                            border-r-[10px] border-r-transparent
                                            border-b-[10px] border-b-black"></div>

                                        {/* Promotional Banner */}
                                        <div className="w-1/3 bg-stone-200 h-[120px]  bg-opacity-90 p-6 rounded-lg border border-lime-400 relative overflow-hidden">
                                        {/* Imagen que ocupa todo el div */}
                                        <img
                                            src="/images/BannersPromocional/banner-promocion.webp"
                                            alt="Banner promocional"
                                            className="absolute inset-0 w-full h-full object-fill"
                                        />                                    
                                        </div>
                                        {/* Links */}
                                        <div className="w-2/3 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
                                            {item.submenu.map((submenu, subIndex) => (
                                                <div key={subIndex}>
                                                    <h3 className="font-semibold text-lg text-white mb-4">{t(submenu.heading)}</h3>
                                                    <ul>
                                                        {submenu.links.map((link, linkIndex) => (
                                                            <li key={linkIndex} className="mb-3 flex items-center">
                                                                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                                                                <Link 
                                                                    to={link.path} 
                                                                    onClick={handleSubmenuLeave}
                                                                    className="text-white hover:text-gray-300 transition-colors duration-300"
                                                                >
                                                                    {t(link.name)}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden z-50" ref={buttonRef}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="fixed top-0 left-0 right-0 h-[80vh] bg-gray z-50 p-6 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-12 flex-shrink-0">
                            <Logo />
                            <div className="flex items-center gap-4">
                                <button className="bg-black text-lime-400 font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-all duration-300">
                                    {t('nav.start_here')}
                                </button>
                                <button onClick={closeMenu}>
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Menu List */}
                        <ul className="space-y-6">
                            {items.map((item, index) => (
                                <li key={index} className="w-full">
                                    {item.submenu ? (
                                        <div>
                                            <button onClick={() => handleSubmenuClick(index)} className="text-black text-xl font-light w-full text-left">
                                                {t(item.name)}
                                            </button>
                                            {openSubmenu === index && (
                                                <div className="mt-4 pl-4 space-y-4">
                                                    {item.submenu.map((submenu, subIndex) => (
                                                        <div key={subIndex}>
                                                            <h3 className="font-semibold text-lg text-black mb-2">{t(submenu.heading)}</h3>
                                                            <ul className="space-y-3">
                                                                {submenu.links.map((link, linkIndex) => (
                                                                    <li key={linkIndex}>
                                                                        <Link 
                                                                            to={link.path} 
                                                                            onClick={closeMenu}
                                                                            className="text-black hover:text-gray-600 transition-colors duration-300 font-light"
                                                                        >
                                                                            {t(link.name)}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to={item.path} onClick={closeMenu} className="text-black text-xl font-light">
                                            {t(item.name)}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Pinned Footer with Language Switcher */}
                        <div className="mt-auto pt-6 flex-shrink-0">
                            <button 
                                onClick={() => handleLanguageChange(i18n.language.startsWith('en') ? 'es' : 'en')}
                                className="font-semibold text-black hover:text-gray-600 transition-colors flex items-center gap-2 text-xl font-light"
                            >
                                {i18n.language.startsWith('en') ? 'ES' : 'EN'}
                                <img src="/images/idioma.svg" alt="Language selector" className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MegaMenu;
