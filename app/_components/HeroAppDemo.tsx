import Image from "next/image";
import { IoPerson } from "react-icons/io5";



const CAMERAS = [
    { id: 1, name: "Delaware", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-1.png", timeStamp: "12:00 AM"},
    { id: 2, name:"Commercial", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-2.webp", timeStamp: "12:00 AM"},
    { id: 3, name:"Londonderry", cameraStatus: "DISABLED", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-3.jpg", timeStamp:"12:00 AM"},
    { id: 4, name: "Barby", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-4.jpeg", timeStamp: "12:00 AM"},
    { id: 5, name: "Alpine", cameraStatus: "INACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-5.jpg", timeStamp: "12:00 AM"},
    { id: 6, name: "Crescent Oaks", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-6.jpg", timeStamp: "12:00 AM"},
];


export default function HeroAppDemo() {

    return (
        <div className="h-full w-full max-h-[var(--max-hero-height)]">
            <div className="flex relative left-0 lg:left-[10%] w-[110%] sm:w-full lg:w-[110%] h-full rounded-2xl overflow-hidden bg-gradient-to-r from-white/20 to-white/5">
                <div className="w-12 md:w-14 flex flex-col bg-blue-500">
                    <span className="w-full aspect-square flex items-center justify-center bg-blue-main">
                        <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-10 h-auto rounded-full" />
                    </span>
                    <div className="flex-1 flex flex-col justify-between items-center gap-4 md:gap-6 p-3 py-6">
                        <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-2 md:gap-3">
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <span key={item} className="block w-5 md:w-[28px] aspect-square rounded-sm bg-white/30" />
                                ))
                            }
                        </div>
                        <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-2 md:gap-3">
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <span key={item} className="block w-5 md:w-[28px] aspect-square rounded-sm bg-white/30" />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-2 md:p-3">
                        <span className="flex items-end justify-center mb-2 md:mb-3 bg-white text-gray-300 aspect-square w-full rounded-full overflow-hidden">
                            <IoPerson size={28} className="mb-[-2px]" />
                        </span>
                    </div>
                </div>
                <div className="w-full grid grid-cols-[repeat(3,_auto)] sm:grid-cols-3 lg:grid-cols-[repeat(3,_auto)] grid-rows-2 p-4 sm:p-6 md:p-8 gap-4 md:gap-6">
                    {
                        CAMERAS.map(({ id, name, cameraFootage }) => (
                            <div key={id}>
                                <div className="h-full aspect-square sm:aspect-auto lg:aspect-square flex flex-col overflow-hidden rounded-xl">
                                    <span className="bg-white flex justify-between items-center gap-2 px-3 py-2">
                                        <div className="flex flex-1 gap-2 items-center">
                                            <span className="w-3 aspect-square rounded-sm border border-gray-300" />
                                            <span className="text-[.55rem] text-gray-800 font-bold">{name}</span>
                                        </div>
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 aspect-square rounded-full bg-green-400" />
                                            <span className="text-[.55rem] text-gray-800 tracking-tight">online</span>
                                        </span>
                                    </span>
                                    <span className="relative flex-1">
                                        <Image src={cameraFootage} fill alt="Camera footage" className="w-full h-full object-cover" />
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}