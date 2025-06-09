
import { useRef } from "react";
import { BsGear } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { FiClipboard, FiFastForward, FiPlay, FiRewind } from "react-icons/fi";
import { GrOptimize } from "react-icons/gr";
import { PiGraph } from "react-icons/pi";
import HeroAppDemoContainer from "./HeroAppDemoContainer";


type CarouselProps = { 
    goToNextSlide: () => void; 
    carouselTimeout: React.RefObject<NodeJS.Timeout | null>; 
    duration: number; 
};

const PLACEHOLDERS = [
    {
        title: "Gear",
        backgroundColor: "bg-yellow-100/60",
        textColor: "bg-yellow-200",
        Icon: BsGear
    },
    {
        title: "Graph",
        backgroundColor: "bg-blue-100/60",
        textColor: "bg-blue-200",
        Icon: PiGraph
    },
    {
        title: "Analytics",
        backgroundColor: "bg-green-100/60",
        textColor: "bg-green-200",
        Icon: GrOptimize
    },
    {
        title: "Clipboard",
        backgroundColor: "bg-purple-100/60",
        textColor: "bg-purple-200",
        Icon: FiClipboard
    },
];

export default function HeroAppDemo2({ goToNextSlide, carouselTimeout }: CarouselProps) {
    const video = useRef<HTMLVideoElement>(null);

    function handleVideoEnd() {
        if(carouselTimeout.current) clearTimeout(carouselTimeout.current);
        carouselTimeout.current = null;
        goToNextSlide();
    };

    function startVideo() {
        video?.current?.play();
    };

    return (
        <HeroAppDemoContainer>
            <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] grid-rows-1 p-4 sm:p-6 md:p-8 gap-4 md:gap-6">  
                <div className="flex flex-col p-4 rounded-l-xl md:rounded-r-xl bg-white">
                    <video ref={video} src="/animations/SSD_Animation_video1.mp4" muted controls={false} onLoadedData={startVideo} onEnded={handleVideoEnd} className="w-full h-auto min-h-[200px] object-cover rounded-lg border-3 border-gray-200" />
                    <span className="mt-4 overflow-hidden relative flex bg-blue-200 h-1 w-full rounded-full before:w-1/2 before:bg-blue-800" />
                    <div className="mt-2 flex items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <span className="flex items-center justify-center bg-blue-100 w-8 aspect-square rounded-full text-blue-800">
                                <FiRewind size={12} />
                            </span>
                            <span className="flex items-center justify-center bg-blue-100 w-8 aspect-square rounded-full text-blue-800">
                                <FiPlay size={12} />
                            </span>
                            <span className="flex items-center justify-center bg-blue-100 w-8 aspect-square rounded-full text-blue-800">
                                <FiFastForward size={12} />
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center justify-center gap-2 pl-2 pr-3 h-6 rounded-full bg-yellow-100 text-yellow-800">
                                <FaRegDotCircle size={12} className="s" />
                                <span className="text-xs font-semibold">Live</span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-6 flex flex-col md:p-4 rounded-lg md:bg-gray-100/50">
                        <span className="hidden md:block w-4/5 h-4 rounded-full bg-gray-200" />
                        <span className="block w-1/2 md:mt-4 h-2 rounded-full bg-gray-200" />
                        <span className="block w-1/2 mt-1 md:mt-2 h-2 rounded-full bg-gray-200" />
                        <span className="block w-4/5 mt-1 md:mt-2 h-2 rounded-full bg-gray-200" />
                    </div>
                </div>                    
                <div className="hidden md:flex flex-col gap-3 p-6 rounded-xl bg-white">
                    {
                        PLACEHOLDERS.map(({ title, backgroundColor, textColor, Icon }) => (
                            <div key={title} className={`${backgroundColor} flex-1 flex text-gray-700 items-center gap-4 p-4 rounded-xl`}>
                                <Icon size={36} />
                                <div className="flex flex-1 flex-col gap-1">
                                    <span className={`block w-full h-4 rounded-full ${textColor}`} />
                                    <span className={`block w-4/5 h-3 rounded-full ${textColor}`} />
                                </div>
                            </div>
                        ))
                    }
                </div>                  
            </div>
        </HeroAppDemoContainer>
    )
}