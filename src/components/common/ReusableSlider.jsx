import React from 'react';
import './ReusableSlider.css';

const ReusableSlider = ({ title, items }) => {
    // Duplicamos los logos para un efecto de scroll infinito y suave
    const extendedItems = [...items, ...items];

    return (
        <div className="bg-gray py-16">
            <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto text-center">
                <h2 className="text-xl font-normal mb-12 text-black">{title}</h2>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {extendedItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.src} alt={item.alt} className="max-h-8" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReusableSlider;
