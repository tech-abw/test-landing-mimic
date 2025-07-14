import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableSlider from '../common/ReusableSlider';

const SliderIAServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/IA/n8n.png', alt: 'n8n' },
        { src: '/images/IA/deepseek.png', alt: 'Deepseek' },
        { src: '/images/IA/make.png', alt: 'make' },
        { src: '/images/IA/openAI.png', alt: 'openAI' },
    ];

    return (
        <ReusableSlider 
            title={t('latest_tools_IA')}
            items={logos}
        />
    );
};

export default SliderIAServices;
