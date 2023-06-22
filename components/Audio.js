import { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import LottieMusicAnimated from './LottieMusicAnimated';
import mainAudio from '../assets/song.mp3';

export const Audio = ({ isPlayingProp,audioRef,handlePause,handlePlay }) => {
    return (
        <>
            <audio ref={audioRef} src={mainAudio} autoPlay loop />
            {isPlayingProp ? (
                <button onClick={handlePause} className=" flex flex-col items-center justify-center" >
                    <LottieMusicAnimated />
                </button>
            ) : (
                <button onClick={handlePlay} className=" flex flex-col items-center justify-center">
                    <FontAwesomeIcon className="w-10 h-10 text-white" icon={faPlay} />
                    <h1 className="text-xs text-white text-center pt-2">click to play this audio</h1>
                </button>
            )}
        </>
    )
}

