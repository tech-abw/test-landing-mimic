import PolicyPage from "../components/PolicyPage";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: [
                "This Privacy Policy describes how Mimic (\"we\", \"our\", or \"us\") collects, uses, and discloses your personal information when you visit our website."
            ]
        },
        {
            title: "2. Information We Collect",
            content: [
                "When you visit our website, we may collect certain information about your device, your interaction with the website, and information necessary to process your purchases."
            ]
        },
        {
            title: "3. How We Use Your Information",
            content: [
                "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users."
            ]
        },
        {
            title: "4. Contact Us",
            content: [
                "If you have any questions about this Privacy Policy, please contact us at privacy@mimic.com."
            ]
        }
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Privacy Policy"
                lastUpdated="June 1, 2023"
                sections={sections}
            />
        </div>
    );
};

export default PrivacyPolicy; 