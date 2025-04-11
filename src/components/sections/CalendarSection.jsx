import React, { useEffect } from "react";

const CalendarSection = ({
    bgColor = "bg-black",
    textColor = "text-white",
}) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section
            className={`w-full ${bgColor} py-16 md:py-32 relative flex flex-col items-center justify-center min-h-[550px]`}
        >
            <h2 className={`${textColor} text-3xl leading-none md:text-5xl text-center lg:mb-8 mb-16`}>
                Schedule an Appointment
            </h2>
            <div
                className="calendly-inline-widget w-full max-w-[1200px] px-4"
                data-url="https://calendly.com/ivan-dlg/30min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1&month=2025-04"
                style={{
                    minWidth: "320px",
                    height: "700px",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            />
        </section>
    );
};

export default CalendarSection;
