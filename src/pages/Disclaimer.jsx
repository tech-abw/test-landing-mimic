import PolicyPage from "../components/PolicyPage";
import { useTranslation } from "react-i18next";

const Disclaimer = () => {
    const { t } = useTranslation();
    const sections = [
        {
            title: "",
            content: [
                t('disclaimer_content_1'),
                t('disclaimer_content_2'),
                t('disclaimer_content_3'),
            ],
        },
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title={t('disclaimer_title')}
                lastUpdated={t('disclaimer_last_updated')}
                sections={sections}
            />
        </div>
    );
};

export default Disclaimer;
