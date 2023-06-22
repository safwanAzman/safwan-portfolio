import { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import LottieMusicAnimated from './LottieMusicMainAnimated';
import mainAudio from '../assets/audio.mp3';

export const MainAudio = ({ isPlayingProp,audioRef,handlePause,handlePlay ,handleAudioEnd }) => {
    return (
        <>
            <audio ref={audioRef} src={mainAudio} autoPlay onEnded={handleAudioEnd}/>
            {isPlayingProp ? (
                <button onClick={handlePause} className=" flex items-center justify-center bg-black/50 rounded-full p-2
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <LottieMusicAnimated />
                </button>
            ) : (
                <button onClick={handlePlay} className="flex items-center justify-center bg-black/50 rounded-full px-4 py-2 space-x-2
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <FontAwesomeIcon className="w-3 h-3 text-white" icon={faPlay} />
                    <p style={{fontSize:'9px'}}>PLAY THIS ARTICLE</p>
                </button>
            )}
        </>
    )
}

