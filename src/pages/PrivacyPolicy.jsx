import PolicyPage from "../components/PolicyPage";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: [
                "Mimic Agency (\"we\", \"our\", or \"us\"), a brand operated by A Better World Ventures LLC, uses cookies and similar tracking technologies on mimic.agency (\"Website\") to enhance user experience, analyze site traffic, and improve our services. By continuing to use our Website, you consent to our use of cookies as described in this policy."
            ]
        },
        {
            title: "2. What Are Cookies?",
            content: [
                "Cookies are small text files stored on your device when you visit a website. They help us recognize your device, remember preferences, and provide a better browsing experience."
            ]
        },
        {
            title: "3. Types of Cookies We Use",
            content: [
                "• Essential Cookies: Necessary for core website functions (e.g., security, login, language settings).",
                "• Analytics Cookies: Help us analyze site traffic and optimize performance (e.g., Google Analytics).",
                "• Marketing Cookies: Used for personalized advertising and retargeting (if applicable).",
                "• Functionality Cookies: Improve user experience by remembering preferences."
            ]
        },
        {
            title: "4. Managing Cookies",
            content: [
                "You can control or delete cookies through your browser settings. Disabling certain cookies may affect the Website's functionality."
            ]
        },
        {
            title: "5. Third-Party Cookies",
            content: [
                "We may use third-party services (e.g., analytics providers) that place cookies on your device. We do not control these cookies."
            ]
        },
        {
            title: "6. Updates to This Policy",
            content: [
                "We may modify this Cookies Policy at any time. Changes will be posted on this page with the updated date."
            ]
        },
        {
            title: "7. Contact Us",
            content: [
                "For any questions, please contact us at hi@mimic.agency."
            ]
        }
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Privacy Policy"
                lastUpdated="April 2025"
                sections={sections}
            />
        </div>
    );
};

export default PrivacyPolicy; 