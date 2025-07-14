import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableSlider from '../common/ReusableSlider';

const SliderUXUIServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/UXUI/figma.png', alt: 'figma' },
        { src: '/images/UXUI/xd.png', alt: 'xd' },
        { src: '/images/UXUI/miro.png', alt: 'miro' },

    ];

    return (
        <ReusableSlider 
            title={t('latest_tools_UXUI')}
            items={logos}
        />
    );
};

export default SliderUXUIServices;
