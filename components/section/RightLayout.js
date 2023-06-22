import React, { useEffect, useRef,useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import Draggable from 'react-draggable';

import Hobby from '../portfolio/Hobby';
import Freelancers from '../portfolio/Freelancers';
import Work from '../portfolio/Work';

const RightLayout = () => {
    const [tab , setTab] = useState(1);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints);
        }
    }, []);

    return (
        <>
            <div className="animate__animated  animate__fadeInRight animate__delay-1s">
                <Draggable>
                    <div className="cursor-grab">
                        <div className="card-bg-color shdaow-xl rounded-lg p-4 skew-y-0 md:skew-y-[10deg] h-full lg:h-[25.5rem] overflow-auto relative">
                            <div className="">
                                <h1 className="text-center text-sm text-white mb-4 myfont">MY PORTFOLIO</h1>
                                <div className="flex items-center space-x-2 justify-center">
                                    <button className={`border px-3 py-1 rounded-md border-gray-400/50 text-xs text-white ${tab === 1 ? 'bg-lime-500' : 'bg-transparent'}`}
                                        onClick={
                                            () => {
                                                setTab(1);
                                            }
                                        }>
                                        <h1>Hobby</h1>
                                    </button>
                                    <button className={`border px-3 py-1 rounded-md border-gray-400/50 text-xs text-white ${tab === 2 ? 'bg-lime-500' : 'bg-transparent'}`}
                                        onClick={
                                            () => {
                                                setTab(2);
                                            }
                                        }>
                                        <h1>Work</h1>
                                    </button>
                                    <button className={`border px-3 py-1 rounded-md border-gray-400/50 text-xs text-white ${tab === 3 ? 'bg-lime-500' : 'bg-transparent'}`}
                                        onClick={
                                            () => {
                                                setTab(3);
                                            }
                                        }>
                                        <h1>Freelancer</h1>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4 z-0">
                                {tab === 1 ? 
                                    <Hobby />
                                : null }
                                {tab === 2 ? 
                                    <Work />
                                : null }
                                {tab === 3 ? 
                                    <Freelancers />
                                : null }
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>

            <div className="animate__animated  animate__fadeInRight animate__delay-2s">
                <Draggable disabled={isTouchDevice}>
                    <div className="cursor-grab">
                        <div className="card-bg-color shdaow-xl rounded-lg p-4 skew-y-0 md:skew-y-[10deg] h-[17rem] ">
                            <h1 className="text-center text-sm text-white pb-3 myfont">CONCTACT ME</h1>
                            <div className=" grid grid-cols-2 gap-4">
                                <a href="https://github.com/safwanAzman" target="_blank" className="card-bg-color shdaow-xl rounded-lg p-4 h-24 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <div className=" border rounded-full p-4">
                                        <FontAwesomeIcon icon={faGithub} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </a>
                                <a href="https://twitter.com/sfwn_azmn" target="_blank" className="card-bg-color shdaow-xl rounded-lg p-4 h-24 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <div className=" border rounded-full p-4">
                                        <FontAwesomeIcon icon={faTwitter} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/safwn_/" target="_blank" className="card-bg-color shdaow-xl rounded-lg p-4 h-24 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <div className=" border rounded-full p-4">
                                        <FontAwesomeIcon icon={faInstagram} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </a>
                                <a href="mailto:safwanazman017@gmail.com?subject" target="_blank" className="card-bg-color shdaow-xl rounded-lg p-4 h-24 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <div className=" border rounded-full p-4">
                                        <FontAwesomeIcon icon={faEnvelope} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    );
};

export default RightLayout;