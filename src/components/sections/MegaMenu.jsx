import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MegaMenu = ({ items, isMobileMenuOpen, toggleMenu, closeMenu, isDesktop, menuRef, buttonRef }) => {
    const { t, i18n } = useTranslation();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const handleSubmenuEnter = (index) => {
        if (isDesktop) {
            setOpenSubmenu(index);
        }
    };

    const handleSubmenuLeave = () => {
        if (isDesktop) {
          setTimeout(() => {
            setOpenSubmenu(null);
          }, 2000); // da tiempo para que el clic se registre
        }
      };

    const handleSubmenuClick = (index) => {
        if (!isDesktop) {
            setOpenSubmenu(openSubmenu === index ? null : index);
        }
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav ref={menuRef} className="flex-grow flex justify-center items-center ">
            {/* Desktop Menu */}
            <ul className={`hidden lg:flex items-center space-x-4`}>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="relative flex items-center" 
                        onMouseEnter={() => handleSubmenuEnter(index)}
                        onMouseLeave={handleSubmenuLeave}
                    >
                        <Link to={item.path} className="text-black hover:text-gray-600 transition-colors duration-300">
                            {t(item.name)}
                        </Link>
                        {index < items.length - 1 && (
                            <div
                                className="bg-black mx-4"
                                style={{ height: "16px", width: "1px" }}
                            ></div>
                        )}
                        {item.submenu && openSubmenu === index && (
                            <motion.div 
                                className="fixed top-20 left-10 right-10 -translate-x-1/2  p-8 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={menuVariants}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-full text-white flex justify-between items-start relative">
                                    {/* Pointer */}
                                    <div className="absolute -top-10 left-[51%] translate-x-0 w-0 h-0 
                                        border-l-[10px] border-l-transparent
                                        border-r-[10px] border-r-transparent
                                        border-b-[10px] border-b-black"></div>

                                    {/* Promotional Banner */}
                                    <div className="w-1/3 bg-stone-200 bg-opacity-90 p-6 rounded-lg border border-lime-400">
                                        <p className="text-black text-center font-semibold">Banner promocional</p>
                                    </div>

                                    {/* Links */}
                                    <div className="w-2/3 grid grid-cols-2 gap-x-12 gap-y-6 pl-12">
                                        {item.submenu.map((submenu, subIndex) => (
                                            <div key={subIndex}>
                                                <ul>
                                                    {submenu.links.map((link, linkIndex) => (
                                                        <li key={linkIndex} className="mb-3 flex items-center">
                                                            <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                                                            <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-300">
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
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} ref={buttonRef}>
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && !isDesktop && (
                <motion.div 
                    className="absolute top-full left-0 mt-4 w-[92vw] p-8 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="relative flex items-center">
                        {items.map((item, index) => (
                            <li key={index} className="text-center">
                                {item.submenu ? (
                                    <div>
                                        <button onClick={() => handleSubmenuClick(index)} className="text-white text-xl font-medium w-full">
                                            {t(item.name)}
                                        </button>
                                        {openSubmenu === index && (
                                            <div className="mt-4 space-y-4">
                                                {item.submenu.map((submenu, subIndex) => (
                                                    <div key={subIndex}>
                                                        <h3 className="font-bold text-lg text-white mb-2">{t(submenu.heading)}</h3>
                                                        <ul className="space-y-2">
                                                            {submenu.links.map((link, linkIndex) => (
                                                                <li key={linkIndex}>
                                                                    <Link to={link.path} onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors duration-300">
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
                                    <Link to={item.path} onClick={closeMenu} className="text-white text-xl font-medium">
                                        {t(item.name)}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default MegaMenu;
