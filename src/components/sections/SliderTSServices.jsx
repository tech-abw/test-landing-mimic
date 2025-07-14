import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableSlider from '../common/ReusableSlider';

const SliderIAServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/websiteEcommerce/wordpress.png', alt: 'wordpress' },
        { src: '/images/websiteEcommerce/squarespace.png', alt: 'squarespace' },
        { src: '/images/websiteEcommerce/shopify.png', alt: 'shopify' },
        { src: '/images/websiteEcommerce/next.png', alt: 'nextjs' },
    ];

    return (
        <ReusableSlider 
            title={t('latest_tools_Website_Ecommerce')}
            items={logos}
        />
    );
};

export default SliderIAServices;
