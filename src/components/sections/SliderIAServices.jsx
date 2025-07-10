import React from 'react';
import { useTranslation } from 'react-i18next';
import './SliderIAServices.css';

const SliderIAServices = () => {
    const { t } = useTranslation();

    const logos = [
        { src: '/images/IA/n8n.png', alt: 'n8n' },
        { src: '/images/IA/deepseek.png', alt: 'Deepseek' },
        { src: '/images/IA/make.png', alt: 'make' },
        { src: '/images/IA/openAI.png', alt: 'openAI' },
    
    ];

    // Duplicamos los logos para un efecto de scroll infinito y suave
    const extendedLogos = [...logos, ...logos];

    return (
        <div className="bg-gray py-16">
            <div className="container w-[40%] mx-auto text-center">
                <h2 className="text-xl font-normal mb-12 text-black">{t('latest_tools_IA')}</h2>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {extendedLogos.map((logo, index) => (
                            <li key={index}>
                                <img src={logo.src} alt={logo.alt} className="max-h-8" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SliderIAServices;
