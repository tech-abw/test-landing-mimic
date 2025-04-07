import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    {/* Logo del footer */}
                    <div className="mb-8 md:mb-0 md:order-first order-last mt-10">
                        <img
                            src="/images/footer.png"
                            alt="Mimic Logo"
                            className="w-[150px] h-[150px] lg:w-[310px] lg:h-[330px]"
                        />
                    </div>

                    {/* Menú */}
                    <div className="mb-8 md:mb-0">
                        <h3
                            className="font-bold text-base mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            Menu
                        </h3>
                        <ul className="space-y-2 mb-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/portfolio"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>

                        {/* Redes sociales */}
                        <div className="flex space-x-4 mt-10">
                            <a href="#" className="text-black">
                                <img
                                    src="/images/footer-wha.png"
                                    alt="WhatsApp"
                                    className="h-6 w-6 md:h-8 md:w-8"
                                />
                            </a>
                            <a href="#" className="text-black">
                                <img
                                    src="/images/footer-insta.png"
                                    alt="Instagram"
                                    className="h-6 w-6 md:h-8 md:w-8"
                                />
                            </a>
                            <a href="#" className="text-black">
                                <img
                                    src="/images/footer-linke.svg"
                                    alt="LinkedIn"
                                    className="h-7 w-7 md:h-8 md:w-8"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="mb-8 md:mb-0">
                        <h3
                            className="font-bold text-base mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            Contact us.
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:hi@mimic.agency"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    hi@mimic.agency
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+528181814207"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    + 52 81 8181 4207
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3
                            className="font-bold text-base mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/disclaimer"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cookie-policy"
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-600">
                    <p>©{currentYear}. Mimic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
