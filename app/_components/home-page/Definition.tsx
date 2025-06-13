"use client";

import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";


export default function Definition () {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    function pausePlayVideo() {
        if(!videoRef?.current) return;

        if(isPlaying) videoRef.current.pause();
        else videoRef?.current?.play();
        setIsPlaying((prevValue) => !prevValue);
    };

    return (
        <div className="px-4 xs:px-6 sm:px-10">
            <div className="text-center lg:text-left pt-20 mx-auto min-h-screen max-w-[var(--max-width)] flex flex-col lg:flex-row justify-center items-center gap-20">
                <div className="flex lg:hidden flex-col gap-4">
                    <h3 className="text-blue-800 uppercase font-semibold text-sm">Learn about alpr</h3>
                    <h2 className="text-4xl text-gray-900">What is ALPR?</h2>
                </div>
                <div className="w-full max-w-[640px]">
                    <div className="group/group-parent relative aspect-video rounded-4xl flex items-center justify-center overflow-hidden bg-blue-100 border-4 border-blue-100 has-[button:hover]:border-blue-main/50">
                        <video 
                            ref={videoRef} 
                            controls={false} 
                            onPlaying={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            src="https://res.cloudinary.com/dewej0c6m/video/upload/v1749726830/ssd-website/Application_work-in-progress_Demo_Video_igt0se.mp4" 
                            className="video w-full h-full object-cover" 
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <button 
                                onClick={pausePlayVideo} 
                                className={`${isPlaying ? 'border-blue-main/80 hover:border-blue-main opacity-0 pointer-events-none group-hover/group-parent:opacity-100 group-hover/group-parent:pointer-events-auto' : 'border-blue-main/40 hover:border-blue-main/60'} group/group-child flex items-center justify-center p-4 border-2 border-dashed rounded-full cursor-pointer`}
                            >
                                <span className={`${isPlaying ? 'bg-blue-main/80 group-hover:bg-blue-main' : 'group-hover/group-child:bg-blue-main/60 bg-blue-main/40'} flex items-center justify-center w-16 aspect-square rounded-full text-white`}>
                                    {
                                        isPlaying ?
                                            <FaPause size={20} /> :
                                            <FaPlay size={20} className="ml-1" />
                                    }
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="hidden lg:flex flex-col gap-4">
                        <h3 className="text-blue-800 uppercase font-semibold text-sm">Learn about alpr</h3>
                        <h2 className="text-4xl text-gray-900">What is ALPR?</h2>
                    </div>
                    <p className="mt-6 text-base leading-[1.8rem] text-gray-800 max-w-[80ch] lg:max-w-[48ch]">
                        <span>ALPR (Automatic License Plate Recognition) is a technology used to automatically read and identify vehicle License Plates <span className="text-blue-800 hover:underline">Optical Character Recognition</span> (OCR). </span>
                        <br />
                        <br />
                        <span>Safe Security Dynamics&apos; LPR solution leverage cutting-edge Artificial Intelligence and Machine Learning to far exceed traditional systems.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}