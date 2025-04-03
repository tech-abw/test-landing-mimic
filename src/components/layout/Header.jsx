import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <header className="fixed w-full bg-gray py-4 z-50">
            <div className="container mx-auto px-6 flex items-center justify-between">
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
                                className="text-black hover:text-neon-green transition-colors duration-300 px-4"
                                style={{ fontSize: "25px", fontWeight: 400 }}
                            >
                                {item.name}
                            </Link>
                            {index < navItems.length - 1 && (
                                <div
                                    className="bg-black mx-1"
                                    style={{ height: "36px", width: "1px" }}
                                ></div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Botón Start here - versión desktop y móvil */}
                <div className="flex items-center">
                    {/* Botón para móvil */}
                    <Link
                        to="/contact"
                        className="lg:hidden flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "99px",
                            height: "27px",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#CCFF00",
                            borderRadius: "5px",
                        }}
                    >
                        Start here
                    </Link>

                    {/* Botón para desktop */}
                    <Link
                        to="/contact"
                        className="hidden lg:flex items-center justify-center bg-black text-white hover:bg-opacity-90 transition-all"
                        style={{
                            width: "256px",
                            height: "58px",
                            fontSize: "25px",
                            fontWeight: 500,
                            color: "#CCFF00",
                            borderRadius: "12px",
                        }}
                    >
                        Start here
                    </Link>

                    {/* Menú hamburguesa para móvil */}
                    <button
                        className="lg:hidden ml-4 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ width: "30.19px", height: "23px" }}
                    >
                        {isMenuOpen ? (
                            <svg
                                width="30"
                                height="23"
                                viewBox="0 0 30 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 5L25 18"
                                    stroke="black"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 18L25 5"
                                    stroke="black"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="30"
                                height="23"
                                viewBox="0 0 30 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H27"
                                    stroke="black"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 11.5H27"
                                    stroke="black"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 20H27"
                                    stroke="black"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray w-full py-6 px-6 absolute top-full left-0 shadow-md">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-black hover:text-neon-green transition-colors duration-300"
                                style={{ fontSize: "18px", fontWeight: 400 }}
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
