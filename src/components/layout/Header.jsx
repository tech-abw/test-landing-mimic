import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Blog", path: "/blog" },
    ];

    // Cerrar menú cuando se hace clic fuera de él
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

    // Función para cerrar el menú
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full flex justify-center items-center bg-gray py-3 z-50">
            <div className="flex w-[92%] items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Navegación central - solo visible en desktop */}
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

                {/* Botón Start here - versión desktop y móvil */}
                <div className="flex items-center">
                    {/* Botón para móvil */}
                    <Link
                        to="https://tally.so/r/wb6l9Z"
                        className="lg:hidden flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "95px",
                            height: "28px",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#CCFF00",
                            borderRadius: "5px",
                        }}
                    >
                        Start here
                    </Link>

                    {/* Botón para desktop */}
                    <Link
                        to="https://tally.so/r/wb6l9Z"
                        className="hidden lg:flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "170px",
                            height: "38.67px",
                            fontSize: "17px",
                            fontWeight: 400,
                            color: "#CCFF00",
                            borderRadius: "12px",
                        }}
                    >
                        Start here
                    </Link>

                    {/* Menú hamburguesa para móvil */}
                    <button
                        ref={buttonRef}
                        className="lg:hidden ml-4 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ width: "30.19px", height: "23px" }}
                    >
                        {isMenuOpen ? (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3L17 17"
                                    stroke="black"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 17L17 3"
                                    stroke="black"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 30 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H27"
                                    stroke="black"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 11.5H27"
                                    stroke="black"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 20H27"
                                    stroke="black"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="lg:hidden bg-gray w-full py-6 px-6 absolute top-full left-0 shadow-md"
                >
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
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
