import React, { useEffect, useRef,useState}  from 'react';
import Image from 'next/image';
import Me from '../../assets/me3.jpg';
import { MainAudio } from '../MainAudio';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Draggable from 'react-draggable';
import Spline from '@splinetool/react-spline';

const CenterLayout = () => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true)
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints);
        }
    }, []);


    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <div className="sm:-mt-3">
            <div className="animate__animated animate__fadeInDownBig">
                <Draggable disabled={isTouchDevice}>
                    <div className="p-4  text-white card-bg-color shdaow-xl cursor-grab">
                        <div className="flex items-start space-x-4">
                            <Image 
                                className="w-24 h-24 border-2 rounded-full  backdrop-blur-md brightness-125 backdrop-invert backdrop-contrast-125 border-white/50"
                                src={Me} 
                                placeholder="blur" 
                                quality={1} 
                                alt="me"
                                width={900} 
                                height={900} 
                                priority 
                            />
                            <div className="space-y-0.5">
                                <h1 className="text-xl font-semibold myfont">SAFWAN</h1>
                                <h1 className="font-semibold text-lime-500 myfont">FRONTEND DEVELOPER</h1>
                                <div className="flex items-center pt-1 space-x-1 text-xs">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3" />
                                    <p>Kajang,Selangor,Malaysia</p>
                                </div>
                                <div className="flex items-center pt-1 space-x-1 text-xs">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
                                    <p>safwanazman017@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
            <div className="h-80 relative">
                {loading && <div className=' flex justify-center items-center h-64 text-white'>Loading...</div> }
                <Spline 
                    scene="https://prod.spline.design/jBtfDF8ZAay0J7vw/scene.splinecode" 
                    onLoad={()=>setLoading(false)} 
                />
            </div>

            {/* About */}
            <div className="animate__animated animate__fadeInUpBig -mt-9">
                <Draggable disabled={isTouchDevice}>
                    <div className="p-4 text-white bg-center bg-cover card-bg-color shdaow-xl cursor-grab">
                        <div className="px-4">
                            <div className="flex items-center justify-between space-x-2">
                                <h1 className="font-semibold text-lime-500 myfont">ABOUT <span className='text-white'>ME</span></h1>
                                <MainAudio 
                                    isPlayingProp={isPlaying} 
                                    audioRef={audioRef} 
                                    handlePause={handlePause}
                                    handlePlay={handlePlay} 
                                    handleAudioEnd={handlePause}
                                />
                            </div>
                            <p className="h-full pt-2 text-sm leading-6 lg:h-64">
                                I am a highly skilled Frontend Developer with a passion for creating visually stunning and intuitive
                                user interfaces.
                                I have a strong background in HTML, CSS, and JavaScript, as well as experience with popular frontend
                                frameworks such
                                as React and laravel blade. I have a keen eye for design and am well-versed in creating responsive
                                layouts and
                                cross-browser compatible web pages. I am skilled in utilizing design software such as Figma to
                                create mockups and wireframes.
                                I am also proficient in using CSS preprocessors and CSS frameworks such as Tailwindcss. I am a quick learner and
                                am always eager to stay up-to-date with the latest frontend
                                technologies and best practices. I am a team player and am able to work well under pressure,
                                I am confident that I can bring value to any organization.
                            </p>
                        </div>
                    </div>
                </Draggable>
            </div>

            {/* <div className="block sm:hidden">
                <div className="grid grid-cols-2 gap-6 mt-6 ">
                    <div className="animate__animated animate__fadeInBottomLeft animate__delay-2s">
                        <Draggable disabled={isTouchDevice}>
                            <div className="p-4 rounded-lg card-bg-color shdaow-xl cursor-grab">
                                <div className="flex">
                                    <div className="p-4 border rounded-full">
                                        <FontAwesomeIcon icon={faLaptopCode} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </div>
                                <h1 className="pt-2 pl-2 text-sm text-white">Year of Experience</h1>
                                <h1 className="p-2 mt-5 text-xl text-center rounded-full text-lime-400 lg:text-2xl bg-gray-800/10 backdrop-blur-xl myfont">
                                    {yearWork}
                                </h1>
                            </div>
                        </Draggable>
                    </div>
                    <div className="animate__animated animate__fadeInBottomRight animate__delay-2s">
                        <Draggable disabled={isTouchDevice}>
                            <div className="p-4 rounded-lg card-bg-color shdaow-xl cursor-grab ">
                                <div className="flex">
                                    <div className="p-4 border rounded-full ">
                                        <FontAwesomeIcon icon={faClock} color="#84cc16" className="w-8 h-8" />
                                    </div>
                                </div>
                                <h1 className="pt-2 pl-2 text-sm text-white">Hour of Work</h1>
                                <h1 className="p-2 mt-5 text-xl text-center rounded-full text-lime-400 lg:text-2x backdrop-blur-xl myfont">
                                    {hourWork}
                                </h1>
                            </div>
                        </Draggable>
                    </div>
                </div>
            </div> */}
        </div>
        );
    };

export default CenterLayout;