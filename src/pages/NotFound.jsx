import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray py-12 px-4 sm:px-6 lg:px-8">
            <SEO
                title={t('not_found_seo_title')}
                description={t('not_found_seo_description')}
            />
            <div className="md:w-[95%] h-[80vh] w-full mx-auto bg-white rounded-2xl shadow-lg px-8 py-12 text-center flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-10 items-center md:items-baseline justify-center mb-8 sm:mb-10 space-x-2 sm:space-x-3">
                    <h1 className="text-8xl sm:text-[167px] text-black leading-none">
                        404
                    </h1>
                    <h2 className="text-3xl sm:text-6xl font-medium text-indigo-600 leading-none">
                        {t('not_found_title')}
                    </h2>
                </div>
                <p className="mt-4 text-base sm:text-lg text-gray-600 mb-12 sm:mb-16 text-left">
                    {t('not_found_description')}
                </p>
                <Link
                    to="/"
                    className="hidden md:flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                    style={{
                        width: "220px",
                        height: "48px",
                        fontSize: "18px",
                        fontWeight: 400,
                        borderRadius: "12px",
                        lineHeight: "18px",
                    }}
                >
                    {t('not_found_button')}
                </Link>
                <Link
                    to="/"
                    className="md:hidden flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                    style={{
                        width: "150px",
                        height: "36px",
                        fontSize: "16px",
                        fontWeight: 400,
                        borderRadius: "5px",
                    }}
                >
                    {t('not_found_button')}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
