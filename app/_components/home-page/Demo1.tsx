
import Image from "next/image";
import { useEffect } from "react";

import HeroAppDemoContainer from './HeroAppDemoContainer';

type CarouselProps = { 
    goToNextSlide: () => void; 
    carouselTimeout: React.RefObject<NodeJS.Timeout | null>; 
    duration: number; 
};

const CAMERAS = [
    { id: 1, name: "Delaware", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-1.png", timeStamp: "12:00 AM"},
    { id: 2, name:"Commercial", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-2.webp", timeStamp: "12:00 AM"},
    { id: 3, name:"Londonderry", cameraStatus: "DISABLED", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-3.jpg", timeStamp:"12:00 AM"},
    { id: 4, name: "Barby", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-4.jpeg", timeStamp: "12:00 AM"},
    { id: 5, name: "Alpine", cameraStatus: "INACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-5.jpg", timeStamp: "12:00 AM"},
    { id: 6, name: "Crescent Oaks", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-6.jpg", timeStamp: "12:00 AM"},
];

export default function AppDemo({ goToNextSlide, carouselTimeout, duration }: CarouselProps) {

    useEffect(() => {
        if(carouselTimeout.current) clearTimeout(carouselTimeout.current);
        carouselTimeout.current = setTimeout(goToNextSlide, duration);
    }, []);

    return (
        <HeroAppDemoContainer>
            <div className="w-full grid grid-cols-[repeat(3,_auto)] sm:grid-cols-3 lg:grid-cols-[repeat(3,_auto)] grid-rows-2 p-4 sm:p-6 md:p-8 gap-4 md:gap-6">
                {
                    CAMERAS.map(({ id, name, cameraFootage }) => (
                        <div key={id}>
                            <div className="h-full aspect-square sm:aspect-auto lg:aspect-square flex flex-col gap-3 overflow-hidden rounded-xl p-2 bg-white shadow-xl shadow-black/20">
                                <span className="relative flex-1">
                                    <Image src={cameraFootage} fill alt="Camera footage" className="w-full h-full object-cover block rounded-md" />
                                </span>
                                <span className="bg-white flex flex-col gap-2">
                                    <div className="flex flex-1 gap-1 items-center">
                                        <span className="h-3 rounded-full w-1 bg-blue-main block" />
                                        <span className="text-[.6rem] text-blue-main font-bold">{name}</span>
                                    </div>
                                    <div className="hidden sm:flex flex-wrap items-center gap-2">
                                        <span className="flex items-center gap-1 text-blue-500 border border-blue-200 p-0.5 pr-2 rounded-sm">
                                            <span className="flex w-3 aspect-square items-center justify-center bg-blue-200 rounded-sm"></span>
                                            <span className="text-[.5rem] tracking-tight whitespace-nowrap">Camera is active</span>
                                        </span>
                                        <span className="flex items-center gap-1 text-red-500 border border-red-200 p-0.5 pr-2 rounded-sm">
                                            <span className="flex w-3 aspect-square items-center justify-center bg-red-200 rounded-sm"></span>
                                            <span className="text-[.5rem] tracking-tight whitespace-nowrap">Audio available</span>
                                        </span>
                                        <span className="flex items-center gap-1 text-green-500 border border-green-200 p-0.5 pr-2 rounded-sm">
                                            <span className="flex w-3 aspect-square items-center justify-center bg-green-200 rounded-sm"></span>
                                            <span className="text-[.5rem] tracking-tight">Jun 14 / 12:00:00 am</span>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </HeroAppDemoContainer>
    )
};