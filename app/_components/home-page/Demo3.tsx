
import { useEffect } from "react";

import { FiUser } from "react-icons/fi";
import { MdInsights } from "react-icons/md";

import HeroAppDemoContainer from "./HeroAppDemoContainer";


type CarouselProps = { 
    goToNextSlide: () => void; 
    carouselTimeout: React.RefObject<NodeJS.Timeout | null>; 
    duration: number; 
};

const STATS = [
    {
        value: "32%",
        title: "Increase in traffic",
        colors: "bg-gradient-to-r from-blue-main to-blue-700 text-white",
        chartColor: "bg-gradient-to-b from-blue-300 to-blue-600",
        chartHeights: ['50%', '25%', '75%', '80%', '60%']
    },
    {
        value: "64,308",
        title: "Cars parked",
        colors: "bg-gradient-to-r from-teal-400 to-teal-200 text-teal-900",
        chartColor: "bg-gradient-to-b from-teal-600 to-teal-400",
        chartHeights: ['20%', '75%', '55%', '60%', '40%']
    },
    {
        value: "32k",
        title: "Vehicles detected",
        colors: "bg-gradient-to-r from-purple-300 to-purple-200 text-purple-900",
        chartColor: "bg-gradient-to-b from-purple-600 to-purple-400",
        chartHeights: ['70%', '55%', '25%', '40%', '80%']
    },
    {
        value: "135+",
        title: "Users created",
        colors: "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900",
        chartColor: "bg-gradient-to-b from-yellow-600 to-yellow-500",
        chartHeights: ['40%', '30%', '65%', '80%', '50%']
    },
]

export default function HeroAppDemo3({ goToNextSlide, carouselTimeout, duration }: CarouselProps) {

    useEffect(() => {
        if(carouselTimeout.current) clearTimeout(carouselTimeout.current);
        carouselTimeout.current = setTimeout(goToNextSlide, duration);
    }, []);

    return (
        <HeroAppDemoContainer>
            <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] grid-rows-1 p-4 sm:p-6 md:p-8 gap-4 md:gap-6">
                <div className="flex flex-col gap-4 md:gap-6">
                    {
                        STATS.map(({ value, title, colors, chartColor, chartHeights }) => (
                            <div className={`${colors} relative flex-1 flex items-center gap-4 px-6 py-4 rounded-xl overflow-hidden`}>
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl font-semibold">{value}</span>
                                    <span className="text-sm uppercase font-semibold">{title}</span>
                                </div>
                                <div 
                                    style={{ maskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1), black)'}} 
                                    className="absolute top-0 right-0 max-w-[240px] w-4/5 h-full flex items-end gap-2"
                                >
                                    {
                                        chartHeights.map((chartHeight) => (
                                            <span key={chartHeight} style={{ minHeight: chartHeight }} className={`${chartColor} block flex-1 min-w-4 rounded-t-xl bg-white`} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="hidden md:flex flex-col gap-4 md:gap-6">
                    <div className="flex-2 rounded-2xl bg-white p-6 flex flex-col">
                        <span className="text-gray-800 flex items-center gap-3">
                            <MdInsights size={16} />
                            <span className="text-base font-semibold">Insights</span>
                        </span>

                        <span className="block mt-6 w-full h-6 rounded-full bg-gray-200" />
                        <span className="block mt-3 w-4/5 h-3 rounded-full bg-gray-200" />
                        <span className="block mt-3 w-full h-3 rounded-full bg-gray-200" />
                        <span className="block mt-3 w-1/2 h-3 rounded-full bg-gray-200" />
                        <span className="block flex-1 mt-4 rounded-xl bg-gray-100" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-white text-gray-800 p-4 flex flex-col">
                        <span className="block w-1/2 h-4 rounded-full bg-gray-200" />
                        <div className="mt-4 p-3 border border-gray-200 rounded-xl flex-1 flex items-center gap-4">
                            <span className="flex items-center justify-center w-12 aspect-square rounded-full bg-gray-100">
                                <FiUser size={24} />
                            </span>
                            <div className="flex-1 flex flex-col gap-2">
                                <span className="block w-full h-4 rounded-full bg-gray-200" />
                                <span className="block w-4/5 h-3 rounded-full bg-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeroAppDemoContainer>
    )
}