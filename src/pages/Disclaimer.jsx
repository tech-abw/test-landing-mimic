import PolicyPage from "../components/PolicyPage";

const Disclaimer = () => {
    const sections = [
        {
            title: "",
            content: [
                "All brands, logos, and trademarks displayed on this website (mimic.agency) are the property of their respective owners. Mimic Agency does not claim any ownership over these brands, nor do we use them for commercial purposes beyond showcasing our design and development expertise. Our intent is solely to highlight our work, and we do not alter or misrepresent the original identity or values of any brand.",
                "Additionally, some projects displayed in our portfolio may have been modified after delivery by the client or may include design variations for presentation purposes. As such, the final outcome of a project may differ from what is shown on this site.",
                "If you are the owner of a brand featured here and have any concerns, please contact us at hi@mimic.agency."
            ],
        },
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title="Disclaimer"
                lastUpdated="April 2025"
                sections={sections}
            />
        </div>
    );
};

export default Disclaimer;
