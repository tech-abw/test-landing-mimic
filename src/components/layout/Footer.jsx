import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();
    const lang = i18n.language;

    return (
        <footer className="bg-gray py-12">
            <div className="w-[95%] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    {/* Logo del footer */}
                    <div className="mb-8 md:mb-0 md:order-first order-last mt-10">
                        <img
                            src="/images/footer.svg"
                            alt="Mimic Logo"
                            className="w-[150px] h-[152px] lg:w-[281.78px] lg:h-[280.66px]"
                        />
                    </div>

                    {/* Menú */}
                    <div className="mb-8 md:mb-0">
                        <h3
                            className="font-bold text-base mb-1 lg:mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            {t("footer_menu")}
                        </h3>
                        <ul className="lg:space-y-2 mb-4">
                            <li>
                                <Link
                                    to={`/${lang}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("nav_home")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.about')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("nav_about")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.services')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("nav_services")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.portfolio')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("footer_portfolio")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.blog')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("nav_blog")}
                                </Link>
                            </li>
                        </ul>

                        {/* Redes sociales */}
                        <div className="flex space-x-4 lg:mt-10 mt-6">
                            <a
                                href="https://wa.me/+528181614207"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black"
                            >
                                <img
                                    src="/images/footer-wha.svg"
                                    alt="WhatsApp"
                                    className="h-6 w-6 md:h-8 md:w-8"
                                />
                            </a>
                            <a
                                href="https://instagram.com/mimic.agency"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black"
                            >
                                <img
                                    src="/images/footer-insta.svg"
                                    alt="Instagram"
                                    className="h-6 w-6 md:h-8 md:w-8"
                                />
                            </a>
                            <a
                                href="https://linkedin.com/company/mimicagency"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black"
                            >
                                <img
                                    src="/images/footer-linke.svg"
                                    alt="LinkedIn"
                                    className="h-6 w-6 md:h-8 md:w-8"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="mb-8 md:mb-0">
                        <h3
                            className="font-bold text-base mb-1 lg:mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            {t("footer_contact_us")}
                        </h3>
                        <ul className="lg:space-y-2">
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
                                    href="https://wa.me/+528181614207"
                                    className="text-gray-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                            className="font-bold text-base mb-1 lg:mb-4"
                            style={{ fontSize: "20px" }}
                        >
                            {t("footer_legal")}
                        </h3>
                        <ul className="lg:space-y-2">
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.disclaimer')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("footer_disclaimer")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.privacy-policy')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("footer_privacy_policy")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/${lang}/${t('routes.cookie-policy')}`}
                                    className="text-gray-600 transition-colors"
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {t("footer_cookie_policy")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-600 lg:mt-32">
                    <p>{t("footer_copyright", { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
