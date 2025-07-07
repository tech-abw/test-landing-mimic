import PolicyPage from "../components/PolicyPage";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
    const { t } = useTranslation();
    const sections = [
        {
            title: t('cookie_policy_section_1_title'),
            content: [t('cookie_policy_section_1_content')]
        },
        {
            title: t('cookie_policy_section_2_title'),
            content: [
                t('cookie_policy_section_2_content_1'),
                t('cookie_policy_section_2_content_2'),
                t('cookie_policy_section_2_content_3'),
                t('cookie_policy_section_2_content_4')
            ]
        },
        {
            title: t('cookie_policy_section_3_title'),
            content: [
                t('cookie_policy_section_3_content_1'),
                t('cookie_policy_section_3_content_2'),
                t('cookie_policy_section_3_content_3'),
                t('cookie_policy_section_3_content_4'),
                t('cookie_policy_section_3_content_5')
            ]
        },
        {
            title: t('cookie_policy_section_4_title'),
            content: [
                t('cookie_policy_section_4_content_1'),
                t('cookie_policy_section_4_content_2'),
                t('cookie_policy_section_4_content_3')
            ]
        },
        {
            title: t('cookie_policy_section_5_title'),
            content: [t('cookie_policy_section_5_content')]
        },
        {
            title: t('cookie_policy_section_6_title'),
            content: [
                t('cookie_policy_section_6_content_1'),
                t('cookie_policy_section_6_content_2'),
                t('cookie_policy_section_6_content_3'),
                t('cookie_policy_section_6_content_4')
            ]
        },
        {
            title: t('cookie_policy_section_7_title'),
            content: [t('cookie_policy_section_7_content')]
        },
        {
            title: t('cookie_policy_section_8_title'),
            content: [t('cookie_policy_section_8_content')]
        },
        {
            title: t('cookie_policy_section_9_title'),
            content: [t('cookie_policy_section_9_content')]
        }
    ];

    return (
        <div className="bg-gray">
            <PolicyPage
                title={t('cookie_policy_title')}
                lastUpdated={t('cookie_policy_last_updated')}
                sections={sections}
            />
        </div>
    );
};

export default CookiePolicy;
