import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../ui/Logo";
import MegaMenu from "../sections/MegaMenu";
import useMediaQuery from "../../hooks/useMediaQuery";


const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        {
            name: t('nav.services'),
            path: '/services',
            submenu: [
                {
                    heading: 'nav.submenu.design_development',
                    links: [
                        { name: 'UX-UI Design', path: '/services/ux-ui-design' },
                        { name: 'Website & E-commerce', path: '/services/website-ecommerce' },
                        { name: 'AI Solutions', path: '/services/ai-solutions' },
                    ]
                },
                {
                    heading: 'nav.submenu.strategy',
                    links: [
                        { name: 'Tailored solutions', path: '/services/tailored-solutions' },
                        { name: 'Consulting', path: '/services/consulting' },
                    ]
                }
            ]
        },
        { name: t('nav.portfolio'), path: '/blog' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed w-full flex justify-center items-center  py-3 z-50 bg-gray">
            <div className="flex w-[92%] items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Navigation */}
                <MegaMenu 
                    items={navItems} 
                    isMobileMenuOpen={isMenuOpen} 
                    closeMenu={closeMenu}
                    toggleMenu={toggleMenu}
                    isDesktop={isDesktop}
                    menuRef={menuRef}
                    buttonRef={buttonRef}
                />

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                    <button className="bg-black text-lime-400 font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-all duration-300">
                        {t('nav.start_here')}
                    </button>
                    <button 
                        onClick={handleLanguageChange}
                        className="font-semibold text-black hover:text-gray-600 transition-colors flex items-center gap-2"
                    >
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                        <img src="/images/idioma.svg" alt="Language selector" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;