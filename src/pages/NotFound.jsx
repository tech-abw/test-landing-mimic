import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray py-12 px-4 sm:px-6 lg:px-8">
            <SEO
                title="404: Not Found"
                description="The page you are looking for doesn't exist or an error occurred."
            />
            <div className="md:w-[95%] h-[80vh] w-full mx-auto bg-white rounded-2xl shadow-lg px-8 py-12 text-center flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-10 items-center md:items-baseline justify-center mb-8 sm:mb-10 space-x-2 sm:space-x-3">
                    <h1 className="text-8xl sm:text-[167px] text-black leading-none">
                        404
                    </h1>
                    <h2 className="text-3xl sm:text-6xl font-medium text-indigo-600 leading-none">
                        Not found
                    </h2>
                </div>
                <p className="mt-4 text-base sm:text-lg text-gray-600 mb-12 sm:mb-16 text-left">
                    This page you are looking doesn't exist or an error
                    occurred.
                </p>
                <Link
                    to="/"
                    className="hidden md:flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                    style={{
                        width: "170px",
                        height: "38.66px",
                        fontSize: "16.66px",
                        fontWeight: 400,
                        borderRadius: "12px",
                        lineHeight: "18px",
                    }}
                >
                    Go to Homepage
                </Link>
                <Link
                    to="/"
                    className="md:hidden flex items-center justify-center bg-neon-green text-black hover:bg-opacity-90 transition-all"
                    style={{
                        width: "120px",
                        height: "28px",
                        fontSize: "14px",
                        fontWeight: 400,
                        borderRadius: "5px",
                    }}
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
