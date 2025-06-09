"use client";

import Image from "next/image";

import { GrSecure } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import HeroAppDemo from "../HeroAppDemo";
import React, { useMemo, useState, useRef, useEffect } from "react";



const SLIDES = [
    {
      title: "Automatic license plate recognition made easy",
      description: "Deploy license plate and vehicle recognition with Rekor’s OpenALPR suite of solutions designed.",
      Demo: AppDemo
    },
    {
      title: "Enhance Safety with Real-time Data",
      description: "Safe Security Dynamics delivers AI-powered license plate recognition, providing real-time data to enhance safety.",
      Demo: HeroAnimation
    },
    {
      title: "AI-Powered Solutions for Modern Security",
      description: "Leverage cutting-edge technology to detect and monitor vehicles efficiently with our innovative systems.",
      Demo: AppDemo
    }
];

export default function Hero() {
    const interval = useRef<NodeJS.Timeout>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { title, description, Demo } = useMemo(() => SLIDES[activeIndex] || SLIDES[0], [activeIndex]);
    const chooseIndexToShow = (num: number) => setActiveIndex(num);

    useEffect(() => {
        const clearSlideInterval = () => {
            interval.current && clearInterval(interval.current);
        }
        
        clearSlideInterval();

        const changeToNextSlide = () => {
            setActiveIndex((currentIndex) => {
                const incrementedIndex = currentIndex + 1;
                const nextIndex = incrementedIndex < SLIDES.length ? incrementedIndex : 0;

                return nextIndex;
            })
        }

        interval.current = setInterval(changeToNextSlide, 5000);

        return clearSlideInterval;
    }, []);

    return (
        <section className="bg-dark-blue text-white overflow-hidden min-h-dvh px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col-reverse lg:flex-row gap-10 pt-20 pb-10 lg:pt-10">
                <div className="flex flex-col gap-8 justify-between flex-2">
                    <ul className="flex gap-2">
                        {
                            SLIDES.map(({ title }, index) => (
                                <li key={title}>
                                    <button 
                                        onClick={() => chooseIndexToShow(index)} 
                                        className={`w-10 bg-white/60 overflow-hidden block rounded-full`}
                                    >
                                        <span className={`${index === activeIndex ? 'scale-x-full origin-left' : 'scale-x-0 origin-right'} duration-300 transition-transform ease-linear h-1 w-full bg-white block`}></span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="w-full flex flex-col justify-end pb-10 gap-10">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl leading-[3.24rem] md:text-5xl md:leading-[4rem] max-w-[40ch]">{title}</h2>
                            <p className="text-lg leading-[2rem] max-w-[64ch]">{description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center justify-center h-12 sm:h-14 rounded-md bg-blue-500 text-white hover:bg-blue-600 px-4 sm:px-8">
                                <span className="text-sm whitespace-nowrap">Get a demo</span>
                            </button>
                            <button className="flex items-center justify-center h-12 sm:h-14 rounded-md bg-white text-blue-900 hover:bg-blue-100 px-4 sm:px-8">
                                <span className="text-sm whitespace-nowrap">Book free 30 mins. call</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center bg-white/10 text-white/70 rounded-lg overflow-hidden">
                                <span className="flex items-center justify-center w-[36px] aspect-square bg-blue-500 text-white">
                                    <GrSecure size={22} />
                                </span>
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">ALPR</span>
                                    <br />
                                    <span>Tested</span>
                                </p>
                            </span>
                            <span className="flex items-center bg-white/10 text-white/70 rounded-lg overflow-hidden">
                                <Image width={40} height={40} src="/icons/ng-flag.png" alt="Nigeria flag" className="block w-[36px] aspect-square" />
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">Made in</span>
                                    <br />
                                    <span>Nigeria</span>
                                </p>
                            </span>
                            <span className="flex items-center bg-white/10 text-white/70 rounded-lg overflow-hidden">
                                <span className="flex items-center justify-center w-[36px] aspect-square bg-blue-500 text-white">
                                    <IoShieldCheckmark size={22} />
                                </span>
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">IT</span>
                                    <br />
                                    <span>Security</span>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <Demo />
            </div>
        </section>
    )
};

function AppDemo() {

    return (
        <div className="flex items-end flex-3 pb-6">
            <HeroAppDemo />
        </div>
    )
};

function HeroAnimation() {

    return (
        <div className="flex items-end flex-3 pb-6">
            <div className="h-full w-full max-h-[var(--max-hero-height)]">
                <div className="flex relative left-0 lg:left-[10%] w-[110%] sm:w-full lg:w-[110%] h-full rounded-2xl overflow-hidden bg-gradient-to-r from-white/20 to-white/5">
                    <video src="/animations/SSD_Animation_video1.mp4" autoPlay controls={false} className="absolute w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}