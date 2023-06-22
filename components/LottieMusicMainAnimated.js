import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animate from './musicAnimate.json';

const LottieMusicMainAnimated = () => {
const containerRef = useRef(null);

useEffect(() => {
    const container = containerRef.current;

    const animation = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animate,
    });

    return () => {
    animation.destroy();
    };
}, []);

    return <div className="w-3 h-3 text-lime-300" ref={containerRef} />;
};

export default LottieMusicMainAnimated;