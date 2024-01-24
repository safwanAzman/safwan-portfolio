import React, { useEffect, useRef,useState } from 'react';
import Image from 'next/image'

import Tailwind from '../../assets/skills/tailwindcss.png';
import Bootstrap from '../../assets/skills/bootstrap.png';
import Laravel from '../../assets/skills/laravel.png';
import Reactjs from '../../assets/skills/react.png';
import Livewire from '../../assets/skills/livewire.png';
import Alpine from '../../assets/skills/alpinejs.svg';
import Typescripts from '../../assets/skills/typescript.svg';
import NextJs from '../../assets/skills/nextjs.webp';
import Love from '../../assets/love.png';
import GitHubCalendar from 'react-github-calendar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeHigh} from "@fortawesome/free-solid-svg-icons";
import Draggable from 'react-draggable';
import { Tooltip as ReactTooltip } from 'react-tooltip'


import { Audio } from '../Audio';

const LeftLayout = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const explicitTheme = {
        dark: ['#383838', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f'],
    }; 

    useEffect(() => {
        const updateTimeAndDate = () => {
            const date = new Date();
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            const dateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            setCurrentTime(date.toLocaleString('en-US', timeOptions));
            setCurrentDate(date.toLocaleString('en-US', dateOptions));
        }
    
        updateTimeAndDate();
        const intervalId = setInterval(updateTimeAndDate, 1000);

        if (audioRef.current) {
            audioRef.current.volume = 0.3;
        }
        return () => {
            clearInterval(intervalId);
        }
        
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints);
        }
    }, []);

        const handleVolumeChange = (e) => {
            if (audioRef.current) {
                audioRef.current.volume = e.target.value / 100;
            }
        };
    
        const handlePlay = () => {
            audioRef.current.play();
            setIsPlaying(true);
        };
    
        const handlePause = () => {
            audioRef.current.pause();
            setIsPlaying(false);
        };
    

    return (
        <div className="space-y-5">
            <div className="animate__animated  animate__fadeInLeft animate__delay-1s">
                <Draggable disabled={isTouchDevice}>
                    <div className="cursor-grab">
                        <div className="relative card-bg-color shdaow-xl rounded-lg p-4 -skew-y-0 lg:-skew-y-[10deg] h-full md:h-[25.5rem] ">
                            <h1 className="text-center text-sm text-white myfont">TECHNICAL SKILLS</h1>
                            <div className="bg-gray-100/10 overflow-y-hidden rounded-lg mt-3">
                                <div className="box mt-12 lg:mt-10 ">
                                    <span className="box1 ske">
                                        <Image src={Tailwind} className="" alt="Tailwindcss" priority />
                                    </span>
                                    <span className="box2">
                                        <Image src={Typescripts} className="rounded-lg" alt="Typescripts" priority />
                                    </span>
                                    <span className="box3">
                                        <Image src={Laravel} className="" alt="Laravel" priority />
                                    </span>
                                    <span className="box4">
                                        <Image src={Livewire} className="" alt="Livewire" priority />
                                    </span>
                                    <span className="box5">
                                        <Image src={Alpine} className="" alt="Alpinejs" priority />
                                    </span>
                                    <span className="box6">
                                        <Image src={Reactjs} className="" alt="React" priority />
                                    </span>
                                    <span className="box7">
                                        <Image src={NextJs} className="w-auto h-64" alt="NextJs" priority />
                                    </span>
                                </div>
                            </div>

                            <div className="pt-3">
                                <p className="text-xs font-semibold text-white">Front-end</p>
                                <div className="w-full bg-white/20 shadow  rounded-lg">
                                    <div className="py-0.5 text-xs leading-none text-center text-white  rounded-lg mt-1
                                        animate-background 
                                        bg-lime-600 from-lime-600 via-lime-400 to-lime-400 
                                        bg-[length:_400%_400%] 
                                        p-[1px]
                                        [animation-duration:_3s] 
                                        bg-gradient-to-r"
                                        style={{ width: '70%' }}>70%</div>
                                </div>
                                <p className="pt-2 text-xs font-semibold text-white ">Back-end</p>
                                <div className="w-full bg-white/20 shadow  rounded-lg mt-1">
                                    <div className="py-0.5 text-xs leading-none text-center text-white  rounded-lg
                                        animate-background 
                                        bg-lime-600 from-lime-600 via-lime-400 to-lime-400 
                                        bg-[length:_400%_400%] 
                                        p-[1px]
                                        [animation-duration:_3s] 
                                        bg-gradient-to-r"
                                        style={{ width: '30%' }}>30%</div>
                                </div>

                                <div className="p-2 bg-black/50 mt-4 rounded-lg">
                                    <GitHubCalendar 
                                        username="safwanAzman" 
                                        colorScheme="dark"
                                        blockSize={8}
                                        blockRadius={1}
                                        theme={explicitTheme}
                                        fontSize={9}
                                        year={new Date().getFullYear()}
                                        renderBlock={(block, activity) =>
                                            React.cloneElement(block, {
                                                'data-tooltip-id': 'react-tooltip',
                                                'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
                                            })
                                        }
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <ReactTooltip id="react-tooltip" style={{ fontSize: '10px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>

            <div className="animate__animated  animate__fadeInLeft animate__delay-2s">
                <Draggable disabled={isTouchDevice}>
                    <div className="cursor-grab">
                        <div className="relative card-bg-color shdaow-xl rounded-lg  -skew-y-0 lg:-skew-y-[10deg] h-32 bg-cover bg-center "
                            style={{ backgroundImage: `url('https://i.pinimg.com/564x/f9/92/23/f99223ae375940ae486425de30f65f59.jpg')` }}>
                            <div
                                className="absolute inset-0 bg-gray-600/70 rounded-xl flex items-center justify-center flex-col text-white text-sm space-y-1">
                                <p className="text-lime-300 text-lg">{currentTime}</p>
                                <p className="text-xs">{currentDate}</p>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>

            <div className="animate__animated  animate__fadeInLeft animate__delay-2s">
                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 -skew-y-0 lg:-skew-y-[10deg] gap-6">
                    <Draggable disabled={isTouchDevice}>
                        <div className="cursor-grab">
                            <div className="card-bg-color shdaow-xl rounded-lg p-4  h-32  bg-cover bg-center flex items-ceter justify-center  transition-all ease-in-out duration-700 hover:-translate-y-1 hover:scale-105"
                                style={{ backgroundImage: `url('https://i.ytimg.com/vi/14IrKkW1SNo/mqdefault.jpg')` }}>
                                <Audio 
                                    isPlayingProp={isPlaying} 
                                    audioRef={audioRef} 
                                    handlePause={handlePause}
                                    handlePlay={handlePlay} 
                                />
                            </div>
                        </div>
                    </Draggable>

                    <Draggable disabled={isTouchDevice}>
                        <div className="cursor-grab">
                            <div className="card-bg-color shdaow-xl rounded-lg p-4  h-32 bg-cover bg-center"
                                style={{ backgroundImage: `url(${Love.src})` }}>
                                    {isPlaying ? 
                                    <div className="flex space-x-2 items-center justify-center h-20 ">
                                        <div className="bg-black/80 px-4 py-1 rounded-full flex items-center space-x-2">
                                            <FontAwesomeIcon color="#84cc16" icon={faVolumeHigh} className="w-4 h-4" />
                                            <input 
                                                className="w-16 accent-lime-500"
                                                type="range" 
                                                min="0" 
                                                max="100" 
                                                onChange={handleVolumeChange} 
                                                defaultValue={audioRef.current?.volume * 100} 
                                            />
                                        </div>
                                    </div>
                                    :null}
                            </div>
                        </div>
                    </Draggable>
                </div>
            </div>
        </div>
    );
};

export default LeftLayout;