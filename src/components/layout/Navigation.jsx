import { Link } from "react-router-dom";

const Navigation = ({ isMobile = false }) => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Solutions", path: "/services" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <nav
            className={`${
                isMobile ? "flex flex-col space-y-6" : "flex justify-between items-start w-[95%]"
            }`}
        >
            {navItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                    <Link
                        to={item.path}
                        className="text-black  transition-colors duration-300 text-2xl font-medium px-4"
                    >
                        {item.name}
                    </Link>
                    {!isMobile && index < navItems.length - 1 && (
                        <div className="h-6 w-px bg-black mx-2"></div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Navigation;
