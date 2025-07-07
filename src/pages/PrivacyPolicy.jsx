import PolicyPage from "../components/PolicyPage";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const sections = [
        {
            title: t('privacy_policy_section_1_title'),
            content: [t('privacy_policy_section_1_content')]
        },
        {
            title: t('privacy_policy_section_2_title'),
            content: [t('privacy_policy_section_2_content')]
        },
        {
            title: t('privacy_policy_section_3_title'),
            content: [
                t('privacy_policy_section_3_content_1'),
                t('privacy_policy_section_3_content_2'),
                t('privacy_policy_section_3_content_3'),
                t('privacy_policy_section_3_content_4')
            ]
        },
        {
            title: t('privacy_policy_section_4_title'),
            content: [t('privacy_policy_section_4_content')]
        },
        {
            title: t('privacy_policy_section_5_title'),
            content: [t('privacy_policy_section_5_content')]
        },
        {
            title: t('privacy_policy_section_6_title'),
            content: [t('privacy_policy_section_6_content')]
        },
        {
            title: t('privacy_policy_section_7_title'),
            content: [t('privacy_policy_section_7_content')]
        }
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title={t('privacy_policy_title')}
                lastUpdated={t('privacy_policy_last_updated')}
                sections={sections}
            />
        </div>
    );
};

export default PrivacyPolicy; 