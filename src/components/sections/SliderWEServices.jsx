import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableSlider from '../common/ReusableSlider';

const SliderWEServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/WE/wordpress.png', alt: 'wordpress' },
        { src: '/images/WE/squarespace.png', alt: 'squarespace' },
        { src: '/images/WE/shopify.png', alt: 'shopify' },
        { src: '/images/WE/next.png', alt: 'nextjs' },
    ];

    return (
        <ReusableSlider 
            title={t('latest_tools_Website_Ecommerce')}
            items={logos}
        />
    );
};

export default SliderWEServices;
