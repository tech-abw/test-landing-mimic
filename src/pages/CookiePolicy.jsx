import PolicyPage from "../components/PolicyPage";

const CookiePolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: [
                "Mimic Agency (\"we\", \"our\", or \"us\"), operated by A Better World Ventures LLC, values your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit mimic.agency (\"Website\")."
            ]
        },
        {
            title: "2. Information We Collect",
            content: [
                "We may collect the following types of data:",
                "• Personal Information: Name, email, phone number, company details (if provided via forms or email).",
                "• Technical Information: IP address, browser type, device data, and usage behavior (collected via cookies and analytics tools).",
                "• Communication Data: Any inquiries or messages you send to us."
            ]
        },
        {
            title: "3. How We Use Your Information",
            content: [
                "We use your data to:",
                "• Provide and improve our services.",
                "• Respond to inquiries and communicate with you.",
                "• Analyze website performance and optimize user experience.",
                "• Ensure security and prevent fraud."
            ]
        },
        {
            title: "4. Sharing of Information",
            content: [
                "We do not sell, trade, or rent your data. However, we may share it with:",
                "• Service providers (e.g., hosting, analytics tools) to assist our operations.",
                "• Legal authorities if required by law or to protect our rights."
            ]
        },
        {
            title: "5. Data Security",
            content: [
                "We implement security measures to protect your data. However, no Internet transmission is completely secure."
            ]
        },
        {
            title: "6. Your Rights",
            content: [
                "Depending on your location, you may have rights to:",
                "• Access, correct, or delete your data.",
                "• Opt-out of marketing communications.",
                "• Request data portability."
            ]
        },
        {
            title: "7. Third-Party Links",
            content: [
                "Our Website may contain links to external sites. We are not responsible for their privacy practices."
            ]
        },
        {
            title: "8. Updates to This Policy",
            content: [
                "We may modify this Privacy Policy at any time. Changes will be posted on this page with the updated date."
            ]
        },
        {
            title: "9. Contact Us",
            content: [
                "For privacy concerns, please reach out to hi@mimic.agency."
            ]
        }
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Cookie Policy"
                lastUpdated="April 2025"
                sections={sections}
            />
        </div>
    );
};

export default CookiePolicy;
