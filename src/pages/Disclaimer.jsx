import PolicyPage from "../components/PolicyPage";

const Disclaimer = () => {
    const sections = [
        {
            title: "1. Interpretation and Definitions",
            content: [
                "The words of which the initial letter is capitalized have meanings defined under the following conditions.",
            ],
        },
        {
            title: "2. Disclaimer",
            content: [
                "The information contained on the Service is for general information purposes only.",
                "The Company assumes no responsibility for errors or omissions in the contents of the Service.",
            ],
        },
        {
            title: "3. External Links Disclaimer",
            content: [
                "The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.",
            ],
        },
        {
            title: "4. Contact Us",
            content: [
                "If you have any questions about this Disclaimer, please contact us at legal@mimic.com.",
            ],
        },
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Disclaimer"
                lastUpdated="June 1, 2023"
                sections={sections}
            />
        </div>
    );
};

export default Disclaimer;
