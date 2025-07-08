import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../ui/Logo";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navItems = [
        { name: t("nav_home"), path: "/" },
        { name: t("nav_about"), path: "/about" },
        { name: t("nav_services"), path: "/services" },
        { name: t("nav_blog"), path: "/blog" },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (isMenuOpen) {
            closeMenu();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full flex justify-center items-center bg-gray py-3 z-50">
            <div className="flex w-[92%] items-center justify-between">
                <div className="flex items-center">
                    <Logo />
                </div>

                <nav className="hidden lg:flex items-center">
                    {navItems.map((item, index) => (
                        <div key={item.name} className="flex items-center">
                            <Link
                                to={item.path}
                                className="text-black transition-colors duration-300 px-4"
                                style={{ fontSize: "17px", fontWeight: 400 }}
                            >
                                {item.name}
                            </Link>
                            {index < navItems.length - 1 && (
                                <div
                                    className="bg-black mx-1"
                                    style={{ height: "24px", width: "1px" }}
                                ></div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Botón 'Start Here' para móvil */}
                    <Link
                        to="https://tally.so/r/wb6l9Z"
                        className="lg:hidden flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "150px",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#CCFF00",
                            borderRadius: "5px",
                            height: "38.66px",
                        }}
                    >
                        {t('start_here_button')}
                    </Link>

                    {/* Contenedor para 'Start Here' y selector de idioma en desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            to="https://tally.so/r/wb6l9Z"
                            className="flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                            style={{
                                width: "170px",
                                height: "38.67px",
                                fontSize: "17px",
                                fontWeight: 400,
                                color: "#CCFF00",
                                borderRadius: "12px",
                            }}
                        >
                            {t('start_here_button')}
                        </Link>

                        <button 
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                            className="font-semibold text-black hover:text-gray-600 transition-colors flex items-center gap-2"
                            style={{ fontSize: "17px", fontWeight: 400 }}
                        >
                            {i18n.language === 'en' ? 'ES' : 'EN'}
                            <img src="/images/idioma.svg" alt="Language selector" className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        ref={buttonRef}
                        className="lg:hidden ml-4 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ width: "30.19px", height: "23px" }}
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3L17 17" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M3 17L17 3" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="28" height="28" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H27" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M3 11.5H27" stroke="black" strokeWidth="3.2" strokeLinecap="round" />
                                <path d="M3 20H27" stroke="black" strokeWidth="3.2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div ref={menuRef} className="lg:hidden bg-gray w-full py-6 px-6 absolute top-full left-0 shadow-md">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-black transition-colors duration-300"
                                style={{ fontSize: "15px", fontWeight: 400 }}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center justify-center pt-4 border-t mt-4">
                            <button 
                                onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                                className="font-semibold text-black hover:text-gray-600 transition-colors flex items-center gap-2"
                            >
                                {i18n.language === 'en' ? 'Español' : 'English'}
                                <img src="/images/idioma.svg" alt="Language selector" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
