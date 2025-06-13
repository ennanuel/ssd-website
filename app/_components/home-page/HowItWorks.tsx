"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const STEPS = [
    {
        title: "Installation",
        description: "Our system installs quickly with minimal setup or hardware changes."
    },
    {
        title: "Configuration",
        description: "Easily configure zones, user access, and alerts through a user-friendly dashboard."
    },
    {
        title: "Monitoring",
        description: "Live vehicle recognition and tracking with real-time event logging and notifications."
    },
    {
        title: "Actionable Insights",
        description: "Get automatic alerts, track patterns, and make informed security decisions."
    }
];

export default function HowItWorks() {
    const interval = useRef<NodeJS.Timeout>(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function selectStepIndex (index: number) {
        stopInterval();
        setCurrentStepIndex(index);
        startInterval();
    };
    function changeStepIndex () {
        setCurrentStepIndex((prevStepIndex) => {
            const nextStepIndex = prevStepIndex < (STEPS.length - 1) ? 
                prevStepIndex + 1 : 
                0;
            return nextStepIndex;
        })
    };
    function startInterval() {
        interval.current = setInterval(changeStepIndex, 5000);
    };
    function stopInterval() {
        if(interval.current) clearInterval(interval.current);
    };
    function handleWhileInView() {
        stopInterval();
        startInterval();
    }

    return (
        <motion.section 
            onViewportEnter={handleWhileInView} 
            className="min-h-[calc(100vh_-_var(--header-large-height))] bg-dark-blue px-4 xs:px-6 sm:px-10"
        >
            <div className="mx-auto max-w-[var(--max-width)] pt-40 pb-20">
                <div className="flex flex-col">
                    <h3 className="text-blue-600 text-base uppercase font-semibold">How it works</h3>
                    <h2 className="text-4xl text-white mt-6">Video analysis, easier than ever before.</h2>
                    <p className="text-white mt-6 max-w-[64ch] leading-[2rem] text-lg">Safe Security Dynamics turns security cameras into intelligent sensors.</p>
                </div>
                <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        STEPS.map(({ title, description }, index) => (
                            <li key={title} className={`${index === currentStepIndex ? 'bg-yellow-300 text-black' : 'bg-white/5 hover:bg-gradient-to-br hover:from-white/5 hover:to-white/10 text-white'} relative pb-4 border border-white/20 rounded-2xl transition-[background-color] duration-300`}>
                                <button onClick={() => selectStepIndex(index)} className="p-4 flex gap-4 text-left cursor-pointer">
                                    <div className="relative">
                                        <span className={`${index === currentStepIndex ? 'bg-black text-yellow-300' : 'bg-blue-500 text-white'} flex items-center justify-center w-10 aspect-square rounded-full`}>
                                            <span>{index + 1}</span>
                                        </span>
                                        {
                                            index === currentStepIndex ?
                                                <span className="absolute top-0 left-0 w-full aspect-square">
                                                    <CircleSector width={40} height={40} index={index} />
                                                </span> :
                                                null
                                        }
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl h-10 flex items-center">{title}</h3>
                                        <p className="text-sm font-light">{description}</p>
                                    </div>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.section>
    )
};


function CircleSector({ width, height, index }: { width: number; height: number; index: number; }) {
    const radius = width / 2 - 2;

    const pathNumber = useMotionValue(0);
    const pathD = useTransform(pathNumber, (value) => {
        return describeSector(width/2, height/2, radius, 0, value);
    });

    useEffect(() => {
        let control = animate(pathNumber, [0, 359.99], {
            ease: 'linear', 
            duration: 4.8,
            onComplete() {
                control.stop();
            }
        })
    }, []);


    return (
        <svg id="circle-cutout" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <mask id="sector-mask">
                <rect width="100%" height="100%" fill="white" />
                <motion.path 
                    key={index}
                    fill="black"
                    d={pathD}
                />
            </mask>
            <circle cx={width/2} cy={height/2} r={radius} mask="url(#sector-mask)" strokeWidth={2} className="fill-transparent stroke-yellow-300">
            </circle>
        </svg>
    )
};

function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: cx + r * Math.cos(angleInRadians),
        y: cy + r * Math.sin(angleInRadians)
    };
};

function describeSector(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        "M", cx, cy,
        "L", start.x, start.y,
        "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
        "Z"
    ].join(" ");
};