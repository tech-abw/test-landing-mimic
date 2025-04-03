import React from "react";

const CalendarSection = ({
    bgColor = "bg-black",
    textColor = "text-white",
}) => {
    return (
        <section
            className={`w-full ${bgColor} py-24 md:py-32 relative flex items-center justify-center h-[400px] md:h-[1000px]`}
        >
            <h2 className={`${textColor} text-xl md:text-5xl text-center`}>Embed Calendly</h2>
        </section>
    );
};

export default CalendarSection;
