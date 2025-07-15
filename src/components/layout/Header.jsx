import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    const location = useLocation();
    const navigate = useNavigate();

    const handleLanguageChange = (newLang) => {
        const currentLang = i18n.language;
        const pathParts = location.pathname.split('/').filter(Boolean);
        const currentPath = pathParts.slice(1).join('/') || '';

        // Obtener los datos de rutas para ambos idiomas directamente
        const routesForCurrentLang = i18n.getDataByLanguage(currentLang)?.translation.routes || {};
        const routesForNewLang = i18n.getDataByLanguage(newLang)?.translation.routes || {};

        // Encontrar la clave de la ruta actual (ej: 'portfolio')
        const routeKey = Object.keys(routesForCurrentLang).find(
            key => routesForCurrentLang[key] === currentPath.split('/')[0]
        );

        if (routeKey && routesForNewLang[routeKey]) {
            // Construir la nueva ruta usando la clave y las traducciones del nuevo idioma
            const newPathSegment = routesForNewLang[routeKey];
            const remainingPath = currentPath.includes('/') ? '/' + currentPath.split('/').slice(1).join('/') : '';
            navigate(`/${newLang}/${newPathSegment}${remainingPath}`);
        } else {
            // Si no se encuentra la ruta (ej. en la página de inicio), ir a la raíz del nuevo idioma
            navigate(`/${newLang}`);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const lang = i18n.language;

    const navItems = [
        { name: t('nav.home'), path: `/${lang}` },
        { name: t('nav.about'), path: `/${lang}/${t('routes.about')}` },
        {
            name: t('nav.services'),
            path: `/${lang}/${t('routes.services')}`,
            submenu: [
                {
                    heading: 'nav.submenu.design_development',
                    links: [
                        { name: 'UX-UI Design', path: `/${lang}/${t('routes.ux-ui-designs')}` },
                        { name: 'Website & E-commerce', path: `/${lang}/${t('routes.website-ecommerce-solutions')}` },
                        { name: 'AI Solutions', path: `/${lang}/${t('routes.ai-solutions')}` },
                    ]
                },
                {
                    heading: 'nav.submenu.strategy',
                    links: [
                        { name: 'Tailored solutions', path: `/${lang}/${t('routes.tailored-solutions')}` },
                        { name: 'Consulting', path: `/${lang}/${t('routes.services')}/consulting` },
                    ]
                }
            ]
        },
        { name: t('nav.portfolio'), path: `/${lang}/${t('routes.portfolio')}` },
    ];

    return (
        <header className="fixed w-full flex justify-center items-center  py-3 z-50 bg-gray">
            <div className="flex w-full max-w-screen-2xl px-6 items-center justify-between">
                <div className="flex-shrink-0">
                    <Logo />
                </div>
                <MegaMenu 
                    items={navItems} 
                    isMobileMenuOpen={isMenuOpen} 
                    closeMenu={closeMenu}
                    toggleMenu={toggleMenu}
                    isDesktop={isDesktop}
                    menuRef={menuRef}
                    buttonRef={buttonRef}
                />
                <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                    <button className="bg-black text-lime-400 font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-all duration-300">
                        {t('nav.start_here')}
                    </button>
                    <button 
                        onClick={() => handleLanguageChange(i18n.language === 'en' ? 'es' : 'en')}
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