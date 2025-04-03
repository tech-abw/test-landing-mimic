import PolicyPage from "../components/PolicyPage";

const CookiePolicy = () => {
    const sections = [
        {
            title: "1. What Are Cookies",
            content: [
                "Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.",
            ],
        },
        {
            title: "2. How We Use Cookies",
            content: [
                "We use cookies for various purposes including:",
                <ul key="cookie-purposes">
                    <li>To provide and maintain our Service</li>
                    <li>To understand how you use our Service</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze how our Service is used</li>
                </ul>,
            ],
        },
        {
            title: "3. Your Choices Regarding Cookies",
            content: [
                "If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website.",
            ],
        },
        {
            title: "4. Contact Us",
            content: [
                "If you have any questions about this Cookie Policy, please contact us at cookies@mimic.com.",
            ],
        },
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Cookie Policy"
                lastUpdated="June 1, 2023"
                sections={sections}
            />
        </div>
    );
};

export default CookiePolicy;
