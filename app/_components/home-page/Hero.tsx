"use client";

import React, { useMemo, useState, useRef } from "react";

import HeroAppDemo1 from "./Demo1";
import HeroAppDemo2 from "./Demo2";
import HeroAppDemo3 from "./Demo3";
import HeroBadges from "../HeroBadges";


const SLIDES = [
    {
      title: "Automatic license plate recognition made easy",
      description: "Deploy license plate and vehicle recognition with Rekor’s OpenALPR suite of solutions designed.",
      Demo: HeroAppDemo1
    },
    {
      title: "Enhance Safety with Real-time Data",
      description: "Safe Security Dynamics delivers AI-powered license plate recognition, providing real-time data to enhance safety.",
      Demo: HeroAppDemo2
    },
    {
      title: "AI-Powered Solutions for Modern Security",
      description: "Leverage cutting-edge technology to detect and monitor vehicles efficiently with our innovative systems.",
      Demo: HeroAppDemo3
    }
];

export default function Hero() {
    const carouselTimeout = useRef<NodeJS.Timeout>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { title, description, Demo } = useMemo(() => SLIDES[activeIndex] || SLIDES[0], [activeIndex]);

    const chooseIndexToShow = (num: number) => setActiveIndex(num);
    const nextSlide = () => setActiveIndex((prevIndex) => prevIndex < (SLIDES.length - 1) ? prevIndex + 1 : 0);

    return (
        <section className="bg-dark-blue text-white overflow-hidden min-h-dvh px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col-reverse lg:flex-row gap-10 pt-10 sm:pt-20 pb-10 lg:pt-10">
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
                        <HeroBadges />
                    </div>
                </div>
                <div className="flex items-end flex-3 pb-3">
                    <Demo key={activeIndex} goToNextSlide={nextSlide} carouselTimeout={carouselTimeout} duration={5000} />
                </div>
            </div>
        </section>
    )
};