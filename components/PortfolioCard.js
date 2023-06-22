import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({href,src,title,subTitle}) => {
    return (
        <>
            <a href={href} target="_blank"
                className="border-gray-400/50 flex items-center space-x-2 border p-2 rounded-lg text-xs hover:bg-black/20 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Image src={src} alt="project"
                    className="w-12 h-12 rounded border border-white/20  backdrop-blur-md" width={60} height={60}
                    priority={true} />
                <div className="text-xs text-white space-y-0.5">
                    <h1 className="font-semibold">{title}</h1>
                    <h1>{subTitle}</h1>
                </div>
            </a>
        </>
    )
}

export default PortfolioCard;