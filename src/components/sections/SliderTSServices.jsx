import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableSlider from '../common/ReusableSlider';

const SliderTSServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/TS/flutter.png', alt: 'flutter' },
        { src: '/images/TS/next.png', alt: 'nextjs' },
        { src: '/images/TS/react.png', alt: 'react' },
        { src: '/images/TS/rails.png', alt: 'ruby on rails' },
        { src: '/images/TS/react.png', alt: 'react' },
    ];

    return (
        <ReusableSlider 
            title={t('latest_tools_Tailored_Solutions')}
            items={logos}
        />
    );
};

export default SliderTSServices;
